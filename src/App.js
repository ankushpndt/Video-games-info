import React, { useState } from "react";
import "./styles.css";
var gamesList = {
  Action: [
    {
      name: "Watch Dogs Legion",
      rating: "4.0/5",
      image:
        "http://www.siepman.me/wp-content/uploads/2020/10/Watch-Dogs-Legion-Header-1536x864.jpg"
    },
    {
      name: "Apex Legends",
      rating: "4.7/5",
      image:
        "https://cdn.wccftech.com/wp-content/uploads/2019/02/apex-legends-keyart-1030x579.jpg"
    }
  ],
  Adventure: [
    {
      name: "Red Dead Redemption 2",
      rating: "4.0/5",
      image: "https://wallpapercave.com/wp/wp3770429.png"
    },
    {
      name: "Detroit Become Human",
      rating: "4.0/5",
      image:
        "https://i.gadgets360cdn.com/large/detroit_become_human_1527241312108.jpg?output-quality=80&output-format=webp"
    }
  ],
  Sports: [
    {
      name: "NBA 2K21",
      rating: "3.5/5",
      image:
        "https://media.bleacherreport.com/f_auto,w_800,h_533,q_auto,c_fill/br-img-images/003/874/555/66c7c6a8d374c050323153d95cbbc67e_crop_north.jpg"
    },
    {
      name: "FIFA 20",
      rating: "4/5",
      image:
        "https://www.essentiallysports.com/wp-content/uploads/maxresdefault-15-5-1-800x450.jpg"
    }
  ],
  Strategy: [
    {
      name: "Plants vs Zombies 3",
      rating: "4/5",
      image:
        "https://venturebeat.com/wp-content/uploads/2020/02/plantsvszombies3.jpg?w=1010&strip=all"
    },
    {
      name: "Age of Empires III",
      rating: "4/5",
      image:
        "https://static.ageofempires.com/aoe/wp-content/uploads/2020/10/aoe3de_AvailableNow_LogoOnly.jpg"
    }
  ]
};
export default function App() {
  var [selectedGenre, setGenre] = useState("Action");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ padding: "1rem", margin: "1rem" }}>Video games</h1>
      <h3 style={{ paddingBottom: "1rem" }}>
        Checkout one of the best video games. Select genre to get started.
      </h3>
      <div>
        {Object.keys(gamesList).map((genre) => (
          <button
            style={{
              outline: "none",
              marginBottom: "1.5rem",
              cursor: "pointer"
            }}
            onClick={() => clickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul key={selectedGenre}>
          {gamesList[selectedGenre].map((game) => (
            <li
              style={{
                padding: "1rem",
                border: "1px solid gray",
                margin: "1rem",
                listStyle: "none",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div>
                <img src={game.image} alt="" className="image" />
              </div>
              <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                {game.name}
              </div>
              <div style={{ fontSize: "smaller", margin: "0.5rem" }}>
                {game.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
