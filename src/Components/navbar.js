import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import navback from '../images/navback.png';

class Navbar extends Component{
    render(){
        
        return(
        <nav className="navbar navbar-expand-lg navbar-expand-xs bg-dark navbar-dark" style={{backgroundImage:`url(${navback})`,marginTop:10,height:60}}>
        <div className="container-fluid">
        
        <a className="navbar-brand navbar-header" href="#"><img style={{marginLeft:-20,marginTop:-20,position:'absolute',height:120,width:120,backgroundColor:'Transparent',border:0}} src={require('../images/logo.png')} className="img-responsive img-rounded img-thumbnail"></img></a>
        <button className="navbar-toggler collapsed navbar-right" aria-expanded="false" type="button" data-toggle="collapse" data-target="#nav-collapse" aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="nav-collapse" style={{'zIndex':1}}>
        
        <div className="navbar-nav"  id="navbarnav" style={{paddingLeft:150,paddingTop:5}}>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link" style={{ display:'inline','letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>OUR BEERS</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link active" style={{ display:'inline','letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>PACKAGES</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link active"  style={{ display:'inline','letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>RESERVATION</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link active"  style={{display:'inline', 'letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>GALLERY</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link active"  style={{ display:'inline','letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>ABOUT US</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'50px'}}>
            <a href="#" className="nav-link active" style={{ display:'inline','letterSpacing': 'normal',fontSize: '1em', color: 'white', fontFamily:'Trebuchet MS'}}>ORDER ONLINE</a>
        </li>

        <li className="nav-item" style={{paddingLeft:'100px'}}>
            <button className="btn btn-sm btn-link btn-rounded text-white" style={{backgroundColor:'Transparent',border:'1px solid white',borderRadius:'20px', fontFamily:'Trebuchet MS'}}>Login</button>
        </li>
        </ul>
        </div>
        </div>

        </div>
        </nav>
         )
    }
}

export default Navbar;