const button = document.querySelector('button');

button.addEventListener('click', () => {
    const formDiv = button.parentElement.nextElementSibling;
    
    addRemove(true); // Show the form when the button is clicked
});

function addRemove(active) {
    const formDiv = button.parentElement.nextElementSibling; // Recalculate formDiv on each button click
    if (active) {
        formDiv.classList.add('visible');
        formDiv.classList.remove('invisible');
    } else {
        formDiv.classList.add('invisible');
        formDiv.classList.remove('visible');
    }
}

const lastDivElement = document.querySelector('.form-submit'); // Assuming the form submit button is inside this div
const studentInfo = [];

function formSubmit(event) {
    const submitParent = lastDivElement.parentElement; // This assumes submit button is directly inside lastDivElement
    const ageElement = submitParent.previousElementSibling;
    const markElement = ageElement.previousElementSibling;
    const departmentElement = markElement.previousElementSibling;
    const nameElement = departmentElement.previousElementSibling;

    const name = nameElement.lastElementChild.value;
    const age = ageElement.lastElementChild.value;
    const mark = markElement.lastElementChild.value;
    const department = departmentElement.lastElementChild.value;

    if (name === "" || age === "" || mark === "" || department === "") {
        alert("All fields must be filled out");
    } else {
        const student = {
            studentName: name,
            studentAge: age,
            studentMark: mark,
            studentDepartment: department
        };

        studentInfo.push(student);

        // Clear the form fields
        nameElement.lastElementChild.value = "";
        ageElement.lastElementChild.value = "";
        markElement.lastElementChild.value = "";
        departmentElement.lastElementChild.value = "";

        addRemove(false); // Hide the form after submitting
    }

    if (studentInfo.length > 0) {
        const ulElement = document.querySelector('ul');
        studentInfo.forEach(eachStudent => {
            const liElement = document.createElement('li');
            liElement.textContent = `Name: ${eachStudent.studentName}, Age: ${eachStudent.studentAge}, Mark: ${eachStudent.studentMark}, Department: ${eachStudent.studentDepartment}`;
            ulElement.appendChild(liElement); // Append each student info to the list
        });
    }
}

// Attach formSubmit to the button or form submit action
lastDivElement.addEventListener('click', formSubmit); // Attach event listener properly to form submit
