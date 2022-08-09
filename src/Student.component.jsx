import { Component } from "react";
export default class Student extends Component {
  constructor(props) {
    super();
    this.fName = props.fName;
    this.lName = props.lName;
    this.date = new Date(props.date);
    this.pic = props.pic;
  }
  render() {
    return (
      <div>
        <h1>{this.fName}</h1>
        <h1>{this.lName}</h1>
        <h1>{this.date.toString()}</h1>
        <img width="200" height="200" src={`images/${this.pic}`} alt="" />
      </div>
    );
  }
}
