// HackerRank - Grading Students
// URL: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    // Write your code here
  const n = grades.length;
  for(let i=0; i < grades.length; i++) {
    const rem = grades[i] % 5;
    const next5 = (grades[i] + 5) - rem;
    if (rem != 0 && (next5-grades[i]) < 3) {
      if (grades[i] < 38) {
        grades[i] = grades[i];
      }
      else {
        grades[i] = (grades[i] + 5) - rem;
      }
    }
  }
  return grades;
}
