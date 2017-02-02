import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExerciseZeroForm from '../components/ExerciseZeroForm';
import * as actions from '../actions';

const formName = 'blah';

const validate = (values) => {
    const errors = {};

    if (values.weather === '') {
        errors.weather = 'Required';
    } else if (values.weather !== 'Windy' && values.weather !== 'Super Windy') {
        errors.weather = 'Sorry it can only be "Windy" or "Super Windy"';
    }

    if (values.mood !== 'happy') {
        errors.mood = '... and you can only be happy about it... :)';
    }
    return errors;
};

const mapStateToProps = (state) => {
    return {
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

const IntelligentExerciseZeroForm = reduxForm({
    form: formName,
    validate,
})(ExerciseZeroForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseZeroForm);
