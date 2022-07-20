function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
        return seat;
    }
  }
    let students = new Array();
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i));
    }
    return students;
}
const classRoom = createClassRoom(10);