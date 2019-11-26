import React from 'react';
import { MenuItemContainer } from './menu-item.style';


const MenuItem = ({title, imageUrl}) => (
    
    <MenuItemContainer style={{backgroundSize:'cover', backgroundImage:`url(${imageUrl})`}}>
        <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
        </div>
    </MenuItemContainer>
)

export default MenuItem;

