import React from 'react'
import Payment from './Payment';

const ListOfPayments = ({ data }) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month:"short",
    day:"2-digit"
  }

  return (
    <div className="flex justify-center my-5">
      <table className="table-auto shadow-lg">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Person</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(result => {
            return <Payment key={result._id} data={result} options={options} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListOfPayments
