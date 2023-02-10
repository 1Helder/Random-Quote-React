import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch(" http://api.quotable.io/random")
      .then(resp => resp.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )

  }, [])

  function newQuote() {
    fetch("http://api.quotable.io/random")
      .then(resp => resp.json())
      .then(
        (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
        }
      )
  }

  return (
    <div className="App">
      <div className="quote">
        <h2>"{quote}"</h2>
        <small>-{author}-</small>
      </div>
      <button className="btn" onClick={newQuote}>Generate New Quote</button>
    </div>
  )
}

export default App;
