import React, { useContext } from 'react';
import FormView from '../presentations/FormView';
import { FormContext } from '../context';

const FormViewContainer = () => {
    const formContext = useContext(FormContext);
    return <FormView formValue= {formContext.formValue} />
}

export default FormViewContainer;