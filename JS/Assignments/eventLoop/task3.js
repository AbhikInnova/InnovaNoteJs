// console.log('Start');
// function longRunningTask() {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//         // Busy-wait for 3 seconds (blocking the event loop)
//     }
//     console.log('Long-running task finished');
// }

// function asyncTask() {
//     setTimeout(() => {
//         console.log('Asynchronous task executed!');
//     }, 0);
// }

// longRunningTask();
// asyncTask();

// console.log('End');

// i have to wait until long task will be executed
//but by using timer  i can solve this ->>

console.log("Start");
function longRunningTask() {
  const start = Date.now();
  const chunkTime = 50;
  function task() {
    while (Date.now() - start < chunkTime) {}

    if (Date.now() - start < 3000) setTimeout(task, 0);
    else console.log("end of long task");
  }
  task();
}

function asyncTask() {
  setTimeout(() => {
    console.log("Asynchronous task executed!");
  }, 0);
}

longRunningTask();
asyncTask();

console.log("End");
