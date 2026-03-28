**Title:** Find Users Who Have Both Specific Tags (`enim` and `id`)

Your aggregation pipeline is correct. It finds all users whose `tags` array contains **both** `"enim"` and `"id"`.

```js
// Find users who have both 'enim' and 'id' as their tags

[
  {
    $match: {
      tags: { $all: ['enim', 'id'] }
    }
  }
]
```

### Explanation

* **`$match`** → Filters documents in the collection.
* **`tags`** → The field that contains an **array of tags**.
* **`$all`** → Ensures that the array contains **all specified values**.

So MongoDB returns only documents where:

```
tags = ["enim", "something", "id"]
tags = ["id", "enim"]
tags = ["id", "x", "enim", "y"]
```

But **not**:

```
["enim"]          ❌
["id"]            ❌
["enim", "other"] ❌
```

### Example Document That Matches

```json
{
  "name": "Ahmed",
  "tags": ["enim", "id", "backend"]
}
```

### Optional Improvement

If you only want **names of users**, you could add `$project`:

```js
[
  {
    $match: {
      tags: { $all: ['enim', 'id'] }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1
    }
  }
]
```

This will return only the user names.

---

If you want, I can also show **3 very common MongoDB array interview queries** (they appear frequently in backend interviews).
