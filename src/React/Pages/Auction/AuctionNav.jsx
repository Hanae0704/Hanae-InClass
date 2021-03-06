import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuctionNav = () => {

    return (
        <AuctionNavStyled className='AuctionNav'>
            <NavLink to ='/auction/' exact>Lots</NavLink>
            <NavLink to ='/auction/bids'>Bids</NavLink>
        </AuctionNavStyled>
    );
}

export default AuctionNav;

const AuctionNavStyled = styled.nav`

    text-align: center;

    a {
        display: inline-block;

        width: 150px;
        line-height: 30px;

        background-color: #eeeeee;
        
        border-bottom: solid 3px #333333;
        border-radius: 5px 5px 0px 0px;
        color: #3a3a3a;

        text-decoration: none;
        font-size: 16px;
        text-align: center;
        margin: 0px 5px;

        &:hover {
            background-color: #d3cfcf;
        }
        &.active {
            border-bottom: solid 3px purple;
            background-color: #ee5d37;
            color: white;
        }
    }
`;