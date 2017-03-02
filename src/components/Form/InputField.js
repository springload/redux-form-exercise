// This is how I render an InputField with redux-form
// Note that there is a possibility to just say <Field name="blah" component="input" type="text" />
// But I prefer to have the error management inside my field component.
import React, { PropTypes } from 'react';

// Redux-form will give you a prop "input" containing the input props
// like a name, its default onChange, onBlur methods etc.
// To see more details please refer to: http://redux-form.com/6.5.0/docs/api/Field.md/
// It also gives a "meta" prop which tells if the field has been touched and if there are any
// errors linked to that <Field>
// We can then manage the errors directly in this component.
// Also if you want to add some formatting for rendering or
// before sending the value to the state please check: http://redux-form.com/6.5.0/docs/ValueLifecycle.md/
// NB: Using your own custom components for form fields is an excellent way
// to keep your form accessible

const propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

const InputField = ({
    input,
    label,
    type,
    meta: { touched, error },
}) => {
    return (
        <label htmlFor={input.name}>
            {label}
            <input
                {...input}
                id={input.name}
                type={type}
                style={{ marginLeft: '10px' }}
            />
            {(touched && error) && (
                <span style={{ color: '#d34545', marginLeft: '10px' }}>{error}</span>
            )}
        </label>
    );
};

InputField.propTypes = propTypes;

export default InputField;

// Meet me in /component/Form/SelectField.js
