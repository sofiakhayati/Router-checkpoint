import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom"
import myimage from "./image.jpg"
import './filtreMovie.css'

function FiltreMovie({setKeyword, setRating}) {
  
  return (

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginLeft:"-40px", paddingTop:"2%", paddingBottom:"2%", paddingRight:"2%"}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <img src={myimage} alt="img" style={{borderRadius:"50%", marginLeft:"-250px", marginRight:"20px", width:"120px", height:"100px"}}/>
            <Link to='/Home' className="navv" style={{textDecoration: "none", marginRight:"20px"}}>Home</Link>
            <Link to='/About US' className="navv" style={{textDecoration: "none", marginRight:"20px"}}>About US</Link>
            <Link to='/Contact US' className="navv" style={{textDecoration: "none"}}>Contact Us</Link>
           
          </div>
          <div>
              <ReactStars
                  count={5}
                  onChange={(e)=>setRating(e)}
                  size={24}
                  activeColor="rgb(173, 81, 138)"
                //  value={rate}
              />     
         </div>
         <div>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange= {(e)=>{setKeyword(e.target.value)}}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit" >Search</Button>
          </Form>
         </div>
          
      </div>
   
    


/*{

    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center", width:"60%", margin:"1%"}}>
        <input type="text" 
        onChange={(e)=>{setKeyword(e.target.value)}}
        placeholder='Search For Movie' 
        style={{border:"5px solid rgb(164, 205, 50)"}}/>
        <div>
              <ReactStars
                  count={5}
                  onChange={(e)=>setRating(e)}
                  size={24}
                  activeColor="rgb(173, 81, 138)"
                //  value={rate}
              />     
        </div>
    </div>

  }*/
  )
}
export default FiltreMovie
