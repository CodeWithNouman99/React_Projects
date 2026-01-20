import nike_logo from '../assets/nike_logo.jpeg'
import  styles from "../Components/Nav.module.css"
const Nav=()=>
{
  return(
    <>
<nav className={`${styles.navbar} bg-body-tertiary`}>
  <div className={styles.container}>
    <a className={styles.brand} href="#">
      <img src={nike_logo} alt="Nike logo" width="30" height="24" />
    </a>
  </div>

  <ul className={styles.navList}>
    <li className={styles.navItem}>
      <a className={styles.navLink}>Home</a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink}>Menu</a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink}>Location</a>
    </li>
    <li className={styles.navItem}>
      <a className={styles.navLink}>About Us</a>
    </li>
  </ul>
  <button className={styles.loginBtn}>Login</button>
</nav>


</>
)
}
export default Nav