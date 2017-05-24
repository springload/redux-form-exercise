import { combineReducers } from 'redux';
// Redux-form has its own reducer.
// You just need to import it and combine it with your own reducers
import { reducer as formReducer } from 'redux-form';
import exercise0 from './exercise0';
import exercise1 from './exercise1';
import exercise2 from './exercise2';
import exercise3 from './exercise3';

const rootReducer = combineReducers({
    form: formReducer, // /!\ FORM REDUCER NEEDS TO BE CALLED 'form'!
    exercise0: exercise0,
    exercise1: exercise1,
    exercise2: exercise2,
    exercise3: exercise3,
});

export default rootReducer;

// And that's it! Good luck with Exercise #1!
