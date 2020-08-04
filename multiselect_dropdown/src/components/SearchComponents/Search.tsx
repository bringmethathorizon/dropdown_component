import React from 'react';
import {Field, Form, Formik} from "formik";
import './styles.scss';

interface Props {
    values: string[],
    onChangeText: (list: any) => void
}

interface MyFormValues {
    value: string;
}

const Search = (props: Props) => {

    const initialValues: MyFormValues = { value: '' };

    const onChangeFilter = (e: any) => {

        let listOfItems: any;

        listOfItems = props.values.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));

        props.onChangeText(listOfItems);

    };

    return(

    <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                render={formikBag => (
                    <Form >
                        <Field
                            name="firstName"
                            render={({ field, form, meta }: {field: any, form: any, meta: any}) => (
                                <div className="input-container">
                                    <input
                                        onChange={onChangeFilter}
                                        className="input-bar"
                                        placeholder="Find Items"
                                    />
                                    {meta.touched && meta.error && meta.error}
                                </div>
                            )}
                        />
                    </Form>
                )}
            />
    </div>
    )
};

export default Search;
