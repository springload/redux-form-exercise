import { combineReducers } from 'redux';
// Redux-form has its own reducer.
// You just need to import it and combine it with your own reducers
import { reducer as formReducer } from 'redux-form';
import exercise0 from './exercise0';

const rootReducer = combineReducers({
    form: formReducer, // /!\ FORM REDUCER NEEDS TO BE CALLED 'form'!
    exercise0: exercise0,
});

export default rootReducer;
