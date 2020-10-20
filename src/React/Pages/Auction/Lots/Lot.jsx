import React, { useState } from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import AddRemoveLot from './AddRemoveLot.jsx';
import LightBox from 'React/Shared/LightBox.jsx';

const Lot = ({lot, auctionID}) => {

    const [isOpen, isOpenUpdate] = useState(false);

    const handleOnOpen = () => {
        isOpenUpdate(true);
    }

    const handleOnClose = () => {
        isOpenUpdate(false);
    }
    
 
    return (
        <LotStyled className='Lot'>
            <img 
                src={`/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} 
                alt={lot.title}
                onClick= { handleOnOpen } 
            />

            <h3>{ `Lot: ${lot.number}: ${lot.title}` }</h3>
            <AddRemoveLot lot={ lot }/>

            <LightBox
            isOpen = { isOpen } 
            onClose={ handleOnClose }
            headerText={ `Lot# ${lot.number}: ${lot.title}` }>
            
            <img src={`/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} alt={lot.title}/>
            <h3>{ `Lot: ${lot.number}: ${lot.title}` }</h3>
            <div className="artist"><b>Artist:</b> { lot.artist } </div>
            <div className="medium"><b>Nedium:</b> { lot.medium } </div>
            <AddRemoveLot lot={ lot }/>

            </LightBox>
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

    .LightBox {
        .AddRemoveLot {
            .Button {
                display: block;
                width: 100%;
                margin: 10px 0px 0px;
            }
        }
    }
    
`;