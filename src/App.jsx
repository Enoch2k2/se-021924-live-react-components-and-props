import MovieCard from './components/MovieCard'

function App() {
  const array = ["Finding Nemo", "The Godfather", "John Wick", "Taken", "Spongebob Squarepants Movie"]
  // const result = 1 + 1;

  function sayHello() {
    console.log("sayHello")
  }

  const movieCards = array.map((title, idx) => <MovieCard key={idx} title={title} sayHello={sayHello} />)



  return (
    <div>
      <h1>Movie Lister</h1>
      <ul>
        { movieCards }
      </ul>
    </div>
  )
}

export default App
