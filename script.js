window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

// Function to generate a random time between 1 and 5 seconds (in milliseconds)
const getRandomTime = () => Math.floor(Math.random() * 4000) + 1000;

// Create 5 promises and push them into the array
for (let i = 1; i <= 5; i++) {
  const time = getRandomTime();
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i} resolved in ${(time / 1000).toFixed(2)}s`);
    }, time);
  });
  window.promises.push(promise);
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    // Print the result to the div with id "output"
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    // Fallback in case all promises fail (though they won't here)
    console.error("All promises were rejected:", error);
  });