import { connect } from 'react-redux';
import { setSearchFilter } from '../actions';
import { PeopleList } from '../components/PeopleList';

const getVisiblePeopleList = (people, searchTerm = '') => {
  if (searchTerm !== '') {
    return people.filter(person => person.name.matches(new RegExp(searchTerm, 'g')));
  } else {
    return people;
  }
}

const mapStateToProps = (state) => {
  return {
    people: getVisiblePeopleList(state.people, state.searchTerm)
  }
}

const VisiblePeopleList = connect(
  mapStateToProps
)(PeopleList);

export default VisiblePeopleList;