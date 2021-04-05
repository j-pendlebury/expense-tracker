import React from 'react'

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-300 to-blue-500 flex justify-end items-center py-5">
      <ul className="flex justify-around w-96 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/payments">Payments</a>
        </li>
        <li>
          <a href="/">Add Payment</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
