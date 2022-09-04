import {useState, useEffect} from 'react'

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleClick = () => {
        if(navbarToggle) setNavbarToggle(false)
    }
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`py-4 fixed top-0 ${scrollPosition >0 && 'border-b-2 border-ingehack-green'} left-0 w-full z-10 bg-ingehack-black transition-all duration-500 ${navbarToggle ? 'h-full': 'h-16'}`}>
            <div className="container flex flex-col gap-4 lgborder-b-2 border-ingehack-green:gap-0">
                <div className="flex justify-between items-center ">
                    <div className="text-2xl text-ingehack-green font-DoctorGlitch uppercase">
                        IngeHack
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 font-NeuHaasBold">
                        <a href="#home" onClick={handleClick} className="nav-item">Home</a>
                        <a href="#about" onClick={handleClick} className="nav-item">About</a>
                        <a href="#agenda" onClick={handleClick} className="nav-item hidden">Agenda</a>
                        <a href="#speakers" onClick={handleClick} className="nav-item hidden">Speakers</a>
                        <a href="#sponsors" onClick={handleClick} className="nav-item hidden">Sponsors</a>
                        <a href="#club" onClick={handleClick} className="nav-item">Our Club</a>
                        <button type="button" className="hidden bg-ingehack-green rounded-full py-2 px-8">Register</button>
                    </nav>

                    <div onClick={() => setNavbarToggle(!navbarToggle)} className="flex flex-col gap-1 cursor-pointer lg:hidden">
                        <div className="nav-burger"></div>
                        <div className="nav-burger"></div>
                        <div className="nav-burger"></div>
                    </div>
                </div>
                <div className="rounded py-4">
                    { navbarToggle && (<nav className="flex lg:hidden flex-col items-center gap-6 text-xl font-NeuHaasBold">
                        <a href="#home" onClick={handleClick} className="nav-item">Home</a>
                        <a href="#about" onClick={handleClick} className="nav-item">About</a>
                        <a href="#agenda" onClick={handleClick} className="nav-item hidden">Agenda</a>
                        <a href="#speakers" onClick={handleClick} className="nav-item hidden">Speakers</a>
                        <a href="#sponsors" onClick={handleClick} className="nav-item hidden">Sponsors</a>
                        <a href="#club" onClick={handleClick} className="nav-item">Our Club</a>
                        <button type="button" className="hidden bg-ingehack-green rounded-full py-2 px-8">Register</button>
                    </nav>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar;
