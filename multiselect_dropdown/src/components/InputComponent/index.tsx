import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Input} from "semantic-ui-react";
import {InputProps} from "semantic-ui-react";
const styles = require('./index.scss');


interface Props extends InputProps {}

export const InputComponent = (props: Props) => {

    return (
        <Input {...props}>
            {props.children}
        </Input>
    );
};


