from contextlib import asynccontextmanager
from datetime import datetime, timedelta
from typing import Any

from fastapi import FastAPI, HTTPException, status


from database.models import ShipmentStatus

from database.session import SessionDep, create_db_tables
from schemas import ShipmentCreate, Shipment, ShipmentUpdate

# from rich import print, panel

@asynccontextmanager
async def lifespan_handler(app: FastAPI):
    
    # print(panel.Panel("Serve start...", title="Lifespan", style="bold green"))
    create_db_tables()
    yield
    # print(panel.Panel("Serve stop...", title="Lifespan", style="bold red"))

app = FastAPI(lifespan=lifespan_handler)


@app.get('/shipment/{id}', response_model=Shipment)
async def get_shipment(id: int, session: SessionDep):
    
    shipment = session.get(Shipment, id)
    if shipment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Give id does not exist!",
        )
        
    return shipment



@app.post('/shipment/', response_model=dict)
async def sumbit_shipment(shipment: ShipmentCreate, session: SessionDep) -> dict[str, Any]:
    
    new_shipment = Shipment(
        **shipment.model_dump(),
        status=ShipmentStatus.placed,
        estimated_delivery=datetime.now() + timedelta(days=3)
    )
    
    session.add(new_shipment)
    session.commit()
    session.refresh(new_shipment)
    return {"details": f"Shipment with id #{new_shipment.id} is created"}


@app.patch('/shipment/{id}', response_model=Shipment)
async def update_shipment(id: int, shipment_update: ShipmentUpdate, session: SessionDep):
    
    # exclude the none fields
    update = shipment_update.model_dump(exclude_none=True)
    
    if not update:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No data provided to update",
        )
    
    shipment = session.get(Shipment, id)
    shipment.sqlmodel_update(update)
    
    session.add(shipment)
    session.commit()
    session.refresh(shipment)
    
    return shipment


@app.delete('/shipment/{id}')
async def delete_shipment(id: int, session: SessionDep):
    
    session.delete(
        session.get(Shipment, id)
    )
    session.commit()
    return {"details": f"Shipment with id #{id} is delete"}


# @app.get("/shipment/delete_all")
# async def delete_all_shipments(session: SessionDep):
    
#     session.exec(Shipment).delete()
#     session.commit()
#     return {"details": "All shipments are deleted"}