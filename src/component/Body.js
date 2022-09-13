import React from 'react';
import './styles.css'; 
import {HiArrowCircleRight } from "react-icons/hi"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import pic from './pexels-hafidzajusaf-3186010.jpg';
import  secondpic from './wallpaperflare.com_wallpaper (2).jpg';
import pics from './Screenshot (23).png';
import pics1 from './Screenshot (24).png';
import {motion} from "framer-motion";

function Body() {
  return (
    <motion.div >
       <div className='div--1'>
             <div className='wave wave1'></div>
             <div className='wave wave2'></div>
             <div className='wave wave3'></div>
             <div className='wave wave4'></div>
        </div>
        <Container  className='div3'  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      
     <h5 className='text-justify top '>Top Features</h5>
       <h1 className='text-justify'>What Enregistrer Brings to You ? </h1>
      <p className='text-justify'>Enregistrer is a transformer it will give you information about the milk products available around you</p>


        <Row className='information' >
             <Col   >
             <Card className="text-center card" >
      <Card.Header>IMPORTING</Card.Header>
      <Card.Body>
      <Card.Img src={pic}   height="250rem"></Card.Img>
        <Button variant="primary" className='btn-5'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
              
             </Col>


             <Col >
             <Card className="text-center card">
      <Card.Header>EXPORTING</Card.Header>
      <Card.Body>
      <Card.Img src={secondpic}   height="250rem"></Card.Img>
        <Button variant="primary" className='btn-5'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
             </Col>
             <Col >
             <Card className="text-center card">
      <Card.Header>IMPORTING</Card.Header>
      <Card.Body>
      <Card.Img src={pic}   height="250rem"></Card.Img>
        <Button variant="primary" className='btn-5'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
             
             </Col>
        </Row>

         


        <h5 className='text-justify top1'>Demo</h5>
       <h1 className='text-justify'>Importer And Exporter DashBoards</h1>
      <p className='text-justify down1'>Enregistrer will show you the daily analytics of exporting and importing details of the Milk products</p>

       
       <Row>
        <Col >  
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pics} />
      <Card.Body>
        <Card.Title>Analytics</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pics1} />
      <Card.Body>
        <Card.Title>Live Graphs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pics} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
       </Row>

     <Container className="text-center" >           <Button variant="primary"  className="know">Know More</Button> </Container>

           
        <h5 className='text-justify top1'>Keys</h5>
       <h1 className='text-justify'>Know More About Enregistrer</h1>
      <p className='text-justify down1'>If you are need in Milk products it gives you complete details with time and transportation that will update you and Alert you for every second and minute</p>

       
       <Row className='details'>
         <Col>
                <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Products</h5>
                </div>
         </Col>
         <Col> 
         <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Cow Ghee</h5>
                </div>
         </Col>
         <Col>  
         <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic  Cheese</h5>
                </div>
         </Col>
         <Col>  
         <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Paneer</h5>
                </div>  
         </Col>

       </Row>

     <Row className='details'>
         <Col>
         <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Butter</h5>
                </div>
         
         </Col>
         <Col>
         <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Products</h5>
                </div></Col>
            <Col>
            <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Curd</h5>
                </div>
                </Col>

                <Col>
                <div className="products">
                       <img src={pics} className="pic"/>
                       <h5>Organic Butter Milk</h5>
                </div></Col>
     </Row>


            <div className='btns'>
                          <Button variant='primary'>More Products</Button>
                           <Button variant='primary'>Know More</Button>
             </div>
 

        <Row className='sign--up'>

                       <Col>

                       <h1 className='tag1'>Please Sign Up for Better World
  
                              {<HiArrowCircleRight className="arrow"/>}                </h1>
                       </Col>
                           <Col>
                           
                           <main class="form-signin w-100 m-auto"> <form>
<img class="mb-4" src={secondpic} alt="" width="72" height="57" />
 <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

 <div class="form-floating">
 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
 <label for="floatingInput">Email address</label>
 </div>
 <div class="form-floating">
 <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
 <label for="floatingPassword">Password</label>
 </div>

 <div class="checkbox mb-3">
 <label>
 <input type="checkbox" value="remember-me" /> Remember me
 </label>
 </div>
 <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
 <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
 </form>
 </main>
                           
                           
                           </Col>
                           
        </Row>








    </Container>

      
   </motion.div>
  )
}

export default Body;




// <Row className='sign--up'>
// <Col>   

//   <Container>   <h1 className='tag1'>Please Sign Up for Better World
  
// </h1>
//    </Container> 




// </Col>
// {/* <Col>
                
// <main class="form-signin w-100 m-auto">
// <form>
// <img class="mb-4" src={secondpic} alt="" width="72" height="57" />
// <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

// <div class="form-floating">
// <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
// <label for="floatingInput">Email address</label>
// </div>
// <div class="form-floating">
// <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
// <label for="floatingPassword">Password</label>
// </div>

// <div class="checkbox mb-3">
// <label>
// <input type="checkbox" value="remember-me" /> Remember me
// </label>
// </div>
// <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
// <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
// </form>
// </main>
// </Col> */}

//  </Row>

