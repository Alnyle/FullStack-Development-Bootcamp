`SQLModel` is a library that combines the best parts of:

* **Pydantic** → data validation and serialization
* **SQLAlchemy** → database ORM functionality

It lets you define a class once and use it both for:

1. Validating API data.
2. Creating database tables.

---

## Your Example Explained

```python
from sqlmodel import Field, SQLModel
from enum import Enum
import datetime
```

### `SQLModel`

```python
class Shipment(SQLModel):
```

`SQLModel` is the base class. By inheriting from it, the class gains:

* Type validation
* Serialization (`dict`, JSON, etc.)
* ORM capabilities

---

## Enum

```python
class ShipmentStatus(str, Enum):
    placed = "placed"
    in_transit = "in_transit"
    out_for_delivery = "out_for_delivery"
    delivered = "delivered"
```

This restricts the status to only these values.

Valid:

```python
ShipmentStatus.placed
ShipmentStatus.delivered
```

or

```python
status="placed"
```

Invalid:

```python
status="lost"
```

This would raise a validation error.

---

## Fields

### Primary Key

```python
id: int = Field(primary_key=True)
```

Equivalent SQL:

```sql
id INTEGER PRIMARY KEY
```

This column uniquely identifies each shipment.

Usually you'll also make it optional so the database can generate it:

```python
id: int | None = Field(default=None, primary_key=True)
```

---

### Content

```python
content: str
```

Stores the shipment description.

Example:

```python
content="Laptop"
```

SQL:

```sql
content TEXT
```

---

### Weight

```python
weight: float = Field(le=25)
```

`le` means **less than or equal to**.

Valid:

```python
weight=20
weight=25
```

Invalid:

```python
weight=30
```

Validation error:

```
Input should be less than or equal to 25
```

---

### Destination

```python
destination: int
```

Stores a destination identifier.

Example:

```python
destination=101
```

---

### Status

```python
status: ShipmentStatus
```

Only accepts values from the enum.

Example:

```python
status=ShipmentStatus.in_transit
```

or

```python
status="in_transit"
```

---

### Estimated Delivery

```python
estimated_delivery: datetime
```

Stores a date and time.

Example:

```python
estimated_delivery=datetime.datetime(
    2026, 7, 20, 12, 0
)
```

SQL column:

```sql
estimated_delivery DATETIME
```

---

## Creating a Table

To make this class become a database table, you need:

```python
class Shipment(SQLModel, table=True):
```

instead of:

```python
class Shipment(SQLModel):
```

Without `table=True`, SQLModel treats it as a data model only and won't create a table.

---

## Correct Version

```python
from sqlmodel import SQLModel, Field
from enum import Enum
from datetime import datetime

class ShipmentStatus(str, Enum):
    placed = "placed"
    in_transit = "in_transit"
    out_for_delivery = "out_for_delivery"
    delivered = "delivered"


class Shipment(SQLModel, table=True):
    __tablename__ = "shipment"

    id: int | None = Field(default=None, primary_key=True)
    content: str
    weight: float = Field(le=25)
    destination: int
    status: ShipmentStatus
    estimated_delivery: datetime
```

---

## Example Usage

```python
shipment = Shipment(
    content="Laptop",
    weight=2.5,
    destination=101,
    status=ShipmentStatus.placed,
    estimated_delivery=datetime(2026, 7, 20)
)

print(shipment)
```

Output:

```python
Shipment(
    content='Laptop',
    weight=2.5,
    destination=101,
    status=<ShipmentStatus.placed: 'placed'>,
    estimated_delivery=datetime(...)
)
```

The key idea is that **one `SQLModel` class serves two purposes simultaneously**:

* It validates incoming data (like a Pydantic model).
* It maps to a database table (like a SQLAlchemy model).
