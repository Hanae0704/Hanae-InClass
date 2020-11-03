import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './context/index.js';
import * as UFAction from './context/action.js';

/* Components ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Feedback = () => {

    const { state, dispatch } = useContext(Context);

    const {
        formStatus,
        feedbackMessage,
    } = state;

    const handleClose = () => {
        dispatch(UFAction.statusUpdate('pending'));
    }


    if (formStatus === 'pending') {
        return '';
    }

    const theColor = (formStatus === 'success') ? 'green':'maroon';

    return (
        <FeedbackStyled className='Feedback' theColor={ theColor }>
            <Button
                onClick = { handleClose }
                className="close">
                    X
            </Button>

            <h2>Title</h2>
            <div className="message">
                { feedbackMessage }
            </div>
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`

    border: solid 1px ${({theColor}) => theColor };
    max-width: 500px;
    margin: 20px auto;

    position: relative;

    .close {
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 5px 10px;
        margin: 0px;

    }

    h2 {
        color: white;
        background-color: ${({theColor}) => theColor };
        padding: 10px;
        margin: 0px;
        font-size: 16px;
    }

    .message {
        padding: 10px;
    }

`;