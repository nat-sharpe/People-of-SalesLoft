import React from 'react';
import { connect } from 'react-redux';

const FrequencyTable = ({ people }) => {

  const findUniqueChars = people => {
    const uniques = {};
    for (let ii = 0; ii < people.length; ii++) {
      let email = people[ii].email_address;
      console.log(email);
      for (let jj = 0; jj < email.length; jj++) {
        let char = email[jj];
        console.log(char);
        if (email[jj] !== '@') {
          uniques.hasOwnProperty(char) ? uniques[char] += 1 : uniques[char] = 1;
        } else {
          break;
        };
      };
    };
    console.log(uniques);

    return [
      {name: 'M', freq: 5},
      {name: 'J', freq: 3},
      {name: 'O', freq: 1}
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