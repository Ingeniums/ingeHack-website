import Counter from './Counter'
import style from '../styles/hero.module.css'
const Hero = () => {
    
    return (
        <section className="h-full">
            
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col">
                        <h1 className={`font-Rubik text-ingehack-green text-[3.5rem] sm:text-[7rem] lg:text-[10rem] ${style.glitchedTxt}`}>Ingehack</h1>
                    <div className="flex justify-between items-center text-ingehack-white">
                        <h3>CTF Competition</h3>
                        <h3>3rd Edition</h3>
                    </div>
                </div>

                <div className="text-ingehack-white text-xl lg:text-2xl">
                    <h3>June XX-XX, 2022</h3>
                    <p>Exact adress, Oran</p>
                </div>

                <Counter countDownLimit={1653724800000}/> 
            </div>
        </section>
    )
}

export default Hero;