```
// How many users have 'ad' as the second tag in their list of tags

[
  {
    $match: {
      "tags.1": "ad"
    }
  },

  {
    $count: 'SecondTagAd'
  }
]
```

### 📌 Count Users Whose Second Tag Is `"ad"`

Your aggregation pipeline in **MongoDB** finds **how many users have `"ad"` as the second element in their `tags` array**.

Pipeline:

```javascript
[
  {
    $match: {
      "tags.1": "ad"
    }
  },

  {
    $count: "SecondTagAd"
  }
]
```

### What the Title Means

* **Second Tag** → array index `1` (arrays start at `0`)
* **`"ad"`** → the value we want in that position
* **Count Users** → return the total number of matching documents

So the title accurately describes:

> **Count Users Whose Second Tag Is "ad"**

If you'd like, I can also show a **small but important MongoDB trick with array indexes (`tags.0`, `tags.1`, `tags.2`) that many developers overlook.**
