// This file contain the code for the Contact Management system

const prompt = require('prompt-sync')();

const printInfo = () =>{
    console.log("Contact Management System");
    console.log("--------------------------");
    console.log("1.Add a contact");
    console.log("2.Delete a contact");
    console.log("3.View contacts");
    console.log("4.Search contact");
    console.log("5.Exit");
}

const addContact= () => {
    const name = prompt("Enter name: ")
    const email = prompt("Enter email: ")
    const contact = {
        name : name,
        email : email
    }
    contacts.push(contact);
    console.log("Added!");
} 

const deleteContact= () => {
    console.log("Contact IDs")
    for (let i=0 ; i< contacts.length; i++){
        const contact = contacts[i];
        console.log((i+1).toString() + ":", contact.name);
    }
    const number = parseInt(prompt("Please enter a contact ID to delete: "));
    if (isNaN(number) || number > contacts.length){
        console.log("Invalid ID.")
        return
    }
    contacts.splice(number - 1, 1)
    console.log("ID Removed!");
} 

const listContacts= (contacts) => {
    for (let contact of contacts){
        console.log("####################")
        console.log("Name: ", contact.name)
        console.log("Email: ", contact.email)
    }
} 
const searchContact= () => {
    const searchString = prompt("Search: ").toLowerCase();
    const result = []

    for (const contact of contacts){
        if(contact.name.toLowerCase().includes(searchString)) result.push(contact)
    }
    listContacts(result)
    // console.log("Search result: ",result)
} 

printInfo();

const contacts = [];
let keepGoing = true;
while (keepGoing){
    const number = prompt("Enter an operation (1-5): ");
    switch(number){
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContacts(contacts);
            break;
        case "4":
            searchContact();
            break;
        case "5":
            keepGoing = false;
            break;
        default:
            console.log("Please enter a valid option");
            break;
    }
}
