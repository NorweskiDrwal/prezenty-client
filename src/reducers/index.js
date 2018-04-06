import { combineReducers } from 'redux';

import userRepos from './userRepos'

const home = combineReducers({
	userRepos
});

export default home;