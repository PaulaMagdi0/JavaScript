// Question Two
// --------------

const people = [
    {
        "name": "Alice Johnson",
        "age": 28,
        "email": "alice.johnson@example.com",
        "phone": "+1-555-123-4567",
        "gender": "Female"
    },
    {
        "name": "Michael Smith",
        "age": 34,
        "email": "michael.smith@example.com",
        "phone": "+1-555-234-5678",
        "gender": "Male"
    },
    {
        "name": "Emily Davis",
        "age": 22,
        "email": "emily.davis@example.com",
        "phone": "+1-555-345-6789",
        "gender": "Female"
    },
    {
        "name": "David Brown",
        "age": 45,
        "email": "david.brown@example.com",
        "phone": "+1-555-456-7890",
        "gender": "Male"
    },
    {
        "name": "Sophia Wilson",
        "age": 30,
        "email": "sophia.wilson@example.com",
        "phone": "+1-555-567-8901",
        "gender": "Female"
    }
];

var select = document.getElementById('select');
var detailsTable = document.getElementById('detailsTable');
var nameCell = document.getElementById('nameCell');
var ageCell = document.getElementById('ageCell');
var emailCell = document.getElementById('emailCell');
var phoneCell = document.getElementById('phoneCell');
var genderCell = document.getElementById('genderCell');

select.addEventListener('change', function() {
    if (select.value === "") {
        detailsTable.style.display = 'none';
    } else {
        var selectedPerson = people[select.value];
        nameCell.textContent = selectedPerson.name;
        ageCell.textContent = selectedPerson.age;
        emailCell.textContent = selectedPerson.email;
        phoneCell.textContent = selectedPerson.phone;
        genderCell.textContent = selectedPerson.gender;

        detailsTable.style.display = 'table';
    }
});