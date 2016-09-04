import React, { PropTypes } from 'react';
import Person from './Person';

const PeopleList = ({ people }) => {
  <ul>
    {people.map(person => 
      <Person
        key={person.id}
        {...person}
        />)}
  </ul>
}

PeopleList.PropTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
  }).isRequired).isRequired
};

export default PeopleList;