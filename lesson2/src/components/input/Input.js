import React from 'react';
import {type} from "@testing-library/user-event/dist/type";

const Input = ({type = 'text', placeholder, action}) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={action}
            />
        </div>
    );
};

export default Input;