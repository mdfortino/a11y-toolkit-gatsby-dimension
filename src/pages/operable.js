import React from 'react'
import { Link } from 'gatsby'
import RTRFORM from '../images/rtrform.jpg'
import RTRBadCode from '../images/rtrbadcode.jpg'
import RTRGoodCode from '../images/rtrgoodcode.jpg'
import Layout from '../components/layout'

const Operable = () => (
    <Layout>
      <h1>Operable</h1>
    <p>Users must be able to operate the interface (the interface cannot require interaction that a user cannot perform).</p>
    <h2>Keyboard Accessibility</h2> 
 <p> Make sure page headings and labels for form and interactive controls are informative. 
</p>
<img src={RTRFORM}
     alt="A screenshot of Rent the Runway's size and rental period forms, with red boxes around size and rental period images"
     title="Rent the Runway Forms"></img>
     <h3>Bad Code: </h3>
     <img src= {RTRBadCode}alt = "A code example of bad code in hich a form is not labeled properly and therefore not accessible by keyboard"></img>
     <h3> Good Code: </h3>
     <img src= {RTRGoodCode}alt = "A code example of good code in hich tab index is set to zero and aria-label is included"></img>
     <h3> How to test: </h3>
     <ul> 
     <li> Identify all functionality on the content.</li>
     <li> Check that all functionality can be accessed using only the keyboard or keyboard interface.</li> 
 </ul> 
  <h3> Other ways to make your website operable </h3>
  <ul> 
    <li> Time-adjustable. Add captions to provide a way for people who are deaf or otherwise have trouble hearing the dialogue in audio visual material to be able to view the material.  </li>
    <li> Interaction Methods. Add interaction methods o that users are able to find, navigate through and interact with web content.
</li> 
</ul> 
<p><a href = "https://webaim.org/standards/wcag/checklist"> WCAG 2 Checklist</a></p> 
  <p> 
    <Link to="/toolkit">Toolkit</Link>
    </p> 
    <p> 
      <Link to="/">Home</Link>
      </p> 
  </Layout>
)
  

export default Operable;