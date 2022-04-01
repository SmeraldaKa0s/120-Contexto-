import { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import "./Main.scss";
import Card from "./Card";

const Main = () => {
  const context = useContext(Context);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8affe8be373f48968e6754586fd5924d&language=${context.language}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, [context.language]); //para que haga fetch cada vez que cambio el lang

  const handleChangeIdioma = (e) => {
    context.setLanguage(e.target.value)
  }

  return (
    <div>
      { context.user.name &&
        <section className="ofertas">
          <h2>Ofertas solo para usuarixs registradxs</h2>
        </section>
      }
      <h1>Peliculas Populares</h1>

   {/*    malena recomienda hacer un componente languaje y ahi hacer un map sobre esos options
      ademas nombro que hay un fetch especifico con toda la ruta de todos los lenguajes  */}
      <select onChange={handleChangeIdioma}>
        <option value="es">Español</option>
        <option value="en" >Ingles</option>
      </select>

      <div className="container-card">
        {peliculas.map((pelicula) => (
          <Card 
          key={pelicula.id}
          title={pelicula.title} img={pelicula.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Main;
