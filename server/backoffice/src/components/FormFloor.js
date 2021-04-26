import React,{useState} from "react";

export default function FormFloor(props){

    const [path,setPath] = useState('');

    function handleChange(e){
        setPath(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(path!=="")
            props.addFloor(path);
    
        setPath("");
        }
    return (
            <form >

            <input
              type="file"
              id="new-todo-input"
              className="input input__lg"
              name="file"
              autoComplete="off"
              value = {path}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="btn btn__primary btn__lg">
              Add
            </button>
    
            </form>
        );
}