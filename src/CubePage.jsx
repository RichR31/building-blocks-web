import React, { useState } from 'react';
import { monoWords, rainbowWords } from './common';
import CubeScene from './CubeScene';

function CubePage(props) {
    const data = props.data;
    const rainbowData = data["rainbow"];
    const monoData = data["mono"];

    const [isMonoToggled, setIsMonoToggled] = useState(false); // Initial state
    const [isRainbowToggled, setIsRainbowToggled] = useState(false); // Initial state

    const [rainbow_arr,setRainbowArr] = useState(rainbowWords(rainbowData["words"]));
    const [mono_arr,setMonoArr] = useState(monoWords(monoData["words"]));

    const toggleMono = () => {
    setIsMonoToggled(!isMonoToggled);
    };

    const toggleRainbow = () => {
    setIsRainbowToggled(!isRainbowToggled);
    };

    return (
    <div className='big-container'>
        <CubeScene indices={data["indices"]}/>
        <div className="side-panel left-panel">
            <button id="mono-btn" className={"panel-btn "+(isMonoToggled ? "btn-toggled" :"btn-untoggled")} onClick={() => toggleMono()}>Mono</button>
            <div id="mono-words" className={isMonoToggled? "word-container": "hidden"}>
                {mono_arr}
            </div>
        </div>
        <span id="left-extra" >{monoData["total"]}</span>


        <div className="side-panel right-panel">
            <button id="rainbow-btn" className={"panel-btn "+(isRainbowToggled ? "btn-toggled" :"btn-untoggled")} onClick={() => toggleRainbow()}>Rainbow</button>
            <div id="rainbow-words" className={isRainbowToggled? "word-container": "hidden"}>
                {rainbow_arr}
            </div>
        </div>
        <span id="right-extra" >{rainbowData["total"]}</span>
    </div>
    );
}

export default CubePage;