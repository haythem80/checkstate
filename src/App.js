import React, { Component } from 'react'
import Partie1 from './component/Partie1'
import Partie2 from './component/Partie2'



export default class App extends Component {
    state= {
    fullname: "MARION CARISELLE",
    imagesrc:"./Capture.png",
    Profession:"Développeuse de logiciels",
    isShow: true,
  };
  handleClickShow = () => {
    this.setState({ isShow: !this.state.isShow });
  }
  render() {
    return (
      <div className='state'>
      <div><button className='btn' onClick={this.handleClickShow} > Show </button> </div>
      {
        this.state.isShow &&
        <div className="App">
        <div className='content1'> <Partie1 /> </div>
        <div className='content2'> <Partie2 /> </div>
        </div>
      }
          </div>
    )
  }
}
