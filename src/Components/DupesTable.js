import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const DupesTable = ({ people }) => {
  
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

      console.log(charCount)
      return charCount;
    };

  const findPossibleDupes = peopleToCheck => {
    let possibleDupes = [];

    for (let ii = 0; ii < peopleToCheck.length; ii++) {
      let name1 = peopleToCheck[ii].name;
      let title1 = peopleToCheck[ii].title;
      let email1 = peopleToCheck[ii].email_address;
      let email1Chars = countChars(email1);
      let email1Keys = Object.keys(email1Chars);
      for (let jj = 1; jj < peopleToCheck.length; jj++) {
        let difference = 0;
        let name2 = peopleToCheck[ii].name;
        let title2 = peopleToCheck[ii].title;
        let email2 = peopleToCheck[jj].email_address;
        let email2Chars = countChars(email2);
        let email2Keys = Object.keys(email2Chars);
        let longerEmail = (email2Keys.length < email1Keys.length) ? email1Keys : email2Keys;
        for (let kk = 0; kk < longerEmail.length; kk++) {
          let char = longerEmail[kk];
          console.log('char ' + char)
          if (char !== '@') {
            console.log(email2Chars.hasOwnProperty(char) && email1Chars.hasOwnProperty(char))
            if (email2Chars.hasOwnProperty(char) && email1Chars.hasOwnProperty(char)) {
              difference += (email2Chars[char] - email1Chars[char]);
              console.log(difference)
            }
          } else { 
            break 
          }
        };
        if (((difference * -1) * -1) > -5) {
          possibleDupes.push({
            name1: name1, 
            email1: email1,
            title1: title1, 
            name2: name2, 
            email2: email2,
            title2: title2
          });
        }
      }
      peopleToCheck.shift();
    };

    return possibleDupes;
  };
  
  const testData = [
    {
      name: 'Nat',
      email_address: 'nattttttt@nat.com',
      title: 'Software Engineer'
    },
    {
      name: 'Nat',
      email_address: 'nat@nat.com',
      title: 'Software Engineer'
    }
  ];

  const possibleDupes = findPossibleDupes(testData);

  const rows = possibleDupes.map((row, index) => {
    console.log(row.email1)
    console.log(row.email2)
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