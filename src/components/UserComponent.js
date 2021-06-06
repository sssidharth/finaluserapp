import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {FaEnvelope, FaPhone, FaGlobe} from 'react-icons/fa';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';


const UserCard = ({user, deleteUser, addLikedUser, light}) => {
        const [form] = Form.useForm();
        const {id, username, name, email, phone, website, address, isLiked, company} = user;
        const image = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
        const[submitted, setSubmitted] = useState({
          count : 0,
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

      const handleSubmit = (values) =>{
        setSubmitted({
                count : submitted.count+1,
              })

        setDetails({
              name : values.name,
              email : values.email,
              phone: values.phone,
              website : values.website
        })
        toggleModal();
      }

      const onCancel = () =>{
        if(submitted.count === 0){
            setDetails({
              name : name,
              email : email,
              phone: phone,
              website : website
            });
          }
            else if(submitted.count>0){
              setDetails(details)
            }          
          
          toggleModal();
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
        <Modal
         visible={modal.isModalOpen}
         title="Edit User"
         okText="Submit"
         cancelText="Cancel"
         onCancel={onCancel}
         onOk={() => {
           form
          .validateFields()
          .then((values) => {
            handleSubmit(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
         }}
        >
        <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Name is required',
            },
          ]}
          initialValue={details.name}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Email is required',
            },
          ]}
          initialValue = {details.email}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: 'Phone number is required',
            },
          ]}
          initialValue = {details.phone}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: 'Website is required',
            },
          ]}
          initialValue = {details.website}
        >
          <Input/>
        </Form.Item>
        </Form>
        </Modal>
        </React.Fragment>
      );
       
}
export default UserCard;