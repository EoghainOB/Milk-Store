import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <div className='navigation'>
    <nav>
        <ul>
            <Link to="/"><p>&lt; Return</p></Link>
        </ul>
    </nav>
    </div>
  )
}

export default Navigation