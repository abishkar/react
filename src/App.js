import React, { Component } from 'react';
import './App.css';
import PatientTable from './components/Patient/addpatient';

class App extends Component {
  state = {
    patients: [],
  }


  render() {

  return (
    <div className="small-container ">
      <h1>Patients</h1>
      <PatientTable patients= {this.state.patients} />
    </div>
  );
}


componentDidMount() {
  const url =
    'https://jsonplaceholder.typicode.com/users'

  fetch(url)
    .then(result => result.json())
    .then(result => {
      this.setState({
        patients: result,
      })
    })
}




}

export default App;
