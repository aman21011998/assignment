import React from 'react';
import footer from '../images/footer.png';

const Footer=()=>{

    const array=['About Us','Reservations','Contact Us','Order','Packages','Events'];
    const array2=['Terms and Conditions','Privacy Policy','Carrers'];
    const array3=['Terms of Sevice .',' Privacy Policy .',' Site Map .'];
    return(<footer className="page-footer font-small"style={{backgroundImage:`url(${footer})`,width:'100%'}}>
        {/*<img src={require('../images/footer.png')} style={{width:'100%'}} className="img-responsive"></img>
            */}
            <div className="container-fluid">
    <span className="text-center text-white" style={{paddingTop:70,display:'block',fontSize:20,fontFamily:'Arial',opacity:0.7}}>Connect Socially with Byg Brewski</span>
    
    <div className="row text-center justify-content-center d-flex text-white flex-center pt-3" style={{display:'inline'}}>
        <span className="mx-4"><img src={require('../images/fb.png')}></img></span>
        <span className="mx-4"><img src={require('../images/insta.png')}></img></span>
        <span className="mx-4"><img src={require('../images/twitter.png')}></img></span>       
    </div>
    <div style={{fontSize:10,opacity:0.8,display:'inline'}} className="row text-center justify-content-center d-flex text-white flex-center font-small">
        <span className="px-4">Facebook</span>
        <span className="pr-4">Instagram</span>
        <span className="px-4">Twitter</span>
    </div>
        <div className="row d-flex text-white text-center justify-content-center pt-5">
        {array.map(link=>{return(<div className="col-md-1 font-small text-white"><a style={{cursor:'pointer'}}>{link}</a></div>)})}            
        </div>
         <div className="row d-flex flex-center text-center text-white pt-3 justify-content-center">
            {array2.map(value=>{return(<div className="mx-4 font-small"><a style={{cursor:'pointer'}}>{value}</a></div>)})}
             </div>   

    
    
    <div className="d-flex text-white" style={{opacity:0.7,fontSize:14}}>
        <div className="my-4 pt-5 mr-auto">© 2017 Byg Brewski,All Rights Reserved</div>
        <div className="my-4 pt-5 text-white mr-1" style={{fontSize:14,cursor:'pointer'}}>{array3.map(links=>{return(<a>{links}</a>)})}</div>
    </div>
    </div>
   </footer>)
}

export default Footer;