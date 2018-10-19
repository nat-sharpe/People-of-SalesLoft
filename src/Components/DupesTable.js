import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const DupesTable = ({ people }) => {
  
    const countChars = word => {
      let charCount = {
        N: 1,
        A: 1,
        T: 2,
      };
    return charCount;
  };

  const findPossibleDupes = peopleToCheck => {
    const possibleDupes = [];

    for (let ii = 0; ii < peopleToCheck.length; ii++) {
      let name1 = peopleToCheck[ii].name;
      let name1Chars = countChars(name1);
      for (let jj = 1; jj < peopleToCheck.length; jj++) {
        let difference = 0;
        let name2 = peopleToCheck[jj].name;
        let name2Chars = countChars(name2);
        for (let kk = 0; kk < name1.length; kk++) {
          let letter = name1[jj];
          if (name2Chars.hasOwnProperty(letter)) {
            difference += (name2Chars[letter].count - name1Chars[letter].count);
          }
        };
        if (difference < 5) {
          possibleDupes.push({name1: name1, name2: name2});
        }
      }
      peopleToCheck.shift();
    };

    return possibleDupes;
  };
  
  const testData = [
    {
      name: 'Natt',
      email: 'nat@nat.com',
      title: 'Software Engineer'
    },
    {
      name: 'Natt',
      email: 'nat@nat.com',
      title: 'Software Engineer'
    }
  ];

  const possibleDupes = findPossibleDupes(testData);

  const rows = possibleDupes.map((row, index) => {
    console.log(row.name1)
    console.log(row.name2)
    return (
      <tr key={index}>
        <td><p>{row.name1}</p><p>{row.name2}</p></td> 
        {/* <td><p>{row.person1.email_address}</p>{row.person1.email_address}<p></p></td> 
        <td><p>{row.person1.title}</p>{row.person1.title}<p></p></td>  */}
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const mapStateToProps = state => {
  return { people: state.people };
};

export default connect(mapStateToProps)(DupesTable);