
import React from 'react'
import { Link } from 'gatsby'
import Dino from '../images/dinosaur.jpg'
import Dinobadcode from '../images/dinobadcode.jpg'
import Dinogoodcode from '../images/dinogoodcode.jpg'
import Layout from '../components/layout'


const Robust = () => (
  <Layout> 
    <h1>Robust</h1>
    <p>Users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible).
</p>
    <h2>Validating HTML </h2> 
    <p> HTML pages include a document type declaration (sometimes referred to as !DOCTYPE statement) and are valid according to the HTML version specified by the document type declaration. The developer can use off-line or online validators (see Resources below) to check the validity of the HTML pages..</p>
    {/* <img src={Dino}
     alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
     title="The Mozilla red dinosaur"></img>
     <h3>Bad Code: </h3>
       <img src={Dinobadcode} alt = "A code example of bad code"></img>
     <h3> Good Code: </h3>
     <img src={Dinogoodcode} alt = "A code example of good code"></img>
     <h3> How to test: </h3>
     <ul> 
     <li> Remove, hide, or mask the non-text content</li>
     <li> Display the long description </li> 
     <li> Check that the long description conveys the same information conveyed by the non-text content. </li> 
 </ul> 
  <h3> Other ways to make your website perceivable </h3>
  <ul> 
    <li> Time-based Media: Add captions to provide a way for people who are deaf or otherwise have trouble hearing the dialogue in audio visual material to be able to view the material. <a href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">(WCAG GL 1.2.2) </a></li>
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

export default Robust
