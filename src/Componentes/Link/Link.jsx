import { Link } from "react-router-dom"
import styles from './Link.module.css'


const CustomLink = ({children, to}) => {
    return (
        <Link className={styles.link} to={to}>
            {children}
        </Link>
    )
}

export default CustomLink