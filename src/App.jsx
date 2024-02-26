import React, { useEffect, useState } from 'react';

const soundsGroup = [
    {
        keyCode: 81,
        key: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        key: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        key: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        key: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        key: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        key: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        key: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        key: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        key: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

const KeyboardKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
    const handleKeydown = (e) => {
        if(keyCode === e.keyCode) {
            play(key, id);
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
    }, [])
    return (
        <button value="test" id={id} className="drum-pad" onClick={() => play(key, id)}>
            <audio className="clip" src={url} id={key} />
            {key}
        </button>
    );
}

const Keyboard = ({ sounds, play, power, deactivateAudio }) =>  (
    <div className="keyboard">
        {sounds.map((sound) => <KeyboardKey key={sound.key} sound={sound} play={play} />)}
    </div>
);

const DumControle = ({ stop, name, power, volume, handleVolumeChange }) => (
    <div className="controle">
        <button onClick={stop}>Power {power ? 'OFF' : 'ON'}</button>
        <h2>Volume: %{Math.round(volume * 100)}</h2>
        <input
            max="1"
            min="0"
            step='0.01'
            type="range"
            value={volume}
            onChange={handleVolumeChange}
        />
        <h2 id="display" >{name}</h2>
    </div>
);

const App = () => {
    const [power, setPower] = useState(true);
    const [volume, setVolume] = useState(1);
    const [soundName, setSoundName] = useState("");
    const styleActiveKey = (key) => {
        key.parentElement.style.backgroundColor = "#000000"
        key.parentElement.style.color = "#ffffff"
    }

    const desactivateAudio = (audio) => {
        setTimeout(() => {
            audio.parentElement.style.backgroundColor = "#ffffff"
            audio.parentElement.style.color = "#000000"
        }, 300)
    }

    const play = (key, sound) => {
        if (!power) {
            return;
        }
        setSoundName(sound.id);
        const audio = document.getElementById(key);
        audio.volume = volume;
        styleActiveKey(audio);
        audio.currentTime = 0;
        audio.play();
        desactivateAudio(audio);
    }

    const stop = () => {
        setPower(!power)
    }

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    }

    return (
        <div id="drum-machine">
            <h1>DRUM POWER MACHINE</h1>
            <div className="wrapper">
                <Keyboard sounds={soundsGroup} play={play} power={power} />
                <DumControle
                    stop={stop}
                    power={power}
                    volume={volume}
                    name={soundName || "Heater Kit"}
                    handleVolumeChange={handleVolumeChange}
                />
            </div>
        </div>
    )
};

export default App;

