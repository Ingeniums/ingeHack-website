import {useState, useEffect} from 'react'
import {getRemainingTime} from '../utils/countDownTimer'
const Counter = ({countDownLimit}) => {
    const [isTimeOver, setIsTimverOver] = useState(false)
    const defaultRemainingTime = {
        seconds:'00',
        minutes:'00',
        hours:'00',
        days:'00'
    }
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const timer = setInterval(() => {
            updateRemainingTime(countDownLimit)

        }, 1000)

        return () => clearInterval(timer)
    }, [countDownLimit])
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTime(countdown))
        if(parseInt(remainingTime.days + remainingTime.hours + remainingTime.minutes + remainingTime.seconds) == 0) {
            setIsTimverOver(true)
        }
    }
    return (
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-12 lg:gap-24 text-center ">
            {isTimeOver ? (<>
                <div className="count-card">
                <span className="countdown font-mono text-7xl">
                    <span className="text-ingehack-green">{remainingTime.days}</span>
                </span>
                Days
            </div>     
            <div className="count-card">
                <span className="countdown font-mono text-7xl">
                    <span className="text-ingehack-green">{remainingTime.hours}</span>
                </span>
                Hours
            </div>     
            <div className="count-card">
                <span className="countdown font-mono text-7xl">
                    <span className="text-ingehack-green">{remainingTime.minutes}</span>
                </span>
                Mins
            </div>     
            <div className="count-card">
                <span className="countdown font-mono text-7xl">
                    <span className="text-ingehack-green">{remainingTime.seconds}</span>
                </span>
                Secs
            </div> 
            </>
            
            
            )  : (<h3 className="text-5xl mt-24 lg:mt-0 text-ingehack-green">Time UP! See you next year :)</h3> )}
            
             
        </div>
    )
}

export default Counter