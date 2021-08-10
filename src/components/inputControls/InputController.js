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
        setItem('');
        addItemToColumn(itemCopy, columnCopy);
    }

    const handleSearchChange = (event) => {
        setSearchPhrase(event.target.value);
    }

    return (
        <div className='tableWrapper'>
            <div>
                <h1 className='title'>Marvelous!</h1>
                <p className='introduction'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

            </div>
            <div className='topBar'><p>ADD AN ITEM</p>
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