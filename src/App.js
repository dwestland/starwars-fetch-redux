import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

      <p>Redux Example</p>
      <button onClick={() => props.getPeople()}>Load People</button>

      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <div key={i} >
              <p>Name: {person.name}</p>
              <p>Birth Year: {person.birth_year}</p>
            </div>
          })
        ) : null
      }

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
