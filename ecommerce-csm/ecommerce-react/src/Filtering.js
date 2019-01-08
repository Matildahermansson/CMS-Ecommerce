
import React, { Component } from 'react'

const item = { checked: false };

const Filtering = props => (
    <ul>
        <li>
            <input className='sortByPrice'  type="checkbox" checked={item.checked} onClick={() => props.onToggleSort(0)}/>Price
            <input className='sortByStock'  type="checkbox" checked={item.checked} onClick={() => props.onToggleSort(1)}/>Stock
            <input className='sortByCategory'  type="checkbox" checked={item.checked} onClick={() => props.onToggleSort(2)}/>Category
        </li>
    </ul>
);

export default Filtering;