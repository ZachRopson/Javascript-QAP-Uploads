    // Program to create detailed class of motel customers, including age and duration of stay calculators
    // Written by: Zachary Ropson
    // Date Written: November 27-28, 2023

class Customer {
    constructor(name, birthDate, gender, roomPreferences, paymentMethod, mailingAddress, phoneNumber, checkIn, checkOut) {
        this.name = name;
        this.birthDate = new Date(birthDate); // Assuming birthDate is in format 'YYYY-MM-DD'
        this.gender = gender;
        this.roomPreferences = roomPreferences;
        this.paymentMethod = paymentMethod;
        this.mailingAddress = mailingAddress;
        this.phoneNumber = phoneNumber;
        this.checkIn = new Date(checkIn); // Assuming checkIn is in format 'YYYY-MM-DD'
        this.checkOut = new Date(checkOut); // Assuming checkOut is in format 'YYYY-MM-DD'
    }

    // Method to calculate age
    calculateAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const m = today.getMonth() - this.birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Method to calculate duration of stay
    durationOfStay() {
        const timeDiff = this.checkOut.getTime() - this.checkIn.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days
    }

    // Method to generate a description of the customer
    describe() {
        return `
            Name: ${this.name}
            Age: ${this.calculateAge()}
            Gender: ${this.gender}
            Room Preferences: ${this.roomPreferences.join(', ')}
            Payment Method: ${this.paymentMethod}
            Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.zip}
            Phone: ${this.phoneNumber}
            Check-In: ${this.checkIn.toDateString()}
            Check-Out: ${this.checkOut.toDateString()}
            Duration of Stay: ${this.durationOfStay()} days
        `;
    }
}

// Example of usage
const customer1 = new Customer(
    "John Doe",
    "1985-05-15",
    "Male",
    ["Non-smoking", "King bed"],
    "Credit Card",
    { street: "123 Main St", city: "Anytown", zip: "12345" },
    "555-1234",
    "2023-11-20",
    "2023-11-25"
);

console.log(customer1.describe());