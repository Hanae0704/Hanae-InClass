import React from 'react';
import styled from 'styled-components';

const Lot = ({lot, auctionID}) => {

    return (
        <LotStyled className='Lot'>
            <img src={`/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} alt={lot.title}/>
            <h3>{ `Lot: ${lot.number}: ${lot.title}`}</h3>
        </LotStyled>
    );
}

export default Lot;

const LotStyled = styled.div`

    flex: 0 0 200px;
    margin: 10px;

    border: solid 1px #eee;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0,0,0, .05);
    }
    
`;