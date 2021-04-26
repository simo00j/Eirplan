import React,{useState} from "react";


export default function Floor(props){
    const [isEditing,setEditing] = useState(false);
    const [path,setPath] = useState('');

    function handleChange(e){
        setPath(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.editFloor(props.id,path);
        setPath("");
        setEditing(false);
    }
    const editingTemplate=(
        <form className="stack-small" >
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New Path 
        </label>
        <input id={props.id} className="todo-text" type="file" onChange={handleChange}/>
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=>setEditing(false)}>
          Cancel
        </button>
        <button onClick={handleSubmit} className="btn btn__primary todo-edit" >
          Save
        </button>
      </div>
    </form>
    );
    const viewTemplate = (
        <div className="btn-group">
        <button type="button" className="btn" onClick={()=>setEditing(true)}>
          Edit 
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deletingFloor(props.id)}
        >
          Delete 
        </button>
      </div>

    );
    return ( <li className="todo stack-small">
        {props.path}
    {isEditing? editingTemplate : viewTemplate}
</li>);
}