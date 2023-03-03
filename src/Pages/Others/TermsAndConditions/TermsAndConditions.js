import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Here is our terms & conditions</h1>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;