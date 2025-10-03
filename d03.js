
function calculate(event) {
    event.preventDefault();
    const studentName = document.getElementById("name").value;
    const  assignment1 = Number(document.getElementById ("assignment1").value);
    const  assignment2 = Number(document.getElementById ("assignment2").value);
    const  finalExam = Number(document.getElementById ("finalexam").value);

// Arithmetic operations
const assignmentAverage = (assignment1 + assignment2) / 2;
const finalGrade = (assignmentAverage * 0.4) + (finalExam * 0.6);

// Comparison operation
const hasPassed = finalGrade >= 70;

// Logical operation
const isExcellent = hasPassed && finalExam > 90;

// Display results
console.log("Student Name:", studentName);
console.log("Final Grade:", finalGrade);
console.log("Passed:", hasPassed);
console.log("Excellent Performance:", isExcellent);


}

