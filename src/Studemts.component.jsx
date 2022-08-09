import Student from "./Student.component";
import { Component } from "react";
export const students = [
  { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "student.webp" },
  { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "student.webp" },
  { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "student.webp" },
  { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "student.webp" },
];
export default class Students extends Component {
  render() {
    return (
      <div>
        {students.map((student) => (
          <Student
            fName={student.fName}
            lName={student.lName}
            date={student.date}
            pic={student.pic}
          />
        ))}
      </div>
    );
  }
}
