import React from 'react'
import "./Partie1.css"
const Partie1 = () => {
  return (
    <div className='section1'>
    <img src="./Capture.png" alt="profile"  id="photo"/>
    <h1>MARION <br /> CARISELLE</h1>
    <h3 className='h3'> ingénieure logiciel </h3>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h4> Profil</h4>
    <p>je suis ingénieure logiciel, je crée des <br /> applications trés performantes gràce à <br /> une architecture organisée.j'ai également <br />  de l'expérience dans la conception de produits et la relation clientèle </p>
    <h4>compétence clés</h4>
        <li className='cles'>Dévelopement de logiciels et d'architecture</li>
        <li className='cles'>Optimisation de la performance</li>
        <li className='cles'>Dépannage et controle de qualité</li>
        <li className='cles'>Méthode agile</li>
        <li className='cles'>Dévelopement front-end et back-end</li>
    <h4> CONTACTEZ-MOI</h4>
    <p>E-mail: bonjour@sitevraimentsuper.fr</p>
    <p>Téléphone: 01 23 45 67 89</p>
    <p>Site web: www.sitevraimentsuper.fr</p>
    <p>Adresse du bureau: 12,rue blaise pascal,<br /> 75000 Paris</p>
    </div>
  )
}

export default Partie1