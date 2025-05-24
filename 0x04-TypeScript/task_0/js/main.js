var student1 = {
    firstName: "John",
    lastName: "Andrew",
    age: 30,
    location: "NewYork",
};
var student2 = {
    firstName: "Michael",
    lastName: "Perry",
    age: 34,
    location: "Addis Ababa",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement('tr');
var header1 = document.createElement('th');
header1.textContent = 'First Name';
var header2 = document.createElement('th');
header2.textContent = 'Last Name';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    var location = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(location);
    table.appendChild(row);
});
document.body.appendChild(table);
