Let’s walk through this **step by step with a practical example** using **MongoDB**.

---

### 1️⃣ Sample Collection (users)

Assume we have a **users** collection:

```json
[
 { "name": "Ahmed", "gender": "male", "age": 25 },
 { "name": "Sara", "gender": "female", "age": 22 },
 { "name": "Ali", "gender": "male", "age": 30 },
 { "name": "Mona", "gender": "female", "age": 28 },
 { "name": "Omar", "gender": "male", "age": 20 }
]
```

---

### 2️⃣ Aggregation Query

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$gender",
      averageAge: {
        $avg: "$age"
      }
    }
  }
])
```

---

### 3️⃣ What `$group` Does

`$group` **groups documents by a field** and performs calculations.

### `_id: "$gender"`

This means:

```
Group all users by gender
```

So MongoDB creates **two groups**:

```
Group 1 → male
Group 2 → female
```

---

### 4️⃣ Step-by-Step Processing

### Step 1 — Separate documents

```
male group
-----------
Ahmed 25
Ali 30
Omar 20

female group
-----------
Sara 22
Mona 28
```

---

### Step 2 — Apply `$avg`

```
male average
(25 + 30 + 20) / 3 = 25

female average
(22 + 28) / 2 = 25
```

---

### 5️⃣ Final Result

MongoDB returns:

```json
[
  {
    "_id": "male",
    "averageAge": 25
  },
  {
    "_id": "female",
    "averageAge": 25
  }
]
```

Meaning:

```
Average age of males   = 25
Average age of females = 25
```

---

### 6️⃣ Visual Pipeline

```
users collection
       │
       ▼
   $group by gender
       │
       ▼
 calculate average age
       │
       ▼
 result documents
```

---

### 7️⃣ Real Backend Example (Node.js)

Example using **Node.js** with **Mongoose**:

```javascript
const result = await User.aggregate([
  {
    $group: {
      _id: "$gender",
      averageAge: { $avg: "$age" }
    }
  }
]);

console.log(result);
```

---

### 8️⃣ Another Useful Version

You can also count users in each gender group:

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$gender",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
])
```

Result:

```json
[
 { "_id": "male", "averageAge": 25, "totalUsers": 3 },
 { "_id": "female", "averageAge": 25, "totalUsers": 2 }
]
```

---

✅ **Key idea to remember**

```
$group = SQL GROUP BY
```

Example comparison:

SQL

```sql
SELECT gender, AVG(age)
FROM users
GROUP BY gender;
```

MongoDB

```js
$group: {
   _id: "$gender",
   averageAge: { $avg: "$age" }
}
```

---

💡 If you'd like, I can also show you a **very powerful `$group` example used in real APIs** (like **calculating total sales, orders per user, etc.**) that backend engineers use daily.
