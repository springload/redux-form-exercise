// This is how I render a <select> field with redux-form
// It's the same process as an input field.
// Except we give the options as an array of objects containing a label and a value.

import React, { PropTypes } from 'react';

const propTypes = {
    input: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
    })).isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
};

const SelectField = ({
    input,
    label,
    options,
    meta: { touched, error },
}) => (
    <div>
        <label htmlFor={input.name}>
            {label}

            <select
                {...input}
                id={input.name}
                style={{ marginLeft: '10px' }}
            >
                {options.map(option =>
                    <option key={`${option.value}`} value={option.value}>
                        {option.label}
                    </option>,
                )}
            </select>

            {(touched && error) && (
                <span style={{ color: '#d34545', marginLeft: '10px' }}> {error}</span>
            )}
        </label>
    </div>
);

SelectField.propTypes = propTypes;

export default SelectField;

// Cool. Meet me in /actions/index.js
