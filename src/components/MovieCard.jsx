function MovieCard({ title, sayHello }) {
  
  return <li onClick={sayHello}>{ title }</li>
}

export default MovieCard;