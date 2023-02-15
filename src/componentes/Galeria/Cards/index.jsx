import styles from "./Cards.module.scss";
import open from '../open.png'
import favorito from '../favorito.png'

const Cards = ({itens, styles}) => {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map((itens) => {
          return (
            <li key={itens.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={itens.imagem}
                alt={itens.titulo}
              />
              <p className={styles.galeria__descricao}>{itens.titulo}</p>
              <div>
                <p>{itens.creditos}</p>
                <span>
                  <img src={favorito} alt="Ícone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
  )
}

export default Cards;