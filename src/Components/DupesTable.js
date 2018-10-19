import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const DupesTable = ({ people }) => {
  console.log(people.length);

  return (
    <tbody>      
      <tr>
        <td>Person1</td> 
        <td>Email1</td>
        <td>Title1</td>
      </tr>
      <tr>
        <td>Person2</td> 
        <td>Email2</td>
        <td>Title2</td>
      </tr>
      <tr>
        <td> </td> 
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td>Person3</td> 
        <td>Email3</td>
        <td>Title3</td>
      </tr>
      <tr>
        <td>Person4</td> 
        <td>Email4</td>
        <td>Title4</td>
      </tr>
    </tbody>
  )
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(DupesTable);