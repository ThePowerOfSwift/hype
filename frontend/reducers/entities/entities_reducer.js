import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer
});

export default entitiesReducer;