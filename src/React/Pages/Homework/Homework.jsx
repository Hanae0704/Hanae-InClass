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
            <p>Redux is a state container for JavaScript applications. In React. Redux is UI binding library for React. </p>
            <p>Redux helps to write applications and run in different environments, such as client or server, and that is easy to test. </p>
            <p>We need Redux because Redux in React is kept up to date with any API changes from library to make sure that React components behave as expected.</p>
            <p>Also, Redux in React implements several optimizations to make sure the component only re-renders when actually necessary.</p>
            </div>
            )
        }
    },
    {
        title: '04',
        question: 'What is middleware? What does the Thunk Middleware do for Redux?',
        AnswerComponent: () => {
            return (
            <div>
            <p>Middleware is software which is in the middle of an operating system and the applications, and allows them to communicate with each other. </p>
            <p>Redux Thunk middleware allows you to write action creators that return a function instead of an action. Thunk middleware is the way to extend Redux with custom functionality.</p>
            <p>However, the thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.</p>
            </div>
            )
        }
    },
    {
        title: '05',
        question: 'In Redux, what does mutating state mean? Why is this something we would like to avoid?',
        AnswerComponent: () => {
            return (
            <div>
            <p>In Redux, mutating state means the process of changing the value of a variable or an object, which means is to mutate the state. </p>
            <p>If a Redux reducer directly mutates, and returns, the state object passed into it, the values of the root state object will change, but the object itself will not.</p>
            <p>We would like to avoid this is because reducers in redux are pure functions, which means they have no side effects. If you mutate the state, those functions are no longer pure, which causes bugs or errors. </p>
            </div>
            )
        }
    },
]

