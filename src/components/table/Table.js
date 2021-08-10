import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tableStyle.scss';

const arrayFilter = (element, search) => {
    // eslint-disable-next-line eqeqeq
    if (!(search) || (!element) || search == '') {
        // Do not filter out anything if no search is specified. 
        return true;
    } else if (element.toLowerCase().startsWith(search.toLowerCase())) {
        // If the element begins with search string, include it.
        return true;
    } else {
        // Filter out elements in all other cases.
        return false;
    }
}

const selectLeftColumnItems = state => state.leftColumnItems
const selectRightColumnItems = state => state.rightColumnItems

const Table = (props) => {
    const leftColumnItems = useSelector(selectLeftColumnItems);
    const rightColumnItems = useSelector(selectRightColumnItems);
    const dispatch = useDispatch()

    const handleDeleteLeft = (event) => {
        dispatch({ type: 'items/deleteFromLeft', payload: event.target.value })
    }

    const handleDeleteRight = (event) => {
        dispatch({ type: 'items/deleteFromRight', payload: event.target.value })
    }

    return (
        <div className='columnWithTable'>
            <div className='leftColumn'>

                <input className='tableHeaderLeft'
                    type="text"
                    value="COLUMN 1"
                    readOnly
                />
                {leftColumnItems.filter(element => arrayFilter(element, props.filter)).map((element, index) => (
                    <input key={index} className='cellLeft'
                        type="search"
                        value={element}
                        onChange={event => { console.log('cellLeft input onchange '); }}
                        onClick={handleDeleteLeft}
                    />
                ))}

            </div>

            <div className='rightColumn'>
                <input className='tableHeaderRight'
                    type="text"
                    value="COLUMN 2"
                    readOnly
                />
                {rightColumnItems.filter(element => arrayFilter(element, props.filter)).map((element, index) => (
                    <input key={index} className='cellRight'
                        type="search"
                        value={element}
                        onChange={event => { console.log('cellRight input onchange '); }}
                        onClick={handleDeleteRight}
                    />
                ))}
            </div>
        </div>
    )
}

export default Table;