interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Andrew",
  age: 30,
  location: "NewYork",
};

const student2: Student = {
  firstName: "Michael",
  lastName: "Perry",
  age: 34,
  location: "Addis Ababa",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

const headerRow = document.createElement('tr');

const header1 = document.createElement('th');
header1.textContent = 'First Name';

const header2 = document.createElement('th');
header2.textContent = 'Last Name';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;

    const location = document.createElement('td');
    location.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(location);
    table.appendChild(row);
});

document.body.appendChild(table);



