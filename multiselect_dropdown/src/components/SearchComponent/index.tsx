import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {InputComponent} from '../../components/InputComponent/index'
const styles = require('./index.scss');

interface Props {
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchComponent = (props: Props) => {

    return(
        <div className={styles.input}>
            <InputComponent
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
};
