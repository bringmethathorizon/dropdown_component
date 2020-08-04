import React from 'react';
import './styles.css';

interface Props {
    name: string
}

const SelectedItemBox = (props: Props) => {

    return(
        <div className="selected-item-box">
            <a>{props.name}</a>
        </div>
    )
};

export default SelectedItemBox;
