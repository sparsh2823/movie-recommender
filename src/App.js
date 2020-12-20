import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  comedy: [
    { name: "Phir Hera Pheri ", rating: "5/5" },
    { name: "PK", rating: "4.5/5" }
  ],

  drama: [
    {
      name: "Shawshank Redemption",
      rating: "5/5"
    },
    {
      name: "Ludo",
      rating: "4.5/5"
    }
  ],
  action: [
    {
      name: "The Dark Knight",
      rating: "5/5"
    },
    {
      name: "Black Panther",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Movie Recommender </h1>
      <h4>Checkout my favorite movies. Select a genre to get started</h4>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#111827",
              borderRadius: "0.9rem",
              color: "white",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "50px" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "0.2px solid #D1D5DB",
                width: "50%",
                margin: "auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
