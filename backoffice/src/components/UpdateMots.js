import React,{useState} from 'react';
import Button from './Button';



export default function UpdateMots(props) {
    const [name,setName]=useState("");
    const [isEditing,setEditing]=useState(false);
    
    function handleChange(e){
        setName(e.target.value);
        console.log(name);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        props.editKeyword(props.id,name);
        console.log(name);
        setName("");
        setEditing(false);
    }

    const editTemplate = (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Editing the keyword {props.name}</label>
                <input id={props.id} type="text" className="keyword-input" onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                </button>
                <button type="submit" className="btn btn__primary todo-edit"  >
                    Save
                </button>
            </div>
        </form>
    ); 
    
    
    
    const viewTemplate = (<div>
        <label className="todo-label" htmlFor={props.id}>
            {props.name}
        </label>
        <div className="btn-group">
          <button type="button" className="btn" onClick={()=>setEditing(true)}>
            Edit 
          </button>
          <button
            type="button"
            className="btn btn__danger"
           
          >
            Delete 
          </button>
        </div>

        </div>
    );



    return (
        <li className="mots-cle">
        {isEditing? editTemplate: viewTemplate}
    </li>

    );


}