import React from 'react';



export default function input(props) {

    return (
        <div className='form'>
        <form className='formUpdate'>
            <div>
                <label>{props.name}</label>
                <input type='text' className='inputUpdate' />
            </div>
        </form>
        </div>
        );
}
