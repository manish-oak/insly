import { combineReducers } from 'redux';

import Users from './Users';
import searchValue from './Search';

export default combineReducers({
    Users,
    searchValue
});
