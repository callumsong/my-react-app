import * as actions from '../../public/actions/index';

describe('Todo actions', function() {
  
  it('should return a person', function() {
    const susan = {id: 1, name: 'Susan'}
    expect(actions.viewCard(susan).type).toBe('VIEW_CARD');
    expect(actions.viewCard(susan).person.name).toBe('Susan');
    expect(actions.viewCard(susan).person.id).toBe(1);
  });

  it('should return the search result', function() {
    expect(actions.setSearchFilter('Bob').filter).toBe('Bob');
  });
});