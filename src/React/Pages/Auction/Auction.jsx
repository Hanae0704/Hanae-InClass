import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Template from '../../Shared/Template.jsx';
import Lots from './Lots/Lots.jsx';

const Auction = () => {

    return (
        <AuctionStyled className='Auction'>
            <Template title = 'Auction'>
                <Lots/>
            </Template>
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    
`;