import { students } from "./Studemts.component";
export default function StudentsTable() {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date</th>
        <th>Picture url</th>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.fName}</td>
            <td>{student.lName}</td>
            <td>{student.date}</td>
            <td>{student.pic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
