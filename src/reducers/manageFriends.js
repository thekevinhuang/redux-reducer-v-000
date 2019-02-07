function removeFriend (array, id) {
  let result = array.filter(value, index, arr){
    return value.id != id
  }
  return result
}

export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND" :
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND" :
      return {friends: removeFriend(state.friends, action.friend.id)}
    default:
      return state
  }
}
