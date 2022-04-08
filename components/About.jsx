const About = () => {
    return (
        <section className="container flex flex-col gap-12 py-12 lg:gap-16">
            <div className="relative">
                <h2 className="text-center text-6xl text-ingehack-green mb-4">About</h2>
                <div className="h-1 w-10 bg-ingehack-green absolute bottom-0 left-[48%]"></div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
                <p className="text-ingehack-white flex-1 text-xl text-center md:text-2xl lg:text-left lg:text-3xl">
                IngeHack is one of the greatest Ingnenium’s events, it's a CTF (Capture The Flag) competition that brings computer and information security geeks together in one place to have an amazing weekend taking on challenges, It also includes different conferences, presented by doctors and professors
                </p>
                <img className="w-full flex-1" src="/ingehack-about.jpeg" alt="CTF photo" />
            </div>
        </section>
    )
}

export default About;