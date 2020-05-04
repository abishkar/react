import React, { Component } from 'react';
class PatientTable extends Component {
    render() {
      const { patients } = this.props
        return (
          <div className="App">
			<div id="patient-table">
      <table>
        <TableHeader />
        <TableBody patients={patients}/>
      </table>
  </div>
            	</div>
        		);
    	    }
     }
     export default PatientTable;


     const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      )
    }

    const TableBody = props => {
    const rows = props.patients.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
    return <tbody>{rows}</tbody>
}