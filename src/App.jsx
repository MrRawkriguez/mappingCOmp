import './App.css'
import Joke from "./Jokes"
import jokesData from './jokesData'

function App() {

  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <main>
      <h1>Jokes Neukka</h1>
      {jokeElements}
    </main>
  )
}

export default App
