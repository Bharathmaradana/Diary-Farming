import React from 'react';
import './reportcss.css';
import Heading from './Heading';
import Footer from './Footer';

const Reports =()=>{
  return (
    <div>

    <div className='appbody'>
      <div className='appbody1'>
        <b className='colour_p'>Products</b>
      </div>
      <div>
        <div className="child">
          <div className='child_header'>
            <b className='child_b'>Milk</b>
          </div>

          <div className="child_elements">
            <div>
              <div style={{backgroundColor: "#E3F2FD"}} className="child_colour">Milk.light</div>
              <div className="child_text">
                <p className='first'>Rating-5/5</p> <p className='second'>1 day</p>
              </div>
            </div>
            
            <div>
              <div style={{backgroundColor: "#90CAF9"}} className="child_colour">Milk[200]</div>
              <div className="child_text">
                <p className='first'>Rating-4/5</p> <p className='second'>4 day</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#2196F3"}} className="child_colour">Milk.main</div>
              <div className="child_text">
                <p className='first'>Rating-3/5</p> <p className='second'>7 day</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#1E88E5"}} className="child_colour">Milk.dark</div>
              <div className="child_text">
                <p className='first'>Rating-2.5/5</p> <p className='second'>10 day</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#1565C0"}} className="child_colour">Milk[800]</div>
              <div className="child_text">
                <p className='first'>Rating-1/5</p> <p className='second'>30 days</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div className="child">
          <div className='child_header'>
            <b className='child_b'>Ghee</b>
          </div>

          <div className="child_elements">
            <div>
              <div style={{backgroundColor: "#B9F6CA"}} className="child_colour">Ghee.light</div>
              <div className="child_text">
                <p className='first'>Rating-5/5</p> <p className='second'>30 days</p>
              </div>
            </div>
            <div className="child_text">
              {/* <p>Blue-50</p> <p>#E3F2FD</p> */}
            </div>
            <div>
              <div style={{backgroundColor: "#69F0AE"}} className="child_colour">Ghee[200]</div>
              <div className="child_text">
                <p className='first'>Rating-4/5</p> <p className='second'>50 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#69F0AE"}} className="child_colour">SGhee.main</div>
              <div className="child_text">
                <p className='first'>Rating-3/5</p> <p className='second'>60 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#00C853"}} className="child_colour">Ghee.dark</div>
              <div className="child_text">
                <p className='first'>Rating-2/5</p> <p className='second'>90 days</p>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      <div>
        <div className="child">
          <div className='child_header'>
            <b className='child_b'>Butter Milk</b>
          </div>

          <div className="child_elements">
            <div>
              <div style={{backgroundColor: "#EDE7F6"}} className="child_colour">Butter Milk.light</div>
              <div className="child_text">
                <p className='first'>Rating-5/5</p> <p className='second'>30 days</p>
              </div>
            </div>
            <div className="child_text">
              {/* <p>Blue-50</p> <p>#E3F2FD</p> */}
            </div>
            <div>
              <div style={{backgroundColor: "#B39DDB"}} className="child_colour">Butter Milk[200]</div>
              <div className="child_text">
                <p className='first'>Rating-5/5</p> <p className='second'>30 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#673AB7"}} className="child_colour">Butter Milk.main</div>
              <div className="child_text">
                <p className='first'>Rating-4/5</p> <p className='second'>40 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#5E35B1"}} className="child_colour">Butter Milk.dark</div>
              <div className="child_text">
                <p className='first'>Rating-3/5</p> <p className='second'>50 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#4527A0"}} className="child_colour">Butter Milk[800]</div>
              <div className="child_text">
                <p className='first'>Rating-2/5</p> <p className='second'>90 days</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div className="child">
          <div className='child_header'>
            <b className='child_b'>Sweet</b>
          </div>

          <div className="child_elements">
            <div>
              <div style={{backgroundColor: "#FBE9E7"}} className="child_colour">Sweet.light</div>
              <div className="child_text">
                <p className='first'>Rating-5/5</p> <p className='second'>30 days</p>
              </div>
            </div>
            <div className="child_text">
              {/* <p>Blue-50</p> <p>#E3F2FD</p> */}
            </div>
            <div>
              <div style={{backgroundColor: "#EF9A9A"}} className="child_colour">Sweet[200]</div>
              <div className="child_text">
                <p className='first'>Rating-4/5</p> <p className='second'>50 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#FFAB91"}} className="child_colour">Sweet.main</div>
              <div className="child_text">
                <p className='first'>Rating-3/5</p> <p className='second'>90 days</p>
              </div>
            </div>
            <div>
              <div style={{backgroundColor: "#D84315"}} className="child_colour">Sweet.dark</div>
              <div className="child_text">
                <p className='first'>Rating-2/5</p> <p className='second'>95 days</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <Footer/></div>
  );
}

export default Reports;