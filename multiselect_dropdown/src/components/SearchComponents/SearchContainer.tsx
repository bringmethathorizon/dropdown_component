import React, {useState} from 'react';
import Search from './Search';

const SearchContainer = () => {

    const propsList = ['pdf', 'doc', 'jpeg', 'dmg', 'js'];

    const [listForRender, setListForRender] = useState(propsList);

    const test = (e: any) => {
        setListForRender(e);
    };

    return(
        <>
            <Search
                values={propsList}
                onChangeText={test}
            />
            {listForRender.map((val, key) => (
                <ul key={key}>
                    <li>{val}
                    </li>
                </ul>
            ))}
            </>
    )
};

export default SearchContainer;
