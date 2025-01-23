// import React from 'react'

// import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
const Contact = () => {
  const {name}=useParams();
    // const navigate=useNavigate()
  return (
    // <div style={{justifyContent:'center',
    //     alignItems:'center',
    //     display:'flex',

    // }}>
    //     <h1>Contact Us</h1>
    //     <br /><br />
    // <div className="contact-button">
    //     <button style={{display:"flex",alignItems:'center',justifyContent:'center',margin:40,padding:10}} onClick={()=>{navigate('info')}}>Contact Info</button>
    //     <button style={{display:"flex",alignItems:'center',justifyContent:'center',margin:40,padding:10}} onClick={()=>{navigate('form')}}>Contact form</button>
    // </div>
    //  </div>
<h1>User {name} page</h1>

  )
}

export default Contact