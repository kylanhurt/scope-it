import { combineReducers } from 'redux'

export const account = (state = null, action: any) => {
  switch (action.type) {
    case 'ACCOUNT':
      return action.data
    default:
      return state
  }
}

export const edgeAccount = (state = null, action: any) => {
  switch (action.type) {
    case 'EDGE_ACCOUNT':
      return action.data
    default:
      return state
  }
}


export const authReducer = combineReducers({
  account,
  edgeAccount
})
