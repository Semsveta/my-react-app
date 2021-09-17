import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './inputStyles.scss';
import Table from '../table/Table';

const InputController = () => {

    const [item, setItem] = useState("");
    const [column, setColumn] = useState("");
    const [searchPhrase, setSearchPhrase] = useState("");
    const dispatch = useDispatch();

    const handleItemChange = (event) => {
        setItem(event.target.value);
    }

    const handleSelectChange = (event) => {
        setColumn(event.target.value)
    }

    const addItemToColumn = (item, column) => {
        if (column === "column1") {
            dispatch({ type: 'items/addToLeft', payload: item });
        } else if (column === "column2") {
            dispatch({ type: 'items/addToRight', payload: item });
        }
        else {
            console.log('UNEXPECTED VALUE in handlelistUpdate');
        }
    }

    const handleAddClick = () => {
        const itemCopy = item
        const columnCopy = column
        setSearchPhrase('');
        setItem('');
        addItemToColumn(itemCopy, columnCopy);

    }

    const handleSearchChange = (event) => {
        setSearchPhrase(event.target.value);
    }

    return (
        <div className='tableWrapper'>
            <div>
                <h1 className='title'>Hello World!</h1>
                <p className='introduction'> This is a simple demonstration of React and Redux capability to manage state on the page. Enter some text to a text field and pick a column from the drop-down box, then click on the “ADD ITEM” button, and the entry will show up in the proper column in the table. The search box demonstrates ability to do dynamic filtering of table contents. Try entering a part of any cell value from the table into the search box and you will see how the table gets filtered as you type. </p>

            </div>
            <div className='topBar'><p>TITLE</p>
            </div>
            <div className='columnWithControls'>

                <form className='inputForm'>

                    <input className='inputEnter'
                        onChange={handleItemChange}
                        type="text"
                        placeholder="ENTER ITEM"
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "ENTER ITEM"}
                        value={item}
                    />

                    <select className='inputChoose'
                        onChange={handleSelectChange}
                        value={column}
                    >
                        <option value="" disabled defaultValue hidden>CHOOSE COLUMN</option>
                        <option value="column1">COLUMN 1</option>
                        <option value="column2">COLUMN 2</option>
                    </select>


                    <button
                        className='inputAdd'
                        onClick={handleAddClick}
                        // eslint-disable-next-line eqeqeq
                        disabled={item == ''}> ADD ITEM</button>

                    <div className='searchBox'>
                        <input className='inputSearch'
                            onChange={handleSearchChange}
                            type="text"
                            placeholder="SEARCH"
                            id="search"
                            onFocus={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = "SEARCH"}
                            value={searchPhrase}
                        />
                    </div>
                </form>
            </div>

            <Table
                filter={searchPhrase}
            />
        </div>
    )
}

export default InputController;