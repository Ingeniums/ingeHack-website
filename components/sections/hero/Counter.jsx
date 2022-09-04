import {useState, useEffect} from 'react'
import {getRemainingTime} from '../../../utils/countDownTimer'
const Counter = ({countDownLimit}) => {
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
    }
    return (
        <div className="font-DoctorGlitch flex flex-col gap-12 sm:flex-row sm:gap-12 lg:gap-24 text-center hidden">      
            <div className="count-card">
                <span className="counter">{remainingTime.days}</span>
                Days
            </div>
            <div className="count-card">
                <span className="counter">{remainingTime.hours}</span>
                Hours
            </div>
            <div className="count-card">
                <span className="counter">{remainingTime.minutes}</span>
                Mins
            </div>
            <div className="count-card">
                <span className="counter">{remainingTime.seconds}</span>
                Secs
            </div>
        </div>
    )
}

export default Counter
