import React, {useState} from 'react';
import '../SearchBarComponent/SearchBar';
import DropdownList from "../DropdownListComponent/DropdownList";
import './styles.css'
import * as text from "../../constants/dropdownTexts";
import DropdownText from "../TextComponents/DropdownText";
import chevronLeft from '../../icons/XMLID 1536.png';
import chevronRight from '../../icons/XMLID 1522.png';
import SelectedItemsCard from './SelectedItemsCard';


const Dropdown = () => {

    const VALUES = ["Pdf", "Doc", "Jpeg", "Zip", "Rar", "Js", "Txt",
        "Exe", "Dmg", "Esp"];

    const toggleDropdownList = () => {
        console.log('sads')
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-header">
                <div className="topnav-container">
                    <DropdownText
                        text={text.extentionsText}/>
                    <img src={chevronLeft}
                         className="chevron-icon"/>
                    <DropdownText
                        text="1"/>
                    <img src={chevronRight}
                         className="chevron-icon"
                    />
                </div>
            </div>
            <SelectedItemsCard/>

            <div className="filtered-list">
                <DropdownList
                    onClick={toggleDropdownList}
                    listOfItems={VALUES}/>
            </div>
        </div>
    )
};

export default Dropdown;
