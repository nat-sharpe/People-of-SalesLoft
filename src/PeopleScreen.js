import React, {Component} from 'react';
import PeopleTable from './PeopleTable';
import { connect } from 'react-redux';

class PeopleScreen extends Component {
  
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.salesloft.com/v2/people.json';
    const apiKey = process.env.REACT_APP_API_KEY;
    const getPeople = async () => {
      await fetch((proxyurl + url), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${apiKey}`
        }
      })
        .then(result => {
          const jsonResult = result.json();
          jsonResult.then(people => {
            this.props.dispatch({
              type: 'GET_PEOPLE',
              payload: people.data
            })
          });
        })
        .catch(err => console.log(err));
    };
    getPeople();
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <PeopleTable />
      </table>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  };
};

export default connect(mapStateToProps)(PeopleScreen);