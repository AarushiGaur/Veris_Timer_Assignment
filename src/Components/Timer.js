import React, { useState, useEffect } from 'react'

const Timer = () => {


    const [duration, setDuration] = useState(180);
    const [timerOn, setTimerOn] = useState(false);


    useEffect(() => {
        if (timerOn && duration > 0) {
            setDuration(duration)
            const intervalId = setInterval(() => {
                setDuration(duration - 1)
            }, 1000)

            return () => clearInterval(intervalId)
        }
    }, [duration, timerOn])




    const start = () => {
        setTimerOn(true);
    };



    const pause = () => {
        setTimerOn(false);
    };

    const reset = () => {
        setTimerOn(false);
        setDuration(180);
    };





    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return (
        <div className="container">
            <div className="time">
                <span className="minute">  {('0' + minutes).slice(-2)} : {('0' + seconds).slice(-2)}</span>
            </div>
            <div className="buttons">
                <button color="primary" onClick={() => start()}>Start</button>

                {timerOn ?
                    <button color="primary" onClick={() => pause()}>Pause</button>
                    : <button color="primary" onClick={() => start()}>Resume</button>
                }

                <button color="secondary" onClick={() => reset()}>Reset</button>
            </div>
        </div>
    );
}

export default Timer