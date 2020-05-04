import React, { Component } from 'react';
import './App.css';
import PatientTable from './components/Patient/addpatient';

class App extends Component {
  render() {

    const patients = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]




  return (
    <div className="App">
      <h1>Patient</h1>
      <PatientTable patients= {patients} />
    </div>
  );
}
}

export default App;
