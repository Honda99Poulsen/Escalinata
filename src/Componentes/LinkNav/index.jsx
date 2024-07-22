import { Link } from 'react-router-dom'
import styles from './LinkNav.module.css'

const LinkNav = ({to, children}) => {
    return (
        <Link to={to} className={styles.link}>
            {children}
        </Link>
    )
}

export default LinkNav