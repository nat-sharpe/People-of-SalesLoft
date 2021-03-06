import React from 'react';
import { connect } from 'react-redux';

// Pulls 'people' data from state and uses it to populate a table with three rows.
const PeopleTable = ({ people }) => {
  const rows = people.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.display_name}</td> 
        <td>{row.email_address}</td>
        <td>{row.title}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(PeopleTable);