import { useContext, useEffect } from 'react'
import { MainContext } from '../context/MainContext'

const HistoryContainer = () => {
  const { results, getHistory } = useContext(MainContext);

  useEffect(() => {
    getHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {results.map(result => {
         return <p key={result._id}>{result.month} => {result.total}</p>
      })}
    </div>
  )
}

export default HistoryContainer
