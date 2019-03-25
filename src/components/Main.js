import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import './main.css'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          {/* <h2> "The failure to address issues of accessibility for persons with physical, sensory, and cognitive disabilities ultimately threatens to segregate people with disabilities as the permanent second-class citizens of the information age."</h2> */}

        <h2> What is accessibility? </h2>

          <p> Web accessibility means that people with disabilities can use the web regardless of the disability. Reaching that level of access is the goal of the Web Content Accessibility Guidelines (WCAG) 2.1, which is the current applicable standard from the W3C.</p>
<h2> The problem </h2> 
<p> 
Currently many sites and tools are developed with accessibility barriers that make them difficult or impossible for some people to use. </p> 

<h2> Where to start </h2> 
<p>Let' face it, the WCAG Guidlines can be a very daunting  start when you're trying to make your site accessible. </p> 
          <p> This site aims to break down the legal jargon into digestable guides and tools that developers can use to make accessible web formats...because accessibility should be accessible.</p>
          {close}
        </article>
        <article id="principles" className={`${this.props.article === 'principles' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Guiding Principles</h2> 
          <p> The WCAG guidelines are organized into 4 guiding principles: </p> 
         <ul> 
        <h2> 
          Perceivable
          </h2> 
          <h3> Information and user interface components must be presentable to users in ways they can perceive.</h3> 
          <p>This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses). </p> 
          <p> 
          <Link to="/perceivable">learn how to meet this guideline</Link> 
          </p> 
        <h2> Operable </h2> 
        <h3> User interface components and navigation must be operable. </h3> 
        <p> This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform). </p>
        <p>
          <Link to="/operable">learn how to meet this guideline</Link> 
          </p>
          <h2> Understandable </h2> 
          <h3>Information and the operation of user interface must be understandable.</h3> 
          <p>This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding).</p>
          <p>
          <Link to="/understandble">learn how to meet this guideline</Link>
          </p> 
          <h2>Robust</h2>
          <h3>Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. </h3> 
          <p> This means that users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)</p>

          <Link to="/robust">learn how to meet this guideline</Link>
          </ul>
          {close}
          </article>
        <article id="toolkit" className={`${this.props.article === 'toolkit' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Toolkit</h2>
          
          <ul className="icons">
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main