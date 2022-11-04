import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
function AddMovie({handleClose, show, rate, addMovieFn}) {
    const [newmovie, setNewmovie] = useState(
        {
            "Title": "",
            "Year": "",
            "Type": "",
            "rate": 1,
            "Poster":""
        }
    )
    console.log(newmovie);
    
   const ratingChanged = (nextValue, prevValue, name) => {
        setNewmovie({...newmovie, rate:nextValue})
      };
    const handleChange = (event) => {
        setNewmovie({...newmovie, [event.target.id]: event.target.value})
      }
    return (
      <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:" rgb(107, 158, 25)"}}>
                    <Modal.Title><b><i>Add New Movie</i></b></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:" rgb(107, 158, 25)"}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><b>Title</b></Form.Label>
                            <Form.Control type="text" placeholder="enter your movie" id="Title" onChange={handleChange}/>
                            <Form.Label><b>Year</b></Form.Label>
                            <Form.Control type="number" id="Year" placeholder="enter movie's year" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Type</b></Form.Label>
                            
                            <Form.Select aria-label="Default select example" id='Type' onChange={handleChange}>
                                <option>Choose Movie's Type</option>
                                <option id='Movie'>Movie</option>
                                <option id='Series'>Series</option>
                                <option id='Cartoon'>Cartoon</option>
                            </Form.Select>
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>rate</b></Form.Label>
                            <ReactStars id='rate'
                            count={5}
                           onChange={ratingChanged}
                            size={24}
                            activeColor= "white"
                            value={rate}
                        
                            //edit = {false}
                            
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Poster</b></Form.Label>
                            <Form.Control type="text" id="Poster" placeholder="enter movie's url" onChange={handleChange} />
                        </Form.Group>
                        
                    </Form>

                </Modal.Body>
          <Modal.Footer style={{backgroundColor:" rgb(107, 158, 25)"}}>
            <Button style={{backgroundColor:" rgb(43, 65, 8)", color:"white", border:"3px solid white"}} onClick={handleClose}>
              <b>Close</b>
            </Button>
            <Button style={{backgroundColor:" rgb(43, 65, 8)", color:"white", border:"3px solid white"}} onClick={
            ()=>{
                addMovieFn(newmovie)
                handleClose()
            }
            }>
             <b> Add </b>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
   
}
export default AddMovie
