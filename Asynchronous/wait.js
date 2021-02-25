// An asynchronous wait function
// Wait for the time of duration

function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not possible"));
    }

    setTimeout(resolve, duration);
  });
}
