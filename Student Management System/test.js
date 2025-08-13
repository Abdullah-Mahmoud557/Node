 const students = [] ;

function addStudent(name, score) {
   if (name === undefined || typeof name !== "string" || typeof score !== "number" || score === undefined ) 
    console.log("Invalid input")  ;
   else {
       let studentName = findStudentByName(name);
          if (studentName !== null ) {
            console.log("student already exists" ); 
          }
          else {  
             students.push({ name: name, score: score });
             console.log ("added successfuly")}
          }
}

function displayStudents() {
    if (students.length > 0 )
       students.forEach(e => console.log (e)); 
    else console.log("there is no students")
}

function getAverageScore() {
    let sum = students.reduce((acc, e) => acc + e.score, 0);
    let avg = students.length> 0 ? sum/students.length : 0;
    console.log(avg); 
}
function getTopStudent() {
 let mx = -Infinity ; let top = null ;
 students.forEach(e=> {
  if (mx < e.score) {
    top  = e ;
    mx = e.score  ; 
  }
 })
 return top === null ? "there is no students" : top; 
}

function findStudentByName(name) {
    return students.find(e => e.name.toLowerCase() === name.toLowerCase()) || null;
}
