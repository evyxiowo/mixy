import {Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if(error.status === 404){
    return (<Wrapper>
      <div>
        <img src={img} alt="Not Found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find this url</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>So sorry something went wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
