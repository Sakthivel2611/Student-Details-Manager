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
        alert("please fill out all fields");
    
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
    const ulElement = document.querySelector('ul');

    
    for (let eachStudent of studentInfo) {
        const liElement = document.createElement('li');
        const newulElement = document.createElement('ul');
        
        const namliElement = document.createElement('li');
        const deptliElement = document.createElement('li');
        const markliElement = document.createElement('li');
        const ageliElement = document.createElement('li');
        
        namliElement.textContent = `Name: ${eachStudent.studentName}`;
        ageliElement.textContent = `Age: ${eachStudent.studentAge}`;
        markliElement.textContent = `Mark: ${eachStudent.studentMark}`;
        deptliElement.textContent = `Department: ${eachStudent.studentDepartment}`;
        
        liElement.append(namliElement);
        liElement.append(ageliElement);
        liElement.append(markliElement);
        liElement.append(deptliElement);
        
        
        newulElement.append(liElement);
        ulElement.append(newulElement);
    }
   

    studentInfo = [];
}

}
lastDivElement[0].addEventListener('click', formSubmit);