import React from 'react';

const ShowResults = ({ values }) => {
    return (
        setTimeout(() => {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            resolve();
        }, 1000)

    );
}