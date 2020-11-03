import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';
import * as UFAction from '../context/action.js';


const Input = ({ formField }) => {

    const { state, dispatch } = useContext(Context);

    const {
        formData
    } = state;

    const handleOnChange = (event) => {
        formField.value = event.target.value;
        dispatch(UFAction.handleOnInputChange(formField, formData));
    }

    return (
        <InputStyled 
            className='Input'
            id={ formField.id }
            name= { formField.id }
            value={ formField.value }
            onChange={ handleOnChange }/>
    );
}

export default Input;

const InputStyled = styled.input`

    background-color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    border: solid 1px #999;
    width: 100%;
    
`;