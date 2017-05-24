import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExerciseThreeForm from '../components/ExerciseThreeForm';
import * as actions from '../actions';

const formName = 'exercise3';

const validate = (values) => {
    const errors = {};

    if (values.name === '') { errors.name = 'Required'; }
    if (values.text === '') { errors.text = 'Required'; }
    const regex = new RegExp(/^[A-z0-9."` ]+$/);
    if (values.text && regex.test(values.text) === false) { errors.text = 'You can only use numbers, letters, spaces, quote marks and full stops'; }

    return errors;
};

const warn = (values) => {
    const warnings = {};

    const regex = new RegExp(/^[A-z]+$/);
    if (values.name && regex.test(values.name) === false) { warnings.name = 'Name should be only alphabetical'; }

    return warnings;
};

const mapStateToProps = (state) => {
    return {
        initialValues: state.exercise3.initialFormValues,
        text: state.exercise3.text,
        name: state.exercise3.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => { // Has to be named onSubmit here and will be given to Form as handleSubmit property
            dispatch(actions.exerciseThreeFormSubmit(submit));
        },
    };
};

const IntelligentExerciseThreeForm = reduxForm({
    form: formName,
    validate: validate,
    warn: warn,
})(ExerciseThreeForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseThreeForm);
