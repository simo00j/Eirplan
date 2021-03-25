import React,{useState} from 'react';
import Button from './Button';
import Form from './Form'; 
import UpdateStand from './UpdateStand';

export default function UpdatePage(props){
    const [Update,setUpdate]=useState("updateHome");
    const [keywords,setKeywords]=useState(props.motsCles);
    
    

    
    function setPage(){
        if(Update==="updateHome") {
            return (        <div className="Update">
            <h1>Modifier le plan </h1>
            <Form name='Enter le nom du stand : ' />
             <div className='btnUpdate'> 
            <Button text='Ajouter le stand' className='btn'/>
            <Button text='Supprimer le stand' className='btn btn_danger' />
            <Button text='Modifier le stand' className='btn' onClick={setUpdate} changeTo ="updateStand"/>
            </div>
        </div>);}
        else if(Update==="updateStand") 
            {
                return (<UpdateStand motsCles = {keywords} />);
            }

    }


    return (
        setPage()

    );

}