import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';

import Template from '../../Shared/Template.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
        <Template
            title = 'Homework'
            aside = { false } >
                <Essays essays={ essays } />
            </Template>
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`

/* border: dashed 3px blue; */
padding: 20px;
background-color: #ccc;

`;

const essays = [
    {
        title: '01',
        question: 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?',
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
        question: 'In React, what does Prop Drillng mean? Why do they say that React has a Unidirectional Data Flow? What are the pros and cons of this feature?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Prop Drilling means in React is the process of getting data to parts of the React Component tree.</p>
            <p>Unidirectional data flow means that the parents component passes the state information down to its child components. The concept of this is that data has one way to be transferred to other parts of application. </p>
            <p>Pros of the unidirectional data flow is that it has less error because I have more control over my data and is easier to debug because I know what is coming from where. </p>
            </div>
            )
        }
    },
    {
        title: '03',
        question: 'In React, what is Redux? Why do we need Redux? Is Redux the only option?',
        AnswerComponent: () => {
            return (
            <div>
            <p>..</p>
            <p>..</p>
            </div>
            )
        }
    },
]

