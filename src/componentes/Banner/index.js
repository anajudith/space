import  styles from './Banner.module.scss'
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className={styles.imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
    )
}

export default Banner;