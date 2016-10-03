import { combineReducers } from 'redux';

import displayed from './displayed';
import streets from './streets';

export default combineReducers({ streets, displayed })
