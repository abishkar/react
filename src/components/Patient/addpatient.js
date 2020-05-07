import React, { Component } from 'react';
class PatientTable extends Component {
    render() {
      const { patients } = this.props
        return (
          <div className="small-container">
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
            <th>Patient Name</th>
            <th>Patient Email</th>
          </tr>
        </thead>
      )
    }

    const TableBody = props => {
    const rows = props.patients.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.email}</td>
        </tr>
      )
    })
    return <tbody>{rows}</tbody>
}