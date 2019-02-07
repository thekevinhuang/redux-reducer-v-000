function friendFind (element, id) {
  return element.id == id
}

export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND" :
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND" :
      return {friends: state.friends.filter(value, index, arr){
        return value.id != action.friend.id
      }}
    default:
      return state
  }
}
