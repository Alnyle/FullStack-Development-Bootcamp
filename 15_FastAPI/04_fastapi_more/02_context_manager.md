Your code is trying to implement a **context manager** for a database connection. Let me explain each concept.

---

## 1. What is a Cursor in SQLite?

When you connect to a database:

```python
self.conn = sqlite3.connect("sqlite.db")
```

you get a **connection object**.

To execute SQL commands, you create a **cursor**:

```python
self.cur = self.conn.cursor()
```

Think of it like this:

* **Connection** = the phone line to the database.
* **Cursor** = the person speaking through the phone and sending commands.

### Common Cursor Methods

#### Execute a query

```python
self.cur.execute(
    "SELECT * FROM shipment WHERE id = ?",
    (id,)
)
```

Runs an SQL statement.

---

#### Fetch one row

```python
row = self.cur.fetchone()
```

Returns the next row from the result.

Example:

```python
(1, "Books", 5.2, "placed")
```

---

#### Fetch all rows

```python
rows = self.cur.fetchall()
```

Returns all remaining rows.

Example:

```python
[
    (1, "Books", 5.2, "placed"),
    (2, "Laptop", 3.0, "shipped")
]
```

---

#### Commit changes

```python
self.conn.commit()
```

Required after:

* INSERT
* UPDATE
* DELETE

Without `commit()`, changes may not be saved.

---

## 2. What is a Context Manager?

A context manager is an object that automatically handles setup and cleanup.

Example:

```python
with open("file.txt") as f:
    data = f.read()
```

Python automatically:

1. Opens the file.
2. Lets you use it.
3. Closes it afterward.

Even if an exception occurs.

---

### General Form

```python
with something as obj:
    # use obj
```

Python internally does:

```python
obj = something

obj.__enter__()

try:
    # block code
finally:
    obj.__exit__()
```

---

## 3. What does `__enter__()` do?

`__enter__()` runs when entering the `with` block.

Your code:

```python
def __enter__(self):
    self.conntect_to_db()
```

This opens the database connection.

A better version:

```python
def __enter__(self):
    self.conntect_to_db()
    return self
```

The returned value becomes the variable after `as`.

Example:

```python
with Database() as db:
    db.get(1)
```

Here:

```python
db = Database().__enter__()
```

So `__enter__()` must return `self`.

---

## 4. What does `__exit__()` do?

When leaving the `with` block, Python calls:

```python
__exit__(exc_type, exc_val, exc_tb)
```

It is used for cleanup.

Example:

```python
def __exit__(self, exc_type, exc_val, exc_tb):
    self.close()
```

This ensures the database connection closes automatically.

---

## 5. Mistakes in Your Code

### Mistake 1

You wrote:

```python
def __exist__(self, *args):
```

It should be:

```python
def __exit__(self, exc_type, exc_val, exc_tb):
```

Python only recognizes `__exit__`.

---

### Mistake 2

You forgot to return `self` from `__enter__`.

Current:

```python
def __enter__(self):
    self.conntect_to_db()
```

Correct:

```python
def __enter__(self):
    self.conntect_to_db()
    return self
```

---

### Mistake 3

Using the class instead of an instance:

```python
with Database as db:
```

This is wrong.

You must create an object:

```python
with Database() as db:
```

---

## 6. How Python Executes Your `with` Block

For:

```python
with Database() as db:
    db.get(1)
```

Python roughly does:

```python
db_obj = Database()

db = db_obj.__enter__()

try:
    db.get(1)
finally:
    db_obj.__exit__(None, None, None)
```

---

## 7. Correct Version

```python
class Database:

    def __enter__(self):
        self.conntect_to_db()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()
```

Usage:

```python
with Database() as db:
    shipment = db.get(1)
    print(shipment)
```

Execution flow:

1. `Database()` creates the object.
2. `__enter__()` opens the database.
3. Code inside `with` runs.
4. `__exit__()` closes the database automatically.

This is why context managers are useful: they guarantee that resources such as files, database connections, sockets, and locks are cleaned up properly, even if an error occurs inside the `with` block.
