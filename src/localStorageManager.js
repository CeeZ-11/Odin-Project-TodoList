// Save an object to localStorage
export function saveObjectToLocalStorage(key, dataObject) {
  localStorage.setItem(key, JSON.stringify(dataObject));
}

// Retrieve an object from localStorage
export function getObjectFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {}; // Return parsed object or empty object
}

// Save an array to localStorage
export function saveArrayToLocalStorage(key, dataArray) {
  localStorage.setItem(key, JSON.stringify(dataArray));
}

// Retrieve an array from localStorage
export function getArrayFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : []; // Return parsed array or empty array
}

// Add an item to an array in localStorage
export function addToArrayInLocalStorage(key, item) {
  const currentArray = getArrayFromLocalStorage(key);
  currentArray.push(item); // Add new item
  saveArrayToLocalStorage(key, currentArray); // Save updated array
}

// Remove an item from an array in localStorage
export function removeFromArrayInLocalStorage(key, item) {
  const currentArray = getArrayFromLocalStorage(key);
  const updatedArray = currentArray.filter((i) => i !== item); // Remove the item
  saveArrayToLocalStorage(key, updatedArray); // Save updated array
}

// Remove a specific key from an object in localStorage
export function removeFromObjectInLocalStorage(key, objectKey) {
  // Retrieve the object from localStorage
  const currentObject = getObjectFromLocalStorage(key);

  // Check if the key exists in the object
  if (objectKey in currentObject) {
    delete currentObject[objectKey]; // Remove the specific key-value pair
    saveObjectToLocalStorage(key, currentObject); // Save the updated object back to localStorage
    console.log(
      `Key "${objectKey}" removed from object stored with key "${key}".`
    );
  } else {
    console.log(
      `Key "${objectKey}" does not exist in the object stored with key "${key}".`
    );
  }
}
