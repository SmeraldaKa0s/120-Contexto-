import "./Card.scss"

const Card = ({ title, img }) => {
  return(
    <article className="card">
      <h3>{title}</h3>
 {/*      //Se puede poner el mismo ALT que el title ya que el 90% de las veces es igual  */}
  {/*         //la imagen deberia tener un div alrededor pero como es un codigo chico da iwal */}
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={`Poster de ${title}`}/> 
    </article>
  )
}

export default Card