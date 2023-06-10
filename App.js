import { useEffect, useState } from 'react';
import './App.css';
import Videocard from './Videocard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
          alt="Reels Logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, url, likes, shares }) => (
          <Videocard
            key={url} // Make sure to add a unique key for each element in the array
            avatarSrc={avatarSrc}
            channel={channel}
            likes={likes}
            shares={shares}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
