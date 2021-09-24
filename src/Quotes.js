import React,{useState, useEffect} from 'react'
import {FaTwitterSquare} from 'react-icons/fa'

const API = 'https://api.quotable.io/random'

const Quotes = () => {
    const [quote,setQuote] = useState('')
    const [author,setAuthor] = useState('')

    const generateJoke = async () => {
            const response = await fetch(API)
            const data = await response.json()
            const result = data.content;
            const author = data.author
            setQuote(result)
            setAuthor(author)        
    }

    useEffect(() => {
       generateJoke()     
    }, [])

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote}-${author}`

    return (
        <div id="quote-box">
            <h3 id="text">{quote}</h3>
            <p id="author">{author}</p>
            <div className="buttons">
                <a title="Tweet this quote!" target="blank" id="tweet-quote" href={tweetURL}><FaTwitterSquare size="40" /></a>
                <button className="btn" onClick={generateJoke} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default Quotes
