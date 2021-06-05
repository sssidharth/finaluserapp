import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {FaEnvelope, FaPhone, FaGlobe} from 'react-icons/fa';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';


const UserCard = ({user, deleteUser, addLikedUser, light}) => {
        
        const {id, username, name, email, phone, website, address, isLiked, company} = user;
        const image = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
        const[submitted, setSubmitted] = useState({
          count : 0,
          prevDetails : []
        });
        const [details, setDetails] = useState({
          name : name,
          email : email,
          phone: phone,
          website : website
        });
        const [modal, setModal] = useState({
          isModalOpen : false
        });

       function toggleModal(){
          setModal({...modal , isModalOpen : !modal?.isModalOpen})
       }

      function handleUserData(e){
        let name = e.target.name;
        let value = e.target.value;

        if(name === "name"){
          setDetails({...details, name : value})
        }
        if(name === "email"){
          setDetails({...details, email: value})
        }
        if(name === "phone"){
          setDetails({...details, phone: value})
        }
        if(name === "website"){
          setDetails({...details, website: value})
        }
              
        console.log(details);
        e.preventDefault();     
      }

      function handleSubmit(e){
        let eventName = e?.target?.name;
        if(eventName === "submit" && details.name !== "" && details.email!== "" && details.phone!=="" && details.website!==""){          
          setSubmitted({
            count : submitted.count+1,
            prevDetails : details
          })
        }
        if(eventName === "cancel"){
          if(submitted.count === 0)
          setDetails({
            name : name,
            email : email,
            phone: phone,
            website : website
          });
          else if(submitted.count>0){
            setDetails(submitted.prevDetails)
          }          
        }
        toggleModal();
        e.preventDefault();
      }

      return(   
        <React.Fragment>   
        <Card style={{ width: '20rem' }} className={light ? 'box-light' : 'box-dark'}>
           <Card.Img
                src={image}
                alt="Avatar"
                className = "card-img"
              />
          <Card.Body>
          <Card.Title tag="h3">{details.name}</Card.Title>
          <Card.Text className="align-left">
          <div className="user-info">
            <FaEnvelope className="muted"  style={{ fontSize: '20px' }} />
            <span style={{ marginLeft: 10 }}>{details.email}</span>
          </div>
          <div className="user-info">
            <FaPhone style={{ fontSize: '20px' }} />
            <span style={{ marginLeft: 10 }}>{details.phone}</span>
          </div>
          <div className="user-info">
            <FaGlobe style={{ fontSize: '20px' }} />
            <span style={{ marginLeft: 10 }}>http://{details.website}</span>
          </div>
          </Card.Text>
          </Card.Body>
          <Card.Footer>
          <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', margin : "15px", width: "20%" }}
              onClick={()=>{addLikedUser(id)}}>
             {isLiked? <i class="fa fa-thumbs-up" ></i> : <i class="fa fa-thumbs-o-up"/>}
            </button>|
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', margin : "15px", width: "20%" }} 
              onClick={()=>toggleModal()}>
              {<i class="fa fa-pencil-square-o"/>}
            </button>|
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', margin : "15px", width: "20%" }}
              onClick={() => {
                deleteUser(id);
              }}>
              {<i class="fa fa-trash-o"/>}
            </button>
            </Card.Footer>          
        </Card>
          <Modal show= {modal.isModalOpen} backdrop="static"
                 keyboard={false} name="cancel">
                <Modal.Header>User Information</Modal.Header>
                <Modal.Body>
                   <Form>
                        <FormGroup>
                           <Label htmlFor="name">User Name*</Label>
                           <Input type="text" required id="name" name="name" value={details.name} onChange={(e)=>handleUserData(e)}></Input>
                        </FormGroup>
                        <br/>                                      
                        <FormGroup>
                           <Label htmlFor="email">Email*</Label>
                           <Input type="email" required id="email" name="email" value={details.email} onChange={(e)=>handleUserData(e)}></Input>
                        </FormGroup>
                        <br/>
                        <FormGroup>
                           <Label htmlFor="phone">Phone*</Label>
                           <Input type="phone" required id="phone" name="phone" value={details.phone} onChange={(e)=>handleUserData(e)}></Input>
                        </FormGroup>
                        <br/>
                        <FormGroup>
                           <Label htmlFor="website">Website*</Label>
                           <Input type="website" id="website" name="website" value={details.website} onChange={(e)=>handleUserData(e)}></Input>
                        </FormGroup>                   
                    </Form>
                    <Modal.Footer>
                    <Button type="submit" id="submit" name="submit" value="submit" color="primary" onClick={(e)=>handleSubmit(e)}>Submit</Button>{' '}
                    <Button type="cancel" id="cancel" name="cancel" value="cancel" color="outline-secondary" onClick={(e)=>handleSubmit(e)}>Cancel</Button>
                    </Modal.Footer>
                </Modal.Body>
          </Modal>
        </React.Fragment>
      );
       
}
export default UserCard;