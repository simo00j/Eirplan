import React from 'react';
import Button from './Button';


export default function homePage() {
  return (
    <div className='homePage'><div>
      <h1>Gestion du Plan </h1>

    </div>
      <div>
        <Button text='Importer un nouveau plan' className='btn' />
        <Button text='Modifier le plan' className='btn'/>

      </div>
    </div>
  );
}