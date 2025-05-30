"Promise" is a concept primarily used in JavaScript (and other modern programming languages) to handle asynchronous operations. Here's an overview of **all types of promises** (or states and methods of working with them) commonly seen in JavaScript:

---

### 🔄 **Promise States**

1. **Pending**

   * Initial state; neither fulfilled nor rejected.
2. **Fulfilled (Resolved)**

   * The operation completed successfully.
3. **Rejected**

   * The operation failed.

---

### 🧱 **Creating Promises**

```javascript
let myPromise = new Promise((resolve, reject) => {
    // async operation
    if (success) {
        resolve("Data");
    } else {
        reject("Error");
    }
});
```

---

### 🔧 **Handling Promises**

1. **.then()** – Handles fulfillment.
2. **.catch()** – Handles rejection.
3. **.finally()** – Runs after resolution or rejection.

```javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

---

### 🧰 **Types of Promise Usage**

Here are different **categories** or **styles** of using promises:

#### 1. **Chained Promises**

```javascript
doSomething()
  .then(result => doSomethingElse(result))
  .then(nextResult => console.log(nextResult))
  .catch(err => console.error(err));
```

#### 2. **Promise.all()**

Waits for **all** promises to resolve or any to reject.

```javascript
Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(err => console.error(err));
```

#### 3. **Promise.race()**

Returns the **first** settled promise (resolved or rejected).

```javascript
Promise.race([promise1, promise2])
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

#### 4. **Promise.allSettled()**

Waits for **all** promises to complete, regardless of outcome.

```javascript
Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
```

#### 5. **Promise.any()**

Returns the **first fulfilled** promise (ignores rejections).

```javascript
Promise.any([promise1, promise2])
  .then(result => console.log(result))
  .catch(err => console.error("All promises rejected"));
```

---

### 🔁 **Async/Await (syntactic sugar over Promises)**

```javascript
async function fetchData() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}
```

---

### Summary Table

| Type                   | Description                                  |
| ---------------------- | -------------------------------------------- |
| `Promise`              | Core object to represent async computation   |
| `.then()`              | Handle resolved value                        |
| `.catch()`             | Handle errors                                |
| `.finally()`           | Always runs last                             |
| `Promise.all()`        | Wait for all to succeed                      |
| `Promise.race()`       | Return first settled (resolved/rejected)     |
| `Promise.allSettled()` | Wait for all, get results (success + errors) |
| `Promise.any()`        | Return first fulfilled promise               |
| `async/await`          | Syntactic sugar over promises                |

---

Let me know if you want examples in another language or real-world scenarios!
