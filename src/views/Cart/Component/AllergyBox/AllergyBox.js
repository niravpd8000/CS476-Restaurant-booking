import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";

const AllergyBox = ({ allergies }) => {
    const [allergyInput, setAllergyInput] = useState('');

    const handleInputChange = (event) => {
        setAllergyInput(event.target.value);
    };

    return (
        <div>
            <TextField
                fullWidth
                label="Enter Allergy Information"
                variant="outlined"
                value={allergyInput}
                onChange={handleInputChange}
            />
            {/* Display other allergy-related components or logic as needed */}
        </div>
    );
};

AllergyBox.propTypes = {
    allergies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AllergyBox;
