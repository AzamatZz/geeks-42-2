import React from 'react';
import classes from './Button.module.css'

const Button = ({name, color}) => {
    return (
        <button className={`${classes.btn} ${classes[color]}`}>{name}</button>
    );
};

export default Button;

// const user = {
//     name: "Azamat",
//     age: 32,
// }
// console.log(user.name)
// console.log(user[name])