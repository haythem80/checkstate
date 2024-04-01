
import React, { Component } from 'react'
import "./Partie1.css"

export default class Partie1 extends Component {
  state={
    image:"./Capture.png",
    name:"MARION CARISELLE",
    job : "ingénieure logiciel",
    profil: "Profil",
    description:"je suis ingénieure logiciel, je crée des  applications trés performantes gràce à  une architecture organisée.j'ai également de l'expérience dans la conception de produits et la relation clientèle",
    comp:"compétence clés",
    liste:["Dévelopement de logiciels et d'architecture","Optimisation de la performance","Dépannage et controle de qualité","Méthode agile","Dévelopement front-end et back-end"],
    contact:"contactez-moi",
    email:"E-mail: bonjour@sitevraimentsuper.fr",
    telephone:"Téléphone: 01 23 45 67 89",
    site:"Site web: www.sitevraimentsuper.fr",
    adresse:"Adresse du bureau: 12,rue blaise pascal, 75000 Paris",
  }
  render() {
    return (
      <div className='section1'>
    <img src={this.state.image} alt="profile"  id="photo"/>
    <h1> {this.state.name}</h1>
    <h3 className='h3'> {this.state.job} </h3>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h4>{this.state.profil}</h4>
    <p> {this.state.description}</p>
    <h4>{this.state.comp}</h4>
        {
          this.state.liste.map(el => <li className='cles'> {el} </li>)
        }
    <h4>{this.state.contact}</h4>
    <p>{this.state.email}</p>
    <p>{this.state.telephone}</p>
    <p>{this.state.site}</p>
    <p>{this.state.adresse}</p>
    </div>
    )
  }
}
