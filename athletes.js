// Javascript Final Sprint, 
//Author: Zachary Ropson
//Test if JavaScript file is linked properly as per step 1
console.log("Script file linked!");

// Fetch the athletesData JSON data using the Fetch API
fetch('athletesData.json')
    .then(response => response.json())
    .then(data => {
        // Iterate over records and display one key-value pair
        data.forEach(athlete => {
            console.log(`ID: ${athlete.id}, Name: ${athlete.name}`);
        });

        // Write data to browser window and console
        displayAthletesInHTML(data);
        console.log("Sports Athletes Data:", data);

        // Call the additional functions and display the results
        console.log(getStringOfAthletes(data));
        console.log(getStringOfTeams(data));
        console.log(getStringOfCountries(data));
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display athletes data in the browser window
function displayAthletesInHTML(athletes) {
    const resultDiv = document.createElement('div');

    // Iterate over all athletes and display information for each
    athletes.forEach(athlete => {
        resultDiv.innerHTML += `
            <div>
                Name: ${athlete.name}
                Sport: ${athlete.sport}
                ${athlete.team ? `Team: ${athlete.team}` : ''}
                ${athlete.country ? `Country: ${athlete.country}` : ''}
                <hr>
            </div>
        `;
    });
    
    // Append the result to the body of the HTML document
    document.body.appendChild(resultDiv);
}

// Additional Functions to Return Strings of Data
function getStringOfAthletes(athletes) {
    return athletes.map(athlete => `Name: ${athlete.name}, Sport: ${athlete.sport}`).join('<br>');
}

function getStringOfTeams(athletes) {
    const teams = Array.from(new Set(athletes.map(athlete => athlete.team).filter(Boolean)));
    return teams.map(team => `Team: ${team}`).join('<br>');
}

function getStringOfCountries(athletes) {
    const countries = Array.from(new Set(athletes.map(athlete => athlete.country).filter(Boolean)));
    return countries.map(country => `Country: ${country}`).join('<br>');
}
