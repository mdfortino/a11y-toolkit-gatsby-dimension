import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Operable = () => (
    <Layout>
      <h1>Operable</h1>
      <p>brief description</p>
    <ul> 
      <li> Text Alternatives </li> 
      <li> Time-based Media: add captions  </li>
      <li> Identify Purpose</li> 
    </ul>
      <p> 
        <Link to="/">Home</Link>
        </p> 
        <p> 
      <Link to="/toolkit">Toolkit</Link>
      </p> 
    </Layout>
  )

export default Operable;