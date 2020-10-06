import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
        <h2>Homework</h2>
        <Essays essays={ essays } />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`

border: dashed 5px teal;
padding: 20px;
background-color: #ccc;

`;

const essays = [
    {
        title: '01',
        question: 'Question 1 goes here.',
        AnswerComponent: () => {
            return (
            <div>
            <p>Single page app differs from traditional multipage website in a way that SPA does not involved navigating to an entirely new page, while traditional multipage website navigates to a new page. </p>
            <p>In other words, SPA pages load within the same page while traditional multipage websites do not and go to an entirely new page. </p>
            </div>
            )
        }
    },
    {
        title: '02',
        question: 'Question 2 goes here.',
        AnswerComponent: () => {
            return (
            <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, animi! Voluptatum reiciendis minus, vitae modi vero libero accusamus quisquam quae quaerat animi non facere quo fugiat. Explicabo debitis asperiores doloremque.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur alias impedit ab illo dolores corrupti debitis explicabo? Nam, nisi quidem inventore quam molestiae corporis est illum perspiciatis ut adipisci?</p>
            </div>
            )
        }
    },
]

