"use-strict";

const endpoint = "data.json";

const studentContainer = document.querySelector("#students-container");
const studentTemplate = document.querySelector("#students-template").content;
var studentArray = [];
var sortedArray = [];

init();

function init() {
    fetchStudents();
    document.querySelector("#first-name").addEventListener("click", sortStudentsFirstName);
    document.querySelector("#last-name").addEventListener("click", sortStudentsLastName);
    document.querySelector(".delete-button").addEventListener("click", deleteIt);
    document.querySelector(".sort").addEventListener("click", doDropDown);
    document.getElementById("select").addEventListener("click", selectAll);
    document.onkeydown = escapeModal();
}

function fetchStudents() {
    fetch(endpoint)
        .then(e => e.json())
        .then(students => showStudents(students));
}
function showStudents(students) {
    students.forEach(showSingleStudent);

}
function showSingleStudent(student) {
    let clone = studentTemplate.cloneNode(true);
    const name = student;
    var i = name.length - 1;
    while (name[i - 1] != " ") {
        i--;
    }
    var lastName = name.substring(i, name.length);
    var firstName = name.substring(0, i - 1);
    clone.querySelector(".student-last-name").textContent = lastName;
    clone.querySelector(".student-first-name").textContent = firstName;
    studentArray.push(firstName);
    studentContainer.appendChild(clone);
}


function sortStudentsFirstName() {
    var firstName = document.getElementsByClassName("student-first-name");
    var lastName = document.getElementsByClassName("student-last-name");
    var details = document.getElementsByClassName("student-details");
    var students = [];
    for (var i = 0; i < firstName.length; i++) {
        students.push({
            first: firstName[i].textContent,
            last: lastName[i].textContent,
            detail: details[i].textContent
        });
    }

    var byName = students.slice(0);
    byName.sort(function (a, b) {
        var x = a.first.toLowerCase();
        var y = b.first.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });



    for (var j = 0; j < firstName.length; j++) {
        firstName[j].textContent = byName[j].first;
        lastName[j].textContent = byName[j].last;
    }
}

function sortStudentsLastName() {
    var firstName = document.getElementsByClassName("student-first-name");
    var lastName = document.getElementsByClassName("student-last-name");
    var details = document.getElementsByClassName("student-details");
    var students = [];
    for (var i = 0; i < firstName.length; i++) {
        students.push({
            first: firstName[i].textContent,
            last: lastName[i].textContent,
            detail: details[i].textContent
        });
    }

    var byName = students.slice(0);
    byName.sort(function (a, b) {
        var x = a.last.toLowerCase();
        var y = b.last.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });

    for (var j = 0; j < firstName.length; j++) {
        firstName[j].textContent = byName[j].first;
        lastName[j].textContent = byName[j].last;
    }
}

function deleteIt() {

    var students = document.getElementsByClassName("student");
    var studentCheck = document.getElementsByName('student-check'); // get the checkbox
    var selectedStudents = [];




    for (i = 0; i < students.length; i++) // loop through it
    {

        if (studentCheck[i].checked) // if its checked
        {

            selectedStudents.push(students[i]);

        } else {
        }

    }
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < selectedStudents.length; j++) {
            if (students[i] == selectedStudents[j]) {
                students[i].remove();
            }
        }
    }



}

function doDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}



function escapeModal(evt) {
    evt = evt || window.event;
    let modal = document.querySelector(".modal");
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};

function selectFromName(e) {
    var checkbox = e.currentTarget.parentNode.querySelector("#checkbox");
    checkbox.checked = !checkbox.checked;
}

function selectAll() {
    var students = document.getElementsByClassName("student");
    for (var i = 0; i < students.length; i++) {
        var checkbox = students[i].querySelector("#checkbox");
        checkbox.checked = !check.checked;
    }
}
