import { useEffect, useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import Search from "./Components/Search";
import CardMaker from "./Components/CardMaker";
import { AppContext1 } from "./Store/AppContext1";
import { useContext } from "react";
import ButtonMaker from "./Components/ButtonMaker";
import Loading from "./Components/Loading";
function App() {
  const [loading, setLoading] = useState(true);
  const context = useContext(AppContext1);

  const getPhotos = async () => {
    setLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${context.query}`, {
      headers: {
        Authorization:
          "9MG4TrSSvO7ImR03nX8fsXfLNOuUaWYklqXYkPG2jvnDP8M1S4psTAHK",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        context.setData(data.photos);
      });
  };

  useEffect(() => {
    getPhotos();
  }, [context.query]);
  return (
    <>
      <Search></Search>
      <ButtonMaker />
      {loading ? <Loading /> : <></>}
      <CardMaker />
    </>
  );
}

export default App;
