import { useState, useEffect } from "react";
import Figure from "./Figure";

const Api = () => {
  const date = new Date(Date.now()).toISOString().slice(0, 10);
  const [imgDate, setImgdate] = useState(date);
  const [imgDetails, setImageDetails] = useState([]);
  const [visible, setVisible] = useState(true);

  const NASA_URL ="https://api.nasa.gov";
  const NASA_API_KEY = "Crt5uiSUcboBSVuAwlrrbM3KrPlffx0ZSs5223Vl";

  const handleInput = (ev) => {
    console.log("Click ", ev.target.value.toLocaleString());
    setImgdate(ev.target.value.toLocaleString());
  };


  useEffect(() => {
    if (imgDate > date) {
      console.log("Date!");
      setVisible(false);
    } else setVisible(true);

    const fetchImg = async () => {
      console.log("Fetching Data");
      const response = await fetch(
        `${NASA_URL}/planetary/apod?date=${imgDate}&api_key=${NASA_API_KEY}`
      );
     
      const responseToJson = await response.json();
      return {
        ...responseToJson,
      };
    };

    fetchImg().then((data) => setImageDetails(data));
  }, [imgDate, NASA_URL]);

  return (
    <>
      <h1>Astronomical Picture of the Day</h1>
      <h2>Image corresponds to the date: {imgDetails.date}</h2>
      <label htmlFor="dateButton">or choose other date: </label>
      <input
        type="date"
        name="dateButton"
        id="dateButton"
        onChange={handleInput}
      />
      <br />
      <br />
      {visible && (
        <Figure
          url={imgDetails.url}
          title={imgDetails.title}
          copyright={imgDetails.copyright}
          date={imgDetails.date}
          explanation={imgDetails.explanation}
        />
      )}
      {!visible && <h2>No data available! Please choose date no later than {date}</h2>}
    </>
  );
};

export default Api;
