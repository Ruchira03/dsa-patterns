

// | Operation           | Array         | String         | Object                  | Map           | Set           | Stack         | Queue            | Deque             |
// | ------------------- | ------------- | -------------  | ----------------------- | ------------- | ------------- | ------------- | ---------------- | ----------------- |
// | **Create**          | `[]`          | `""`           | `{}`                    | `new Map()`   | `new Set()`   | `[]`          | `[]`             | `[]`              |
// | **Length / Size**   | `arr.length`  | `str.length`   | `Object.keys(o).length` | `map.size`    | `set.size`    | `stk.length`  | `q.length-start` | `dq.length`       |
// | **Access**          | `arr[i]`      | `str[i]`       | `o[k]`                  | `map.get(k)`  | —             | `stk[top]`    | `q[start]`       | `dq[0] / dq[end]` |
// | **Insert (end)**    | `push(x)`     | ❌             | `o[k]=v`                | `set(k,v)`    | `add(x)`      | `push(x)`     | `push(x)`        | `push(x)`         |
// | **Insert (start)**  | `unshift(x)`  | ❌             | ❌                      | ❌            | ❌            | ❌            | ❌               | `unshift(x)`      |
// | **Delete (end)**    | `pop()`       | ❌             | `delete o[k]`           | `delete(k)`   | `delete(x)`   | `pop()`       | ❌               | `pop()`           |
// | **Delete (start)**  | `shift()`     | ❌             | ❌                      | ❌            | ❌            | ❌            | `start++`        | `shift()`         |
// | **Search**          | `includes(x)` | `includes(x)`  | `k in o`                | `has(k)`      | `has(x)`      | `includes(x)` | linear           | `includes(x)`     |
// | **Update**          | `arr[i]=x`    | ❌             | `o[k]=v`                | `set(k,v)`    | ❌            | `stk[i]=x`   | ❌                | `dq[i]=x`         |
// | **Iterate**         | `for/of`      | `for/of`       | `for/in`                | `for(of)`     | `for(of)`     | `for(of)`     | loop             | `for(of)`         |
// | **Convert → Array** | —             | `[...str]`     | `Object.keys(o)`        | `[...map]`    | `[...set]`    | —             | —                | —                 |
// | **Clear**           | `arr=[]`      | ❌             | `{}`                    | `map.clear()` | `set.clear()` | `stk=[]`      | reset ptr        | `dq=[]`           |



// ⚠️ Important JS Gotchas (Must Remember)

// | Concept              | Note                      |
// | -------------------- | ------------------------- |
// | String mutation      | ❌ Not allowed (immutable) |
// | Array shift/unshift  | ❌ O(n)                    |
// | Queue with `shift()` | ❌ Avoid in interviews     |
// | Object key order     | Not guaranteed (use Map)  |
// | Map iteration        | Preserves insertion order |
// | Set uniqueness       | Auto-removes duplicates   |

// 🧩 Mental Model (Interview Shortcut)

// Array / Stack / Deque     → push / pop
// Queue                     → push / start++
// Hash-based                → get / set / has
// String → convert → array → operate
