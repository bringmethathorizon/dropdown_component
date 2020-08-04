import React from 'react';

interface listProps {
    list: string[]
}

const List = (props: listProps) => {

    return(
        <div>
            {props.list.map(item => (
                <a key={item}>{item}</a>
            ))}
        </div>
    )

};

export default List;
