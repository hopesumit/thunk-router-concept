import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux';
import { getDataThunk, addDataThunk } from './Redux/Actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addData = this.addData.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(getDataThunk());
  }

  handleChange(e){
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
        [name] : value
    })
  }

  addData(e){
    e.preventDefault();
    console.log("V");
    this.props.dispatch(addDataThunk({
      name: this.state.name,
      age: this.state.age
    }));
    this.setState({
      name: "",
      age: ""
    })
  }

  render() {
    const trList = this.props.getReducer.map((e, i) => {
        return (<tr key={i}><td>{e.name}</td><td>{e.age}</td></tr>)
    })
    return (
      <div>
        <h1>Thunk</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {trList}
          </tbody>
        </table>
        <br />
        <br />
        <input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <br />
        <br />
        <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
        <br /><br />
        <button onClick={this.addData}>Save</button>
        <h2 style={{ color: "green"}}>{this.props.addReducer.msg}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("Store" , state);
  return state;
}
export default connect(mapStateToProps)(App);
