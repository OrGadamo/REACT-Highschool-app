import Students from "./Studemts.component";
import StudentsTable from "./StudentsTable.component";
export default function Home(props) {
  return (
    <div>
      <h1>Welcome {props.fullName}</h1>
      <Students />
      <StudentsTable />
    </div>
  );
}
