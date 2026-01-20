import amazon_logo from "../assets/amazon_logo.jpg"
import flipkart_logo from "../assets/Flipkart_logo.jpeg"
import Nike_image from "../assets/Nike_image.avif"
import styles from "../Components/Hero.module.css"
const Hero=()=>
{
  return(
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <p>YOUR FEET DESERVE THE BEST</p>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES YOUR FEET DESERVE THE BEST AND  WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
        <div className={styles.hero_btn}>
          <button>SHOP NOW</button>
          <button>Category</button>
          <p>Also Available On</p>
          <img className={styles.btn} src={amazon_logo} alt=""/>
          <img className={styles.btn} src={flipkart_logo} alt="" />
        </div>
      </div>



      <div className={styles.hero_img}>
        <img src={Nike_image} alt="" />
      </div>
    </div>
  )
}
export default Hero