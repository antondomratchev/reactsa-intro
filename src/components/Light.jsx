import React from 'react'

const lightOff = new URL('../images/light-off.svg', import.meta.url);
const down = new URL('../images/down.svg', import.meta.url);
const up = new URL('../images/up.svg', import.meta.url);
const lightOn = new URL('../images/light-on.svg', import.meta.url);

export const Light = () => {
    return (
        <div>
            <h1>Front Porch Light</h1>
            <div id="light">
                <div class="meter">
                    <span>
                    0%
                    </span>
                </div>

                <button>
                    <img src={lightOff} />
                </button>

                <button>
                    <img src={down} />
                </button>

                <button>
                    <img src={up} />
                </button>

                <button>
                    <img src={lightOn} />
                </button>
            </div>
        </div>
    )
}