document.getElementById('add-subject').addEventListener('click', () => {
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');

    const subjectName = document.createElement('input');
    subjectName.type = 'text';
    subjectName.placeholder = 'Subject Name';
    subjectName.classList.add('subject-name');

    const creditHours = document.createElement('input');
    creditHours.type = 'number';
    creditHours.placeholder = 'Credit Hours';
    creditHours.classList.add('credit-hours');
    creditHours.min = '1';
    creditHours.max = '5';

    const marks = document.createElement('input');
    marks.type = 'number';
    marks.placeholder = 'Marks';
    marks.classList.add('marks');
    marks.min = '0';
    marks.max = '100';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-subject');
    deleteButton.addEventListener('click', () => {
        subjectDiv.remove();
    });

    subjectDiv.appendChild(subjectName);
    subjectDiv.appendChild(creditHours);
    subjectDiv.appendChild(marks);
    subjectDiv.appendChild(deleteButton);

    document.getElementById('subjects').appendChild(subjectDiv);
});

document.getElementById('calculate-gpa').addEventListener('click', () => {
    const subjects = document.querySelectorAll('.subject');
    let totalGPA = 0;
    let totalCreditHours = 0;

    subjects.forEach(subject => {
        const creditHours = parseFloat(subject.querySelector('.credit-hours').value);
        const marks = parseFloat(subject.querySelector('.marks').value);

        let gpa = 0;
        if (marks >= 85) gpa = 4.0;
        else if (marks >= 80) gpa = 3.7;
        else if (marks >= 75) gpa = 3.3;
        else if (marks >= 70) gpa = 3.0;
        else if (marks >= 65) gpa = 2.7;
        else if (marks >= 61) gpa = 2.3;
        else if (marks >= 58) gpa = 2.0;
        else if (marks >= 55) gpa = 1.7;
        else if (marks >= 50) gpa = 1.0;
        else gpa = 0.0;

        totalGPA += gpa * creditHours;
        totalCreditHours += creditHours;
    });

    const gpa = totalGPA / totalCreditHours;
    document.getElementById('gpa').textContent = totalCreditHours > 0 ? gpa.toFixed(2) : '0.00';
});
