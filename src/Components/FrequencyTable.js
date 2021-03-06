import React from 'react';
import { connect } from 'react-redux';

const FrequencyTable = ({ people }) => {

// Sorts an array of objects containing characters and count numbers. Returns a new array of the objects arranged in descending order accoridng to count.
  const sortDescending = newArray => {
    return newArray.sort(function(a,b){
      let comparison = -1;
      if (b['count'] > a['count']) {
        comparison = 1;
      };
      return comparison;
    });
  };

// Receives an object of character keys with object values. Takes the objects (character name and count) and pushes them into an array.
  const sortAllChars = chars => {
    let newArray = [];
    Object.keys(chars).forEach(key => {
      newArray.push(chars[key])
    });
    return sortDescending(newArray);
  };

// Takes a list of people and finds the frequency of all unique characters in the local-part of each person's email address. Adds the characters to a table with the character as a key and the name and count as its values.
  const findUniqueChars = people => {
    const uniques = {};
    for (let ii = 0; ii < people.length; ii++) {
      let email = people[ii].email_address;
      for (let jj = 0; jj < email.length; jj++) {
        let char = email[jj];
        char = char.toUpperCase();
        if (email[jj] !== '@') {
          uniques.hasOwnProperty(char) ? 
            uniques[char].count += 1 : 
            uniques[char] = {name: char, count: 1}
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
        <td>{char.count}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(FrequencyTable);