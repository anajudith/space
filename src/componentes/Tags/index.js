import styles from './Tags.module.scss'

const Tags = () => {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            <li>Estrelas</li>
            <li>Galaxias</li>
            <li>Lua</li>
            <li>Planetas</li>
        </ul>
    </div>
  )
}

export default Tags