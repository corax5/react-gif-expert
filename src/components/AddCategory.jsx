import React from 'react'
import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setcategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('')
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type='text'
                    placeholder='Buscar gifs'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}

export default AddCategory
