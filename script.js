function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Step 1: Initial Promise (resolves after 3 seconds)
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });

  // Step 2: Chain Promises
  initialPromise
    .then((arr) => {
      // Filter even numbers after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Multiply even numbers by 2 after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evenNumbers.map((num) => num * 2);
          outputDiv.textContent = multiplied.join(",");
          resolve(multiplied);
        }, 2000);
      });
    })
    .catch((error) => console.error(error));
}

// Run the function when the page loads
manipulateArray();
