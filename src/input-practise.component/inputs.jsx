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
        setUserInput((prevState) => {
            return(
                {
                    ...prevState, 
                    name : e.target.value,
                }
            )
        } )
    };

    const handleChangeSurname = (e) => {
        setUserInput((prevState) => {
            return(
                {
                    ...prevState,
                    surname : e.target.value,
                }
            )
        })
    }

    const handleChangeAge = (e) => {
        setUserInput((prevState) => {
            return({
                ...prevState,
                age : e.target.value,
            })
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInput);

        setUserInput({
            name : '',
            surname : '',
            age : ''
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className = 'form-input'>
                    <label>Name :</label>
                    <input 
                    type = 'text' 
                    onChange={handleChangeName} 
                    value = {userInput.name}/>
                </div>
                <div className = 'form-input'>
                    <label >Surname : </label>
                    <input 
                    type = 'text'
                    onChange={handleChangeSurname}
                    value = {userInput.surname} />
                </div>
                <div className = 'form-input'>
                    <label >Age : </label>
                    <input 
                    type = 'number'
                    onChange={handleChangeAge} 
                    value = {userInput.age} />
                </div>
                <button >
                    Submit
                </button>



            </form>
        </div>
    )
}

export default Inputs;