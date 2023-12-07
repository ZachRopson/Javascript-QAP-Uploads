// JS code to log array of info from JSON file to the console
// Written By: Zachary Ropson

document.addEventListener('DOMContentLoaded', function () {
    // Read the JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the array using forEach
            data.forEach(record => {
                console.log("ID:", record.id);
                console.log("Name:", record.name);
                console.log("Age:", record.age);
            });
        })
        .catch(error => console.error('Error reading JSON file:', error));
});