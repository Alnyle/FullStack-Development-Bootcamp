This aggregation pipeline in **MongoDB** finds the **top 2 countries with the most users based on their company location**.

Let’s break it down **step-by-step with a practical example**.

---

### 1️⃣ Example Documents

Suppose your collection contains documents like this:

```json
[
 {
   "name": "Ahmed",
   "company": {
     "name": "TechCorp",
     "location": {
       "country": "Egypt"
     }
   }
 },
 {
   "name": "Sara",
   "company": {
     "name": "Innova",
     "location": {
       "country": "USA"
     }
   }
 },
 {
   "name": "Ali",
   "company": {
     "name": "FutureSoft",
     "location": {
       "country": "Egypt"
     }
   }
 },
 {
   "name": "John",
   "company": {
     "name": "NextGen",
     "location": {
       "country": "Germany"
     }
   }
 },
 {
   "name": "Mona",
   "company": {
     "name": "Innova",
     "location": {
       "country": "USA"
     }
   }
 }
]
```

Notice the **nested field**:

```
company.location.country
```

MongoDB allows accessing nested fields using **dot notation**.

---

### 2️⃣ Stage 1 — `$group`

```javascript
{
  $group: {
    _id: "$company.location.country",
    userCount: { $sum: 1 }
  }
}
```

### What happens here

MongoDB:

1. Reads the field

   ```
   company.location.country
   ```

2. Groups users by country.

3. Counts how many users belong to each country.

`$sum: 1` means:

```
Add 1 for every document in the group
```

Result after grouping:

```json
[
 { "_id": "Egypt", "userCount": 2 },
 { "_id": "USA", "userCount": 2 },
 { "_id": "Germany", "userCount": 1 }
]
```

---

### 3️⃣ Stage 2 — `$sort`

```javascript
{
  $sort: {
    userCount: -1
  }
}
```

Sorts countries by **number of users descending**.

```
-1 = descending
```

Result:

```json
[
 { "_id": "Egypt", "userCount": 2 },
 { "_id": "USA", "userCount": 2 },
 { "_id": "Germany", "userCount": 1 }
]
```

---

### 4️⃣ Stage 3 — `$limit`

```javascript
{
  $limit: 2
}
```

Keeps only the **top 2 results**.

Final result:

```json
[
 { "_id": "Egypt", "userCount": 2 },
 { "_id": "USA", "userCount": 2 }
]
```

Meaning:

```
Top 2 countries where most users work
```

---

### 5️⃣ Pipeline Visualization

```
users collection
       │
       ▼
group by company.location.country
       │
       ▼
count users per country
       │
       ▼
sort by userCount
       │
       ▼
return top 2
```

---

### 6️⃣ SQL Equivalent (for intuition)

This aggregation is similar to:

```sql
SELECT company.location.country, COUNT(*) AS userCount
FROM users
GROUP BY company.location.country
ORDER BY userCount DESC
LIMIT 2;
```

---

### 7️⃣ Why This Is Useful in Real Systems

Backend engineers use this pattern for analytics such as:

* **Top countries where users are located**
* **Most active regions**
* **Most common company locations**
* **User distribution by geography**

Example API endpoint:

```
GET /analytics/top-countries
```

---

✅ **Important concept used here**

```
Dot notation in MongoDB
```

Example:

```
"company.location.country"
```

This accesses **deeply nested fields inside documents**.

---

💡 Since you are learning backend and MongoDB, a **very powerful upgrade to this pipeline** is adding **`$match` before `$group`** to filter data (this is extremely common in production).

Example:

```
$match → $group → $sort → $limit
```

