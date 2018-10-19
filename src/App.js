import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from './Router';
import './App.css';

class App extends Component {

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
      <Router />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  };
};

export default connect(mapStateToProps)(App);
