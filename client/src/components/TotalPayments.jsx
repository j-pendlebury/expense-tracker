import React from 'react'

const TotalPayments = ({ data }) => {
  let total = 0;

  data.forEach(result => {
    total += result.amount
  })

  return (
    <div className="flex justify-center">
      The total is £{total}
    </div>
  )
}

export default TotalPayments
