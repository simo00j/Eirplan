import React, { useState } from 'react';
import Form from './Form';
import Button from './Button';
import UpdateMots from './UpdateMots';


export default function UpdateStand(props) {


    const [name, setName] = useState('');
    const [keywords, setKeywords] = useState(props.motsCles);
    const listMotsCles = keywords.map(mot => <UpdateMots id={mot.id} name={mot.name} key={mot.id} editKeyword={editKeyword} />)


    function addKeyword(name) {
        const newKeyword = { id: name, name: name, key: name }
        setKeywords([...keywords, newKeyword]);
    }



    function editKeyword(id, newName) {
        const listKeywords = keywords.map(word => {
            //console.log(newName);

            if (id == word.id) {
                console.log(newName);
                return { ...word, name: newName };
            }

            return word;
        });
        setKeywords(listKeywords);
    }

    function handleChange(e) {
        setName(e.target.value);
        console.log(name);

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);

        if (name != "") {
            addKeyword(name);
            console.log("ahmed");
        }
        setName('');

    }

    return (
        <div className='UpdateStand'>
            <h1>Modifier un stand</h1>
            <div>
                <div>
                    <Form name='Nom du stand : ' />
                    <Form name='Nom du responsable : ' />
                    <Form name='Heure début : ' />
                    <Form name='Heure fin : ' />
                </div>
                <div>
                    <div className='listemots'>
                        <h4>La liste des mots clés</h4>
                        <ul>
                            {listMotsCles}
                        </ul>

                        <form onSubmit={handleSubmit}>
                            <input type='text' onChange={handleChange} />

                            <button type="submit" className="btn">
                                Ajouter un mots cle
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn stand">
                        Modifier le stand
                            </button>
                    <button type="button" className="btn stand">
                            Retour 
                            </button>
                </div>
            </div>


        </div>



    );
}