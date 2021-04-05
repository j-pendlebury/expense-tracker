import Button from '../components/Button'

const Homepage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl m-4">
        Jamie Blaut's expense tracker
      </h1>
      <div className="flex flex-row">
        <Button text="Go to Payments" path="/payments" />
        <Button text="Go to History" path="/history" />
      </div> 
    </div>
  )
}

export default Homepage
