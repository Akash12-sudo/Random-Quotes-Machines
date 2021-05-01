
import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';


const App = () => {

  function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  const bgcolor = '#CD5C5C';

  let x = Math.floor(Math.random() * 240);
  let y = Math.floor(Math.random() * 240);
  let z = Math.floor(Math.random() * 240);
  let newcolor = "rgb(" + x + "," + y + "," + z + ")";


  const [Bg, setBg] = useState(bgcolor);
  const [Quote, setQuote] = useState("");

  useEffect(() => {

    const fetchApi = async () => {

      const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc";

      const response = await fetch(url);
      const resJson = await response.json();
      setQuote(resJson.quotes[between(0, 102)]);
      console.log(resJson.quotes[between(0, 102)]);
    }


    fetchApi();
  }, [Bg])

  return (
    <>
      <div style={{
        backgroundColor: Bg, transition: 'background-color 1s linear', width: '100vw', height: '100vh'
      }}>

        <div id="quote-box" style={{ width: "65rem" }}>

          <div id="text"
            style={{
              fontFamily: "font-family: 'Spirax', cursive",
              width: "55rem",
              color: Bg,
              fontSize: "3rem",
              transition: 'color 1s linear',
              textAlign: "center",
              backgroundColor: "white",
              marginTop: "2rem",
              marginLeft: "3rem",
              marginRight: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem"
            }}
          >
            <p>"{Quote.quote}</p>
          </div>


          <div id="author"
            style={{
              fontFamily: "font-family: 'Open Sans Condensed', sans-serif",
              color: Bg,
              fontSize: "2rem",
              fontWeight: "lighter",
              transition: 'color 1s linear',
              float: "right",
              backgroundColor: "white",
              marginRight: "2rem"
            }}


          >
            <p style={{
              backgroundColor: "white"
              , paddingLeft: "5rem", paddingRight: "5rem"
            }}>-{Quote.author}</p>
          </div>

          <div className="midDiv">

            <span id="tweet-quote">
              <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Limitations%20live%20only%20in%20our%20minds.%20%20But%20if%20we%20use%20our%20imaginations%2C%20our%20possibilities%20become%20limitless.%22%20Jamie%20Paolinetti"
                target="/blank" style={{ textDecoration: 'none', color: 'white' }}>
                <TwitterIcon style=
                  {{
                    backgroundColor: Bg,
                    transition: 'background-color 1s linear',
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10%",
                  }} />
              </a>
            </span>

            <span id="new-quote">
              <Button onClick={() => setBg(newcolor)} className="btn" variant="contained" style={{
                backgroundColor: Bg,
                transition: 'background-color 1s linear',
                color: "white",
                fontSize: "1.1rem",
                marginLeft: '45rem',
              }}>
                New quote</Button>

            </span>
          </div>
        </div>


      </div>
    </>
  )
};

export default App;