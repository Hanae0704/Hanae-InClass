import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';
import * as UFActions from '../context/action.js';


const Input = ({ formField }) => {

    const { state, dispatch } = useContext(Context);

    const {
        formData
    } = state;

    const handleOnChange = (event) => {
        formField.value = event.target.value;
        dispatch(UFActions.handleOnInputChange(formField, formData));
    }

    return (
        <InputStyled 
            className='Input'
            id={ formField.id }
            name= { formField.id }
            value={ formField.value }
            type={ formField.type }
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