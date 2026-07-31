In FastAPI, **lifespan** is the modern way to run code when your application starts up and shuts down. It replaces the older `@app.on_event("startup")` and `@app.on_event("shutdown")` pattern.

### Basic Example

```python
from fastapi import FastAPI
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code
    print("Starting application...")
    
    yield
    
    # Shutdown code
    print("Shutting down application...")

app = FastAPI(lifespan=lifespan)
```

When you run the server:

```bash
uvicorn main:app --reload
```

Output:

```
Starting application...
INFO: Uvicorn running on ...
...
Shutting down application...
```

---

## Why Use Lifespan?

Typical startup tasks:

* Create database connections
* Load machine learning models
* Initialize caches
* Create thread pools
* Connect to Redis

Typical shutdown tasks:

* Close database connections
* Release resources
* Stop background workers

Example:

```python
from fastapi import FastAPI
from contextlib import asynccontextmanager
from sqlmodel import create_engine

engine = create_engine("sqlite:///database.db")

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Connecting to database")
    
    # Store shared objects in app.state
    app.state.engine = engine
    
    yield
    
    print("Closing resources")

app = FastAPI(lifespan=lifespan)
```

---

## Accessing Objects Created During Startup

A common pattern is to save resources in `app.state`:

```python
from fastapi import Request

@app.get("/")
async def root(request: Request):
    engine = request.app.state.engine
    return {"message": "Database available"}
```

---

## Old vs New Approach

### Old

```python
@app.on_event("startup")
async def startup():
    ...

@app.on_event("shutdown")
async def shutdown():
    ...
```

### New (Recommended)

```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    ...
    yield
    ...

app = FastAPI(lifespan=lifespan)
```

The code **before `yield`** runs once when the server starts, and the code **after `yield`** runs once when the server shuts down.

---

## Example with SQLModel

If you're using SQLModel, you often create tables during startup:

```python
from fastapi import FastAPI
from sqlmodel import SQLModel, create_engine
from contextlib import asynccontextmanager

engine = create_engine("sqlite:///shipments.db")

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(lifespan=lifespan)
```

This ensures all tables are created before FastAPI begins handling requests.
