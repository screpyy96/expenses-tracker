import React from 'react';
import * as C from './card.styled'

const Card = ({children}: any) => {
    return (
        <C.CardWrapper>
            {children}
        </C.CardWrapper>
    );
};

export default Card;