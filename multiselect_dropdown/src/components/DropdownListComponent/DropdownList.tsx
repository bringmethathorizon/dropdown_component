import React from 'react';
import './styles.css'

interface DropdownListProps {
    listOfItems: string [],
    onClick: (event: any) => void
}



const DropdownList = (props: DropdownListProps) => {

    return(
        <div>
            {props.listOfItems.map((item, key) => (
                <div
                    className="list-container"
                    key={key}>
                    <a
                        className="dropdown-list"
                        onClick={props.onClick}
                    >{item}</a>
                    <img
                    className="icon-styles"
                    // src={props.icon}
                    />
                </div>
            ))}
        </div>
    )

};

export default DropdownList;
