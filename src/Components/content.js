import React from 'react';
import pic3 from '../images/pic3.jpg';
import pic5 from '../images/pic5.jpg';

const Content=()=>{
    return(<React.Fragment>

<div> 
       <img className="img-responsive" src={require('../images/1.jpg')} style={{width:'100%','zIndex':100}}></img>     
     </div>
     <div className="card offset-md-2 offset-sm-1 col-sm-5 col-md-3  text-center text-white " style={{position:'absolute',zIndex:1000,marginTop:'-30px','backgroundColor':'#003366',borderRadius:10}}>
       <span style={{fontFamily:'Trebuchet MS',fontSize:20}}>Brewery &amp; Fine Dining<br/> Restaurant</span>
     </div>
      <div className="row" style={{marginLeft:0}}>
          <div className="col-md-5" style={{backgroundColor:'#fff7e7'}}>
            
            <div className="card" style={{backgroundColor:'#fff7e7',border:0,float:'right',position:'relative',marginTop:80}}>
              <div className="card-body text-justify">
                <span style={{fontWeight:'bold',fontFamily:'Trebuchet MS',fontSize:32}}>Order Online</span>
                <br/>
                <span style={{fontFamily:'Trebuchet MS',fontSize:14}}>Order food online from our <br/>restaurant in Bangalore.</span>
                <br/><br/>
                <p><span>Big Brewsky offers you:</span>
                <ul style={{fontSize:14}}>                 
                  <li>Wide range of <br/>food cuisines to taste</li>
                  <li>Home Deleivery</li>
                  <li>Online Payment</li>
                  </ul>
                  </p>
                <button type="button" style={{border:'2px solid #003366',borderRadius:20,color:'#003366'}} className="btn btn-block">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xs-12"><img className="img-responsive" src={require('../images/2.png')} style={{width:'100%',height:'100%'}}></img></div>         
      </div>
      <div style={{backgroundImage:`url(${pic3})`,width:'100%'}} className="img-responsive">
         {/* <img className="img-responsive" src={require('./images/pic3.jpg')} style={{position:'relative',width:'100%',height:'auto',margin:0}}/>
            */}       
        <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4 col-xs-10 offset-xs-2">
        <div className="card" style={{borderRadius:0,marginRight:'-13px',height:'500px',color:'white','backgroundColor':'black',opacity:0.7,background:'rgb(0,0,0,0.8)'}}>
          <div className="card-body text-justify text-white" style={{marginLeft:20,marginTop:60}}>
            <h4>Reservation</h4>
            <p>Big brewsky also has a<br/>powerful option that puts<br/>you in control of your<br/>table management and<br/>reservations earlier with our<br/>online reservation system.</p>
            <br/>
            <button type="button" style={{border:'2px solid #fff',borderRadius:20,color:'#003366'}} className="btn text-white">BOOK A TABLE</button>
          </div>
        </div>
        </div>
      </div>

      <div className="row" style={{marginLeft:0}}>
          <div className="col-md-5" style={{backgroundColor:'#fff7e7'}}>
            
            <div className="card" style={{backgroundColor:'#fff7e7',border:0,float:'right',position:'relative',marginTop:80}}>
              <div className="card-body text-justify">
                <span style={{fontWeight:'bold',fontFamily:'Trebuchet MS',fontSize:32}}>Party Packages</span>
                <br/>
                <p>Big brewsky is an ideal venue<br/> for hosting a fabulous party.<br/>We are happy to accomodate<br/> all your entertainment needs.<br/>Alternative and expermimental<br/> musicians are playing and plan<br/> your evening accordingly.</p>
                <button type="button" style={{border:'2px solid #003366',borderRadius:20,color:'#003366'}} className="btn btn-block">BOOK A PACKAGE</button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xs-12"><img className="img-responsive" src={require('../images/2.png')} style={{width:'100%',height:'100%'}}></img></div>         
      </div>
      <div style={{backgroundImage:`url(${pic5})`,height:'500px',width:'100%'}}>
          {/*<img className="img-responsive" src={require('./images/pic5.jpg')} style={{width:'100%',height:'auto',margin:0}}></img>
          */}
          <div className="col-md-5 col-sm-8 offset-sm-4 offset-md-7 col-xs-10 offset-xs-2">
        <div className="card" style={{borderRadius:0,marginRight:'-13px',position:'relative',height:'500px',color:'white','backgroundColor':'black',opacity:0.7,background:'rgb(0,0,0,0.8)'}}>
          <div className="card-body text-justify text-white mt-md-5 mt-xs-2" >
            <h4>Our Beers</h4>
            <p>Phenomenal beers brewed by<br/>ourselves is,what big brewsky built<br/>it's name on.<br/>To accompany them, we have a range  <br/>of equisite food from Indian to <br/>Sushi.Our open air setup,let's you<br/>enjoy all the good things in life-The <br/>weather,great music and our very<br/>own hand crafted beers.</p>
            <br/>
            <button type="button" style={{border:'2px solid #fff',borderRadius:20,color:'#003366'}} className="btn text-white">BOOK A TABLE</button>
          </div>
        </div>
        </div>
     </div>
    </React.Fragment>);
}

export default Content;