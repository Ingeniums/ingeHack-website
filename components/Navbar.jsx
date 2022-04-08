import {useState, useEffect} from 'react'

const Navbar = () => {
    
    const [navbarToggle, setNavbarToggle] = useState(false)
    return (
        <header className="px-12 py-4">
            <div className="flex flex-col gap-4 lg:gap-0">
                <div className="flex justify-between items-center ">
                    <div className="text-3xl text-ingehack-white">
                        IngeHack
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        <a href="#home" className="nav-item">Home</a>
                        <a href="#about" className="nav-item">About</a>
                        <a href="#agenda" className="nav-item">Agenda</a>
                        <a href="#speakers" className="nav-item">Speakers</a>
                        <a href="#sponsors" className="nav-item">Sponsors</a>
                        <a href="#club" className="nav-item">Our Club</a>
                        <button type="button" className="bg-ingehack-green rounded-full py-2 px-8">Register</button>
                    </nav>

                    <div onClick={() => setNavbarToggle(!navbarToggle)} className="flex flex-col gap-1 cursor-pointer lg:hidden">
                        <div className="nav-burger"></div>
                        <div className="nav-burger"></div>
                        <div className="nav-burger"></div>
                    </div>
                </div>
                <div className="rounded py-4">
                    { navbarToggle && (<nav className="flex lg:hidden flex-col items-center gap-6 text-xl">
                        <a href="#home" className="nav-item">Home</a>
                        <a href="#about" className="nav-item">About</a>
                        <a href="#agenda" className="nav-item">Agenda</a>
                        <a href="#speakers" className="nav-item">Speakers</a>
                        <a href="#sponsors" className="nav-item">Sponsors</a>
                        <a href="#club" className="nav-item">Our Club</a>
                        <button type="button" className="bg-ingehack-green rounded-full py-2 px-8">Register</button>
                    </nav>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar;