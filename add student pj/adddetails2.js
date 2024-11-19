const button = document.querySelector('button')

button.addEventListener('click', () => {
    const formDiv = button.parentElement.nextElementSibling;

    
    addRemove(true, formDiv)
  
});

   

function addRemove(active, formDiv){
    if(active){
        formDiv.classList.add('visible')
        formDiv.classList.remove('invisible')
    } else {
        formDiv.classList.add('invisible')
        formDiv.classList.remove('visible')
    }

}
const formDiv = button.parentElement.nextElementSibling;
const lastDivElement = formDiv.lastElementChild.children;
let studentInfo = [];
function formSubmit(){
    const submitParent = lastDivElement[0].parentElement
    const ageElement = submitParent.previousElementSibling
    const markElement = ageElement.previousElementSibling
    const departmentElement = markElement.previousElementSibling
    const nameElement = departmentElement.previousElementSibling

    const name = nameElement.lastElementChild.value;
    const age = ageElement.lastElementChild.value;
    const mark = markElement.lastElementChild.value;
    const department = departmentElement.lastElementChild.value;

    if (name == "" || age == "" || mark == "" || department == "") {
        alert("All fields must be filled out");
    
    }else{
    const student = {
        studentName: name,
        studentAge: age,
        studentMark: mark,
        studentDepartment: department
    }
    studentInfo.push(student);


    nameElement.lastElementChild.value = "";
    ageElement.lastElementChild.value = "";
    markElement.lastElementChild.value = "";
    departmentElement.lastElementChild.value = "";

    addRemove(false, formDiv)
}
if (studentInfo.length > 0) {
   
    let tableElement = document.getElementById('studentTable');
    
    if (!tableElement) {
        tableElement = document.createElement('table');
        tableElement.id = 'studentTable';  

        const headerRow = document.createElement('tr');

        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Name';
        headerRow.appendChild(nameHeader);

        const deptHeader = document.createElement('th');
        deptHeader.textContent = 'Department';
        headerRow.appendChild(deptHeader);

        const markHeader = document.createElement('th');
        markHeader.textContent = 'Mark';
        headerRow.appendChild(markHeader);

        const ageHeader = document.createElement('th');
        ageHeader.textContent = 'Age';
        headerRow.appendChild(ageHeader);

        tableElement.appendChild(headerRow);

        document.body.appendChild(tableElement);
    }
    
    for (let eachStudent of studentInfo) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = eachStudent.studentName;
        row.appendChild(nameCell);

        const deptCell = document.createElement('td');
        deptCell.textContent = eachStudent.studentDepartment;
        row.appendChild(deptCell);

        const markCell = document.createElement('td');
        markCell.textContent = eachStudent.studentMark;
        row.appendChild(markCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = eachStudent.studentAge;
        row.appendChild(ageCell);

        tableElement.appendChild(row);
    }

    studentInfo = [];
}




}
lastDivElement[0].addEventListener('click', formSubmit);