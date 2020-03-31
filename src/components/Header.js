import React from 'react'
import Ilustration from '../img/developer.svg'
import Form from './Contact.form'

export default () => (
  <header className="bg-purple-100 border-solid border-b-2 ">
    <div className="container mx-auto p-12 max-w-6xl ">

      <div className="flex justify-center items-center flex-wrap">
        <div className="md:flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Maicol Duque</h1>
          <p className="text-xl font-light">Desarrollador de aplicaciones web full stack.</p>
        </div>
        {/* Extracted Ilustration of: https://undraw.co/ */}
        <img src={Ilustration} alt="Software developer" style={ {height: "300px" }}></img>  
      </div>

      <div>
        <Form />
      </div>
    </div>
  </header>
)