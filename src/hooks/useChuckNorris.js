import { useState, useEffect } from "react";

function useChuckNorris() {
  const [category, setCategory] = useState("");
  const [joke, setJoke] = useState("No joke.");
  const [categories, setCategories] = useState([]);
  const [tweetUrl, setTweetUrl] = useState("");
  const [jokeId, setJokeId] = useState("");
  const baseUrl = `https://api.chucknorris.io/jokes/random`;
  const categoryUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const categoriesUrl = `https://api.chucknorris.io/jokes/categories`;

  useEffect(
    () => {
      newJoke();
    },
    [category]
  );

  useEffect(() => {
    fetch(categoriesUrl)
      .then(resp => resp.json())
      .then(cats => {
        setCategories(["Change Category"].concat(cats));
      })
      .catch(console.error);
  }, []);

  const newJoke = () =>
    fetch(category ? categoryUrl : baseUrl)
      .then(resp => resp.json())
      .then(({ value, id }) => {
        setJoke(value);
        setJokeId(id);
        setTweetUrl(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            value
          )}&url=${encodeURIComponent(
            "https://codesandbox.io/s/wy3p36px95"
          )}&via='rahsheen'&hashtags='chucknorris,freecodecamp,hooks,react'`
        );
      })
      .catch(console.error);

  return {
    category,
    setCategory,
    categories,
    joke,
    jokeId,
    newJoke,
    tweetUrl
  };
}

export { useChuckNorris };
