import React from 'react'
import { FaBan } from 'react-icons/fa'

const Payment = ({ data: { description, amount, person, date , _id}, options }) => {
  return (
    <tr key={_id}>
      <td className="border border-blue-500 p-5 w-32">{description}</td>
      <td className="border border-blue-500 p-5 w-32">£{amount}</td>
      <td className="border border-blue-500 p-5 w-32">{person}</td>
      <td className="border border-blue-500 p-5 w-32">{new Date(date).toLocaleDateString("en-GB", options)}</td>
      <td className="border border-blue-500 p-5 w-32"><FaBan style={{ margin: "auto", color: "red", cursor: "pointer"}} /></td>
    </tr>
  )
}

export default Payment
