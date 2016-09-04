import React, { PropTypes } from 'react';

const Person =({ onClick, name, email, address, phone, website, company }) => (
  <li>
    <p>{name}</p>
    <a href="mailto:{{email}}">{email}</a>
    <p>{address.street}</p>
    <p>{address.suite}</p>
    <p>{address.city}</p>
    <p>{address.zipcode}</p>
    <p>{phone}</p>
    <p>{website}</p>
    <p>{company.name}</p>
    <p>{company.catchPhrase}</p>
    <p>{company.bs}</p>
  </li>
)

Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired
};

export default Person;