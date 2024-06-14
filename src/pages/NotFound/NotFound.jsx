import { Link } from "react-router-dom"
import s from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={s.container}>
    <h2 className={s.notFound_title}> NotFound </h2> 
    <Link className={s.link} to="/">
       Back Home
      </Link>
    </div>
  )
}

export default NotFound
