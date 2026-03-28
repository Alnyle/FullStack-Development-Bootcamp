
```js
// Catgorize users by their favorite fruit.

[
  {
    $group: {
      _id: "$favoriteFruit",
      users: { $push: "$name" }
    }
  }
]
```


This aggregation groups users **by their favorite fruit** and collects the **names of users in each fruit category**. Let’s break it down.

---

### 1️⃣ `$group`

```javascript id="7p6c1u"
{
  $group: {
    _id: "$favoriteFruit",
    users: { $push: "$name" }
  }
}
```

In **MongoDB**, `$group` combines documents that share the same value.

### `_id: "$favoriteFruit"`

This tells MongoDB:

```text
Group documents based on the favoriteFruit field
```

So all users who like **banana** go together, all users who like **apple** go together, etc.

Example input documents:

```json id="ckr2o4"
{ "name": "Aurelia", "favoriteFruit": "banana" }
{ "name": "John", "favoriteFruit": "apple" }
{ "name": "Sara", "favoriteFruit": "banana" }
{ "name": "Mike", "favoriteFruit": "apple" }
{ "name": "Emma", "favoriteFruit": "strawberry" }
```

---

### 2️⃣ `$push`

```javascript id="9l3rta"
users: { $push: "$name" }
```

`$push` **adds values into an array** inside each group.

Here it pushes the **name of each user** into an array called `users`.

---

### 3️⃣ Result after grouping

The output becomes:

```json id="r8oyq7"
[
  {
    "_id": "banana",
    "users": ["Aurelia", "Sara"]
  },
  {
    "_id": "apple",
    "users": ["John", "Mike"]
  },
  {
    "_id": "strawberry",
    "users": ["Emma"]
  }
]
```

Meaning:

```text
banana → Aurelia, Sara
apple → John, Mike
strawberry → Emma
```

---

### 🔎 Pipeline Logic

```text id="o6p5g4"
documents
   │
   ▼
group by favoriteFruit
   │
   ▼
collect user names into arrays
```

---
### 🧠 Visual Concept

Before grouping:

```text id="eqn3w7"
Aurelia → banana
John    → apple
Sara    → banana
Mike    → apple
Emma    → strawberry
```

After grouping:

```text id="8r4e0l"
banana      → [Aurelia, Sara]
apple       → [John, Mike]
strawberry  → [Emma]
```

---

💡 **Common variation (very useful):**

If you want **how many users prefer each fruit**, you would use `$sum` instead of `$push`:

```javascript id="u2gr4x"
{
  $group: {
    _id: "$favoriteFruit",
    count: { $sum: 1 }
  }
}
```

Result:

```text
banana → 2
apple → 2
strawberry → 1
```

---

If you'd like, I can also show you a **more advanced MongoDB aggregation pattern where you group AND compute statistics (count, avg age, etc.) per fruit**, which is very common in real backend analytics queries.
