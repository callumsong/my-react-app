const viewCard = (state = {}, action) => {
  switch (action.type) {
    case 'VIEW_CARD':
      return action.person;
    default:
      return state;
  }
}

export default viewCard;