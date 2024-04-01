
import React, { Component } from 'react'
import "./Partie2.css"

export default class Partie2 extends Component {
  state={
    user1: {
      exp: "Expérience Professionnelle",
      travail:"Ingénieure logiciel",
      lp:"Logiciels Pixel | Septembre 2018 - présent",
      dev:["Développe des systèmes et des outils qui sont basés sur les perfermance et l'extensibilité","Maintient le schéma de base de données ainsi que les spécifications fonctionnelles et techniques"],
      tra:"Développeuse de logiciel",
      labo:"Laboratoires technologiques Numérix | juillet 2017- aout 2018",
      cv:["A participé tous les aspects d'un project, de la conception en passant par le développement jusqu'aux tests ","A travaillé à la maintenance et aux améliorations des applications existantes"],
    },
    user2: {
      forma:"FORMATION UNIVERSITAIRE",
      univer:"Université de Condorcet",
      niveau:"Master en sciences | Septembre 2015 - mai 2017",
      master:["Master en ingénierie des logiciels","A suivi des cours approfondis sur l'architecture des systèmes et sur la recherche informatique","A participé à des projets de système en entreprise"],
      ins:"institut des Giles Kahn",
      licence:"Licence science et technologies | juin 2008 - mai 2013",
      info:["Licence d'informatique Mention trés Bien","Option: développement des logiciels","Consultante en technologie et développement <br />d'applications,clubs d'entrepeuriat TGI"]
    },
    user3:{
      reference:"Références professionnelles",
      paragrahe:["Julie Alain,PGD des laboratoires technologiques Numérix <br />E-mail : bonjour@sitevraimentsuper.fr","christian buvin,Professeur à l'Unversité de Condorcet  E-mail : bonjour@sitevraimentsuper.fr"]
    }
  };
  render() {
    return (
      <React.Fragment>
    <div className='rep1'>
      <h1 className='title'> {this.state.user1.exp} </h1>
      <h3 className='title2'>{this.state.user1.travail} </h3>
      <h5 className='title3'>{this.state.user1.lp} </h5>
      {
        this.state.user1.dev.map(el => <li className='li'> {el} </li>)
      }
      <h3 className='title2'> {this.state.user1.tra} </h3>
      <h5 className='title3'>{this.state.user1.labo} </h5>
      {
        this.state.user1.cv.map(el => <li className='li'> {el} </li>)
      }
      </div>
      <div className='rep2'>
      <h1 className='title'> {this.state.user2.forma} </h1>
      <h3 className='title2'> {this.state.user2.univer}</h3>
      <h5 className='title3'> {this.state.user2.niveau} </h5>
      {this.state.user2.master.map(el => <li className='li'> {el} </li>)}
      <h3 className='title2'> {this.state.user2.ins} </h3>
      <h5 className='title3'> {this.state.user2.licence} </h5>
      {this.state.user2.info.map(el => <li className='li'> {el} </li>)}
      </div>
      <div className='rep3'>
      <h1 className='titlee'> {this.state.user3.reference} </h1>
      {this.state.user3.paragrahe.map(el => <li className='li'> {el} </li>)}
      </div>
      </React.Fragment>
    )
  }
}