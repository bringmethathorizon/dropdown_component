import React from 'react';
import './styles.css';

interface Props {
    text: string
}

const DropdownText = (props: Props) => {

    return(
        <div className="dropdown-text-container">
            <a className="dropdown-text">{props.text}</a>
            </div>
    )

};

export default DropdownText;
