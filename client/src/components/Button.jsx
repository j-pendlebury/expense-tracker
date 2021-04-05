import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="bg-green-400 p-4 text-white rounded-md shadow mx-2">
        {text}
      </button>
    </Link>
  )
}

export default Button
