import React from 'react';
import { useState } from 'react';
import './input.styles.css'

const Inputs = () => {
    const [userInput, setUserInput] = useState({
        name : '',
        surname : '',
        age : '',
    })

    const handleChangeName = (e) => {
        setUserInput({
            ...userInput, 
            name : e.target.value,
        })
    }

    const handleChangeSurname = (e) => {
        setUserInput({
            ...userInput,
            surname : e.target.value,
        })
    }

    const handleChangeAge = (e) => {
        setUserInput({
            ...userInput,
            age : e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInput)
    }

    return(
        <div>
            <form>
                <div className = 'form-input'>
                    <label>Name :</label>
                    <input type = 'text' onChange={handleChangeName} />
                </div>
                <div className = 'form-input'>
                    <label >Surname : </label>
                    <input type = 'text'onChange={handleChangeSurname} />
                </div>
                <div className = 'form-input'>
                    <label >Age : </label>
                    <input type = 'number'onChange={handleChangeAge} />
                </div>
                <button className = 'btn' onClick = {handleSubmit}>
                    Submit
                </button>



            </form>
        </div>
    )
}

export default Inputs;