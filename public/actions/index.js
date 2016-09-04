export const viewCard = (person = {}) => {
  return {
    type: 'VIEW_CARD',
    person
  }
}

export const setSearchFilter = (filter) => {
  return {
    type: 'SET_SEARCH_FILTER',
    filter
  }
}