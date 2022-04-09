import SectionTitle from './SectionTitle'
const OurClub = () => {
    return (
        <section className="section">
            <SectionTitle title={"Host Club"}/>
            <div className="flex flex-col gap-12 md:flex-row items-center md:justify-between">
                <img src="/ingeniumsLogo.jpg" alt="ingeniums" className="rounded-full h-64 w-64"/>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-ingehack-white text-xl lg:text-2xl text-center md:text-left">
                    Ingeniums is a group of students from the Highest Institute of computer science of Sidi Bel Abbes who aspires to create a dynamic environment between students, have enriched exchanges and promote the culture of sharing. And this in an atmosphere of positivity and creativity.
                    </p>
                    <div className="flex gap-8 items-center">
                        <img className="w-12 cursor-pointer" src="facebook.png" alt="facebook" />
                        <img className="w-12 cursor-pointer" src="instagram.png" alt="instagram" />
                        <img className="w-12 cursor-pointer" src="discord.png" alt="discord" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClub