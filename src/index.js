import React from "react";
import ReactDOM from "react-dom";
import bulma from "bulma";
import { useChuckNorris } from "./hooks/useChuckNorris";

import "./styles.css";

function App() {
  const {
    setCategory,
    joke,
    newJoke,
    categories,
    tweetUrl,
    jokeId
  } = useChuckNorris();

  return (
    <div className="App" id="quote-box">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <figure class="image">
              <img
                alt="Chuck Norris Chuck Norrising"
                className="is-5by4"
                src="https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S"
              />
            </figure>

            <h1 class="title">Chuck Norris</h1>
            <h2 class="subtitle">Joke Generator</h2>
          </div>
        </div>
      </section>
      <div class="card">
        <div class="card-content">
          <p class="title" id="text">
            {joke}
          </p>
          <p id="author" style={{ display: "none" }}>
            ({jokeId})
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a
              id="tweet-quote"
              className="button is-link is-outlined"
              href={tweetUrl}
            >
              Tweet It!
            </a>
          </p>
          <p class="card-footer-item">
            <button
              className="button is-primary"
              onClick={newJoke}
              id="new-quote"
            >
              New Joke
            </button>
          </p>
          <p className="card-footer-item">
            <div className="select">
              <select onChange={e => setCategory(e.target.value)}>
                {categories.map(c => (
                  <option value={c}>{c}</option>
                ))}
              </select>
            </div>
          </p>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
