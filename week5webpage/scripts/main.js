const courses = [
    { name: 'CSCI 130: Introduction to Computer Science', prereqs: 'None' },
    { name: 'CSCI 135: Introduction to Programming', prereqs: 'None' },
    { name: 'CSCI 220: Data Structures', prereqs: 'CSCI 135' },
    { name: 'CSCI 225: Intro Relational Database/SQL', prereqs: 'CSCI 220' },
    { name: 'CSCI 330: Software Engineering', prereqs: 'CSCI 220' },
    { name: 'CSCI 303: Intro Server-Side Web App Devo', prereqs: 'CSCI 225' },
];

const courseList = document.getElementById('course-list');

courses.forEach((course, index) => {
    let courseItem = document.createElement('div');
    courseItem.classList.add('course');
    courseItem.textContent = course.name;
    courseItem.draggable = true;
    courseItem.id = 'course-' + index;
    courseItem.addEventListener('click', () => alert(`${course.name}\nPrerequisites: ${course.prereqs}`));
    courseItem.addEventListener('dragstart', drag);
    courseList.appendChild(courseItem);
});

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    let draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
}