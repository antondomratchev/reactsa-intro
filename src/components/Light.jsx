import React from 'react'

const lightOff = new URL('../images/light-off.svg', import.meta.url);
const down = new URL('../images/down.svg', import.meta.url);
const up = new URL('../images/up.svg', import.meta.url);
const lightOn = new URL('../images/light-on.svg', import.meta.url);

export const Light = () => {
    const [brightness, setBrightness] = React.useState(10)
    const decreaseBrightness = () => { 
        setBrightness((currentBrightness) => {
            if (currentBrightness == 0) {
                return currentBrightness
            }
            return currentBrightness - 10
        }) 
    }
    const increaseBrightness = () => { 
        setBrightness((currentBrightness) => {
            if (currentBrightness == 100) {
                return currentBrightness
            }
            return currentBrightness + 10
        }) 
    }
    return (
        <div>
            <h1>Front Porch Light</h1>
            <div id="light">
                <div className="meter">
                    <span style={{ width: `${brightness}%`}}>
                    {brightness} %
                    </span>
                </div>

                <button onClick={() => { setBrightness(0)}}>
                    <img src={lightOff} />
                </button>

                <button onClick={decreaseBrightness}>
                    <img src={down} />
                </button>

                <button onClick={increaseBrightness}>
                    <img src={up} />
                </button>

                <button onClick={() => { setBrightness(100)}}>
                    <img src={lightOn} />
                </button>
            </div>
        </div>
    )
}