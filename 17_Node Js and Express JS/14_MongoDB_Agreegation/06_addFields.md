This pipeline is another way (and usually a **better way**) to compute the **average number of tags per document** in **MongoDB**.
Instead of splitting documents with `$unwind`, it **directly counts the array size**.

Let's go step-by-step.

---

### 1️⃣ `$addFields`

```javascript
{
  $addFields: {
    numberOfTags: {
      $size: { $ifNull: ["$tags", []] }
    }
  }
}
```

### What `$addFields` does

It **adds a new field to every document** without removing the existing ones.

So a new field called:

```javascript
numberOfTags
```

will be added.

---

### Inside it: `$ifNull`

```javascript
$ifNull: ["$tags", []]
```

Meaning:

```text
If tags exists → use tags
If tags is null or missing → use an empty array []
```

Why?

Because `$size` **only works on arrays**.

If `tags` were `null`, `$size` would cause an error.
So this guarantees we always pass an array.

Example:

| tags field    | result of `$ifNull` |
| ------------- | ------------------- |
| ["a","b","c"] | ["a","b","c"]       |
| null          | []                  |
| missing       | []                  |

---

### Then `$size`

```javascript
$size: <array>
```

It simply returns the **length of the array**.

Example:

```javascript
$size: ["a","b","c","d"]
```

Result:

```text
4
```

---

### Example document transformation

Before:

```json
{
  "_id": 1,
  "name": "Aurelia",
  "tags": ["enim","id","velit","ad","consequat"]
}
```

After `$addFields`:

```json
{
  "_id": 1,
  "name": "Aurelia",
  "tags": ["enim","id","velit","ad","consequat"],
  "numberOfTags": 5
}
```

Another example:

```json
{
 "_id": 2,
 "name": "John",
 "tags": ["mongodb","database"]
}
```

Becomes:

```json
{
 "_id": 2,
 "name": "John",
 "tags": ["mongodb","database"],
 "numberOfTags": 2
}
```

Now **every document has `numberOfTags`**.

---

### 2️⃣ `$group`

```javascript
{
  $group: {
    _id: null,
    averageNumberOfTags: {
      $avg: "$numberOfTags"
    }
  }
}
```

### `_id: null`

This means:

```text
Group ALL documents together into one group
```

---

### `$avg`

It calculates the **average value** of `numberOfTags`.

Example dataset after `$addFields`:

| _id | numberOfTags |
| --- | ------------ |
| 1   | 5            |
| 2   | 2            |
| 3   | 3            |

Average:

```
(5 + 2 + 3) / 3 = 3.33
```

Final result:

```json
{
  "_id": null,
  "averageNumberOfTags": 3.33
}
```

---

### 🔎 Full Pipeline Logic

```
documents
   ↓
count tags using $size
   ↓
store in numberOfTags
   ↓
average numberOfTags
```

---

### ⚡ Why this pipeline is better

Compared to the `$unwind` approach:

| Method  | Performance            |
| ------- | ---------------------- |
| $unwind | duplicates documents   |
| $size   | keeps documents intact |

So this pipeline is **much more efficient**, especially when documents have large arrays.

---

✅ **Rule of thumb in MongoDB**

Use:

* `$size` → when you only need the **length of an array**
* `$unwind` → when you need to **process each element individually**

