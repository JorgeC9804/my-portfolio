import React, { useRef, useState, useEffect } from "react";
import TwoFeet from '../../audio/TwoFeet.mp3'
import { 
    MoreOutlined,  
    SoundOutlined, 
    PauseOutlined,
    CaretRightOutlined,
    StopOutlined } from '@ant-design/icons';

const Sound = ({change, setAdjust, adjust}) => {   

    const audio = useRef(null);
    const [options, setOptions] = useState(false);
    const [muted, setMuted] = useState(false);
    const [play, setPlay] = useState(true);
    const [pos, setPos] = useState('');
    const [active, setActive] = useState(false);
    const [move, setMove] = useState('');
    const [downUp, setDownUp] = useState('position');

    const handleOptions = () => {
        setOptions(!options);
        setAdjust('predeterminado width-1');
    }
    const handlePlay = () => {
        setPlay(!play);
        play ? audio.current.play() : audio.current.pause()
    }
    const handleMuted = () => {
        setMuted(!muted);
    }
    const handleActive = () => {
        setActive(!active);
    }
    const handleMove = (response) => {
        switch(response) {
            case 'up': 
                setMove(active ? 'move-up-fixed' : 'move-up-absolute');
                setDownUp('position');
                setPos('position');
                break;
            case 'down':
                setMove(active ? 'move-down-fixed' : 'move-down-absolute');
                setDownUp('position-down');
                setPos('position-down');
                break;
            default: 
                return null;
        }
    }
    useEffect( () => {
        options ?
            setTimeout(() => {
                setPos(downUp);
            }, 600)
            : setPos('none');  
    }, [options, downUp] )
    
    return (
        <>
            {
            <section className={change ? 'none' : undefined}>
                <div className={active ? `active fixed` : `active absolute`}>
                    <div className={move}>
                        <div className={options ? 'predeterminado width-2' : adjust}>
                            <button className='options'
                                onClick={handleOptions}
                            >
                                <MoreOutlined />
                            </button>
                            <div className={options ? pos : "none"}>
                                <div className="row">
                                    {
                                        active ?
                                        <div className="adjust-blocked">
                                            <div className="encapsulate">
                                                <div className="up"></div>
                                                <div className="blocked"><StopOutlined /></div>
                                                <div className="line-position"></div>
                                            </div>
                                        </div> :
                                        <button className="adjust pointer" onClick={() => handleMove('up')}>
                                            <div className="encapsulate">
                                                <div className="up"></div>
                                                <div className="line-position"></div>
                                            </div>
                                        </button>
                                    }
                                    <div className="adjust" style={{border:'none'}}></div>
                                </div>
                                <div className="row">
                                    {
                                        active ?
                                        <div className="adjust-blocked">
                                            <div className="encapsulate">
                                                <div className="down"></div>
                                                <div className="blocked"><StopOutlined /></div>
                                                <div className="line-position"></div>
                                            </div> 
                                        </div> :
                                        <button className="adjust pointer" onClick={() => handleMove('down')}>
                                            <div className="encapsulate">
                                                <div className="down"></div>
                                                <div className="line-position"></div>
                                            </div> 
                                        </button>
                                    }
                                    <div className="adjust">
                                        <button className={active ? "btn-switch switch-active" : "btn-switch switch-desactive"} onClick={handleActive}>
                                            <input type="checkbox" name="checkboxName" className={active ? "switch" : "switch circle-desactive"}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <audio controls muted={muted} ref={audio} src={TwoFeet} type="audio/mpeg" style={{display:'none'}} />
                            <button onClick={handlePlay} className=" function play">
                                {
                                    play ?                         
                                    <CaretRightOutlined /> :
                                    <PauseOutlined /> 
                                }         
                            </button>
                            <button onClick={handleMuted} className="function muted">
                                <SoundOutlined />
                            </button>  
                        </div>
                    </div>
                </div>
            </section>
            }
        </>
    )
};

export default Sound;