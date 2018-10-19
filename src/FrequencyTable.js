import React from 'react';
import { connect } from 'react-redux';

const FrequencyTable = ({ people }) => {

  const sortDescending = newArray => {
    
    return newArray.sort(function(a,b){
      let comparison = -1;
      if (b['freq'] > a['freq']) {
        comparison = 1;
      };
      return (comparison);
    });
  };

  const sortAllChars = chars => {
    let newArray = [];

    Object.keys(chars).forEach(key => {
      newArray.push(chars[key])
    });

    return sortDescending(newArray);
  };

  const findUniqueChars = people => {
    const uniques = {};

    for (let ii = 0; ii < people.length; ii++) {
      let email = people[ii].email_address;
      for (let jj = 0; jj < email.length; jj++) {
        let char = email[jj];
        if (email[jj] !== '@') {
          uniques.hasOwnProperty(char) ? 
            uniques[char].freq +=1 : 
            uniques[char] = {name: char, freq: 1}
        } else {
          break;
        };
      };
    };

    return sortAllChars(uniques);
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