// We are now properly diving into redux-form
// This container is going to be the brain of your form
// I leave here the validate method and the onSubmit method if needed
// Meet me in /components/ExerciseZeroForm.js once you understood this file.

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'; // This is a redux-form constructor
import ExerciseZeroForm from '../components/ExerciseZeroForm'; // This is the rendering part of the form
import * as actions from '../actions';

// I usually declare the form name in a separate const and a the beginning of the file.
// That way it's easier to know if you are in the right file or not for a form.
const formName = 'blah';

// This is the validate method.
// Redux-form offers many many ways to validate a form/field.
// Please for more details refer to this page: http://redux-form.com/6.5.0/examples/ and especially
// all the examples ending with "Validation
// In that case, this validate method is triggered on every action on the form
// onChange, onBlur on a field or onSubmit on the form.
// It get passed all the current values in the form so you can validate them one by one.
const validate = (values) => {
    const errors = {};

    // Feel free to externalise your validation methods if they are used on different forms.
    if (values.weather === '') {
        errors.weather = 'Required';
    } else if (values.weather !== 'Windy' && values.weather !== 'Super Windy') {
        errors.weather = 'Sorry it can only be "Windy" or "Super Windy"';
    }

    if (values.mood !== 'happy') {
        errors.mood = '... and you can only be happy about it... :)';
    }

    // You just need to return an object with the field name and the error message you want.
    return errors;
};

// You can pass a lot of props & methods to a redux-form
// To see them all have a look at: http://redux-form.com/6.5.0/docs/api/ReduxForm.md/
const mapStateToProps = (state) => {
    return {
        // If you need to initialise form values
        // Pass an object containing the field/value pairs using initialValues state key.
        initialValues: state.exercise0.initialFormValues,
        weather: state.exercise0.weather,
        mood: state.exercise0.mood,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => { // Has to be named onSubmit here and will be given to Form as handleSubmit property
            dispatch(actions.exerciseZeroFormSubmit(submit));
        },
    };
};

// This is the form constructor
// It takes the form name then the error checker
// You can also give a warning checker as a third param if you need to.
const IntelligentExerciseZeroForm = reduxForm({
    form: formName,
    validate,
})(ExerciseZeroForm);

// Then we connect this redux-form to redux like any other component :)
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseZeroForm);
