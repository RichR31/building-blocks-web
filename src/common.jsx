function monoWords(mono){
    const arr = []
    mono.forEach((colorArr,index)=> {
        colorArr.forEach(word=>{
            arr.push(<p key={"rm-p"+word+"-"+index} className={"word-left color-"+index}>{word}</p>)
        })
    });

    return arr;
}



function rainbowWords(rainbow){
    const arr = []
    rainbow.forEach((word)=> {
        const letters = [...word["word"]];//rename letters instead of color (in the json)
        const colors = [...word["colors"]];
        const spans =[];
        letters.forEach((letter, index)=>{
            spans.push(<span key={"r-span-"+word+"-"+letter+"-"+index} className={"color-"+colors[index]}>{letter}</span>)
        })
        arr.push(<p key={"rr-p-"+letters.toString()} className='word-right'>{spans}</p>);
    });

    return arr;
}

export {monoWords, rainbowWords};