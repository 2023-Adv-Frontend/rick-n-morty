import { useState } from 'react'
import IconButton from './components/library/buttons/IconButton'

function App() {
  const [enabledBookmark, setEnabledBookmark] = useState(false);
  const [enabledHeart, setEnabledHeart] = useState(false);
  const [enabledThumbsUp, setEnabledThumbsUp] = useState(false);
  const color = '#00B0C8';
  const fillBookmark = enabledBookmark ? color : '#fff';
  const fillHeart = enabledHeart ? color : '#fff';
  const fillThumbsUp = enabledThumbsUp ? color : '#fff';

  return (
    <div className="App">
      <IconButton
        onClick={() => {
          console.log('Button clicked!');
          setEnabledBookmark(!enabledBookmark);
        }}
        icon="bookmark"
        fill={fillBookmark}
        color={color}
        enabled={enabledBookmark}
      />
      <IconButton
        onClick={() => {
          console.log('Button clicked!');
          setEnabledHeart(!enabledHeart);
        }}
        icon="heart"
        fill={fillHeart}
        color={color}
        enabled={enabledHeart}
      />
      <IconButton
        onClick={() => {
          console.log('Button clicked!');
          setEnabledThumbsUp(!enabledThumbsUp);
        }}
        icon="thumbsup"
        fill={fillThumbsUp}
        color={color}
        enabled={enabledThumbsUp}
      />
    </div>
  );
};

export default App;
