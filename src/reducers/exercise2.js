import actionTypes from '../actions/constants';

const initialState = {
    initialFormValues: {
        name: '',
        ticked: false,
    },
};

const exerciseTwoFormSubmit = (state, payload) => {
    return Object.assign({}, state, {
        ticked: payload.ticked,
        name: payload.name,
    });
};

const exercise2 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.EXERCISE_TWO_FORM_SUBMIT:
        return exerciseTwoFormSubmit(state, action.payload);
    default:
        return state;
    }
};

export default exercise2;
