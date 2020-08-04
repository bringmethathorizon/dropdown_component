import React, {useState} from 'react';
import './styles.scss';
import unionIcon from '../../icons/Union.png';
import chevronIcon from '../../icons/XMLID 1506.png';
import {Select}  from 'semantic-ui-react'
//elements/
interface Props {
    listOfItems: ["Garnishmen(Wage)", "Personal Injury"]
}

const SelectItems = () => {
    const listOfItems = ["Garnishmen(Wage)", "Personal Injury", "Subpoena"]
    const [list, setSelect] = useState(listOfItems);

    const [open, setOpen] = useState(false);

    const toggleList = () => {
        setOpen(!open);
    };

    const testFoo = () => {
      alert('dfsdfds')
    };

    const handleSelect = (item: any) => {
        console.log(item.target)
    };

    return(
        <div className="edit-type-container">

            <div className="edit-text-container">
                <a className="text-edit">Edit</a>
                <div className="icon-container">
                <img
                    className="union-icon-styles"
                    src={unionIcon}/>
                </div>
            </div>

            <div className="type-text-container">
                <a className="text-type">Type</a>

                <div className="selection-form-container"
                     onClick={toggleList}
                >
                    <img
                        className="chevron-icon-styles"
                        src={chevronIcon}
                    />
                </div>
                /** {open &&(
                   <div className="selection-list-container">
                        {list.map((val, key) => (
                            <li className="list-item"
                                key={key}>
                                {val}
                            </li>
                        ))}

                    </div>
                )}**/
            </div>


        </div>
    )
};

export default SelectItems;
