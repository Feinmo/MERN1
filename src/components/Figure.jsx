
const Figure = (props) => {
  
  const imgDetails = props;
    
  return (
    <div>
      <img src={imgDetails.url} alt={imgDetails.title} />
      <br />

      <h2>{imgDetails.title}</h2>
      <p>
        Copyright: {imgDetails.copyright} date: {imgDetails.date}
      </p>
      <br />

      <p>{imgDetails.explanation}</p> 
    </div>
  );
};

export default Figure;
