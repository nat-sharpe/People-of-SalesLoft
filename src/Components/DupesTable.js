import React from 'react';
import { connect } from 'react-redux';

const DupesTable = ({ people }) => {
  
  // Counts the number of instances of each unique character in the local-part of an email address. Returns an object with the characters as keys and the counts as their values.
  const countChars = email => {
    let charCount = {};
    for (let ii = 0; ii < email.length; ii++) {
      let char = email[ii];
      char = char.toUpperCase();
      if (char !== '@') {
        charCount.hasOwnProperty(char) ? 
          charCount[char] += 1 : 
          charCount[char] = 1
      } else {
        break;
      };
    };

    return charCount;
  };

  // Loops through a list of people and compares each email address with every other one. If the local-parts of two emails begin with the same character it checks to see if the number of differences between the two strings is less than the passed-in difference number. If so it pushes an object containing the emails, names and titles of both people into an array and returns it.
  const findPossibleDupes = (peopleToCheck, numDifferences) => {
    let newPeopleToCheck = peopleToCheck.map(person => person);
    let possibleDupes = [];

    for (let ii = 0; ii < peopleToCheck.length; ii++) {
      let name1 = peopleToCheck[ii].display_name;
      let title1 = peopleToCheck[ii].title;
      let email1 = peopleToCheck[ii].email_address;
      let email1Chars = countChars(email1);
      let email1Keys = Object.keys(email1Chars);

      newPeopleToCheck.shift();

      for (let jj = 0; jj < newPeopleToCheck.length; jj++) {
        let differences = 0;
        let name2 = newPeopleToCheck[jj].display_name;
        let title2 = newPeopleToCheck[jj].title;
        let email2 = newPeopleToCheck[jj].email_address;
        let email2Chars = countChars(email2);
        let email2Keys = Object.keys(email2Chars);
        let longerEmail = (email2Keys.length < email1Keys.length) ? email1Keys : email2Keys;
        if (email1[0] === email2[0]) {
          for (let kk = 0; kk < longerEmail.length; kk++) {
            let char = longerEmail[kk];

            if (char !== '@') {
              if (email2Chars.hasOwnProperty(char) && email1Chars.hasOwnProperty(char)) {
                ((email2Chars[char] - email1Chars[char]) >= 0) ?                 differences += (email2Chars[char] - email1Chars[char]) :
                differences += (-1 * (email2Chars[char] - email1Chars[char]));
              } else if (email2Chars.hasOwnProperty(char)) {
                differences += email2Chars[char];
              } else {
                differences += email1Chars[char];
              }
            } else { 
              break; 
            }
          }

          if (differences < numDifferences) {
            possibleDupes.push({
              name1, 
              email1,
              title1,
              name2, 
              email2,
              title2
            });
          }
        }
      };
    };
    
    return possibleDupes;
  };

  const dupeList = findPossibleDupes(people, 5);

  const rows = dupeList.map((row, index) => {
    return (
      <tr key={index}>
        <td><p>{row.name1}</p>{row.name2}<p></p></td> 
        <td><p>{row.email1}</p><p>{row.email2}</p></td> 
        <td><p>{row.title1}</p>{row.title2}<p></p></td> 
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(DupesTable);