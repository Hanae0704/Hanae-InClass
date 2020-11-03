import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './context/index.js';
import * as UFAction from './context/action.js';

const Form = ({children}) => {


    const { state, dispatch } = useContext(Context);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        UFAction.handleOnSubmit(state, dispatch);
    }

    return (
        <FormStyled onSubmit={handleOnSubmit} className='Form'>
            {children}
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`

    max-width: 500px;
    margin: 0px auto;
    background-color: #fcfcfc;
    padding: 20px;
    border: solid 1px #ccc;
    
`;