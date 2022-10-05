import React from "react";

import Card from 'react-bootstrap/Card';


export default function Main(){
    return (
      
        <main class> 
        <div className="all-card">
        <h1 >Proposals</h1>
        
     
     

     
      
    <div className="card-tow">
   
    <Card >
    
      <Card.Body>
      <Card.Img  className="img-card"  src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Title className="card-title">Name of Project</Card.Title>
        
        <br></br>
        <button className="Button" >City</button>
        <button className="Button">Numper of investor</button>
        <button className="Button" >Specify shares</button>

        <div className="progress-bar">
        <label for="file"></label>
        <progress id="file" value="40" max="100"> 32% </progress>
        </div>

        <Card.Subtitle className="Card-Subtitle">
        Raised: 2000$
        </Card.Subtitle>

        <Card.Subtitle className="Card-Subtitle1">
        Goal: 7000$
        </Card.Subtitle>

        <Card.Text className=" text-card">
        More Details
        </Card.Text>
        
      </Card.Body>

     
      
    </Card>
    </div>

    <div className="card-three">
    <Card >
      
      <Card.Body>
      <Card.Img  className="img-card"  src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Title className="card-title"> Name of Project</Card.Title>
        
        <br></br>
       
        <button className="Button" >City</button>
        <button className="Button">Numper of investor</button>
        <button className="Button" >Specify shares</button>
        <div className="progress-bar">
        <label for="file"></label>
        <progress id="file" value="40" max="100"> 32% </progress>
        </div>

        <Card.Subtitle className="Card-Subtitle">
        Raised: 2000$
        </Card.Subtitle>
        <Card.Subtitle className="Card-Subtitle1">
        Goal: 7000$
        </Card.Subtitle>

        <Card.Text className=" text-card">
        More Details
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="card-one">
      <Card >
      <Card.Img className="img-card" src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Name of Project</Card.Title>
        
        <br></br>
        
        
        <button className="Button" >City</button>
        <button className="Button">Numper of investor</button>
        <button className="Button" >Specify shares</button>
        
        <div className="progress-bar">
        <label for="file"></label>
        <progress  value="40" max="100"> 32% </progress>
        </div>
        




        <Card.Subtitle className="Card-Subtitle">
        Raised: 2000$       
        </Card.Subtitle>
        <Card.Subtitle className="Card-Subtitle1">
        Goal: 7000$
        </Card.Subtitle>

       
        

        
        


      </Card.Body>

      <Card.Text className=" text-card">
        More Details
        </Card.Text>
      
      
    </Card>

    </div>
    </div>


    <button className="Button-under-card" >View All Project</button>

    
        </main>
    )
}