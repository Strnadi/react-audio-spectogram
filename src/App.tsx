import SpectrogramSurfer from "./components/SpectrogramSurfer";
import './App.css'

import sxx_backward from "./assets/backward.json";
import sxx_bed from "./assets/bed.json";
import sxx_bird from "./assets/bird.json";
import sxx_cat from "./assets/cat.json";
import sxx_dog from "./assets/dog.json";
import sxx_down from "./assets/down.json";
import sxx_eight from "./assets/eight.json";

import src_backward from "./assets/backward.wav";
import src_bed from "./assets/bed.wav";
import src_bird from "./assets/bird.wav";
import src_cat from "./assets/cat.wav";
import src_dog from "./assets/dog.wav";
import src_down from "./assets/down.wav";
import src_eight from "./assets/eight.wav";

const data = [
  {
    key: "backward",
    sxx: sxx_backward,
    src: src_backward
  },
  {
    key: "bed",
    sxx: sxx_bed,
    src: src_bed
  },
  {
    key: "bird",
    sxx: sxx_bird,
    src: src_bird
  },
  {
    key: "cat",
    sxx: sxx_cat,
    src: src_cat
  },
  {
    key: "dog",
    sxx: sxx_dog,
    src: src_dog
  },
  {
    key: "down",
    sxx: sxx_down,
    src: src_down
  },
  {
    key: "eight",
    sxx: sxx_eight,
    src: src_eight
  }
]

function App() {

  return (
    <div>
      {data.map(({ key, sxx, src }) => (
        <div style={{ marginTop: 40, marginLeft: 'auto', marginRight: 'auto', width: 400 }}>
          <SpectrogramSurfer
            key={key}
            sxx={sxx}
            src={src}
            width={400}
            specHeight={150}
            navHeight={20}
          />
        </div >
      ))}
    </div >
  )
}

export default App
