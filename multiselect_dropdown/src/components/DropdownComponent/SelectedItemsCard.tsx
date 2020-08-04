import React from 'react';
import SelectedItemBox from './SelectedItemBox';
import './styles.css';

const SelectedItemsCard = () => {
    return(
        <div className="selected-items-container">
            <div className="selected-items">
                <SelectedItemBox
                    name="Pdf"
                />
                <SelectedItemBox
                    name="Jpg"
                />
                <SelectedItemBox
                    name="Pdf"
                />
            </div>

            <div className="selected-items">

                <SelectedItemBox
                    name="Jpg"
                />
                <SelectedItemBox
                    name="Pdf"
                />
                <SelectedItemBox
                    name="Jpg"
                />
            </div>
        </div>
    )
};

export default SelectedItemsCard;
