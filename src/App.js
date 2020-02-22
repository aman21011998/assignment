import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Content from './Components/content';

function App() {
  
  return (
    <div className="container-fluid" style={{backgroundColor:'#fff7e7'}}>
     <div className="row"><div className="col-md-12"><Navbar></Navbar></div></div>
      <Content></Content>     
      <Footer></Footer>
    </div>)
 
}

export default App;
