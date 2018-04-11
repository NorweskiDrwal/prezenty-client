import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const history = createHistory();
const middleware = [routerMiddleware(history), thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export { history };
export default store;
