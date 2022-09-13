import React from 'react'
import './styles.css';
import { WiDayCloudy } from "react-icons/wi";
import {GrFacebook} from 'react-icons/gr';
import {RiInstagramFill} from 'react-icons/ri';
import {RiTwitterLine} from 'react-icons/ri'


function Footer() {
  return (
   
  
        
              <div className='footer'>
                    <div className='dis'>
                     <div className='title--1'>    <WiDayCloudy  className='day'/>
                          <h3>Enregistrer</h3> </div> 
                   
                     <div className='title--2'>
                     <div className='icons--1'>     <GrFacebook className='icons-1'/><h4>FaceBook</h4> </div> 
                     <div className='icons--1'>        <RiInstagramFill className='icons-1' /><h4>Blog</h4></div> 
                     <div className='icons--1'>   <RiTwitterLine className='icons-1' /><h4>Twitter</h4></div> 
                     </div>
                         
                    </div>


                    <div className='end'>
                        <h4>@Enregistrer</h4>    
                    </div>
              </div>
         
   

        




  )
}

export default Footer