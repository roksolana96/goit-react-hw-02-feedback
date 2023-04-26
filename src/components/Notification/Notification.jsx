import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return (
        <div>
            <Notification message="There is no feedback"></Notification>
        </div>
    )
}


Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

// h2