import React from 'react';
import { connect } from 'react-redux';

const PeopleTable = ({ people }) => {
  console.log(people.length);

  const rows = people.map((row, index) => {
    console.log(row)
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