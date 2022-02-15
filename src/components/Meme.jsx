import React, {useEffect} from 'react'

function Meme() {

  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

   useEffect(() => {
     fetch("https://api.imgflip.com/get_memes")
       .then((response) => response.json())
       .then((data) => {
         setAllMemeImages(data.data.memes);
       });
   }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          placeholder="text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="form-btn"
          onClick={getMemeImage}
        >
          Generate New Image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme