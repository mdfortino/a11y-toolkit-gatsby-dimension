
import React from 'react'
import { Link } from 'gatsby'
import Dino from '../images/dinosaur.jpg'
import Dinobadcode from '../images/dinobadcode.jpg'
import Dinogoodcode from '../images/dinogoodcode.jpg'
import Layout from '../components/layout'


const Understandable = () => (
  <Layout> 
    <h1>Understandable</h1>
    <p>Users must be able toto understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding).</p>
    <h2>Using language attributes on the html element
 </h2> 
    <p> Defining the content of an HTML document makes the site readable to users and assistive technologies.</p>
    {/* <img src={Dino}
     alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
     title="The Mozilla red dinosaur"></img>
     <h3>Bad Code: </h3>
       <img src={Dinobadcode} alt = "A code example of bad code"></img>
     <h3> Good Code: </h3>
     <img src={Dinogoodcode} alt = "A code example of good code"></img> */}
     <h3> How to test: </h3>
     <ul> 
     <li> Examine the html element of the document.
</li>
     <li>Check that the html element has a lang and/or xml:lang attribute. </li> 
     <li> Check that the value of the lang attribute conforms to BCP 47: Tags for the Identification of Languages or its successor and reflects the primary language used by the Web page.
 </li> 
 </ul> 
  <h3> Other ways to make your website perceivable </h3>
  <ul> 
    <li> Predictability: Provide a warning before automatically opening a new window or tab. 
{/*  <a href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">(WCAG GL 1.2.2) </a></li>
    <li> Identify Purpose. Use ARIA landmarks to identify the regions of the page. <a href ="https://www.w3.org/TR/WCAG21/#identify-purpose">(WCAG GL 1.3.6)</a> */}
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

export default Understandable 
