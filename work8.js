//NURA,M.JEANNE
const students = [
    { name: "Nura", age: 20, grade: 85 },
    { name: "Mamie", age: 22, grade: 72 },
    { name: "Lupita", age: 19, grade: 95 },
    { name: "Nunu", age: 21, grade: 65 },
    { name: "Eve", age: 23, grade: 90 }
  ];
  const names = students.map(student => student.name);
  console.log(names);
  const topStudents = students.filter(student => student.grade > 80);
  console.log(topStudents);
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  console.log(totalGrades);
  
  