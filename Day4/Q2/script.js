// Question Two
// --------------

var people = [];
var select = document.getElementById('select');
var detailsTable = document.getElementById('detailsTable');
var nameCell = document.getElementById('nameCell');
var ageCell = document.getElementById('ageCell');
var emailCell = document.getElementById('emailCell');
var phoneCell = document.getElementById('phoneCell');
var genderCell = document.getElementById('genderCell');

fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`The response wasn't ok`);
        }
        return response.json();
    })
    .then(data => {
        people = data;
        selection();
    })
    .catch(error => {
        console.error('There was an error : ', error);
    });


function selection() {
    var defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a person';
    select.appendChild(defaultOption);

    people.forEach((person, index) => {
        var option = document.createElement('option');
        option.value = index;
        option.textContent = person.name;
        select.appendChild(option);
    });
}

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