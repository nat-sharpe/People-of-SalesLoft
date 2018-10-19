import React from 'react';
import { connect } from 'react-redux';

const FrequencyTable = ({ people }) => {

  const findUniqueChars = people => {
    return [
      {name: 'M', freq: 5,},
      {name: 'J', freq: 3,},
      {name: ')', freq: 1,}
    ];
  };
  
  const uniqueChars = findUniqueChars(people);
  
  const rows = uniqueChars.map((char, index) => {
    return (
      <tr key={index}>
        <td>{char.name}</td> 
        <td>{char.freq}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(FrequencyTable);