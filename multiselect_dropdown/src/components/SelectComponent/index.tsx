import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {InputProps, Select} from "semantic-ui-react";
import {SelectProps} from "semantic-ui-react";
// const styles = require('./index.scss');

interface Props extends SelectProps {}

export const SelectComponent = (props: Props) => {

    return(
      <div>
          <Select {...props}
              options={props.options}
          >
          </Select>
      </div>
    )
};
