//NURA,M.JEANNE
const students = [
    { name: "mamie", age: 20, grade: 85 },
    { name: "nura", age: 22, grade: 72 },
    { name: "lupita", age: 19, grade: 95 },
    { name: "nunu", age: 21, grade: 65 },
    { name: "Eve", age: 23, grade: 90 }
  ];
  function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].grade > threshold) {
        topStudents.push(students[i].name);
      }
    }
    return topStudents;
  }
  const topStudents = getTopStudents(students, 80);
  console.log(topStudents); 
  