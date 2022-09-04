import SectionTitle from "../../shared/SectionTitle";
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section " id="about">
            <SectionTitle title={"About"}/>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
                <p className="text-ingehack-white flex-1 text-xl text-center md:text-2xl lg:text-left lg:text-3xl font-NeuHaasRegular">
                IngeHack is a largescale CTF (Capture The Flag) competition that brings computer and information security enthusiasts together for 24 hours of cybersecurity challenges.
                </p>
                <div className="flex-1">
                    <Image height={450} width={500} src="/ingehack_about.png" className="cursor-pointer " alt="CTF photo" />
                </div>
            </div>
        </section>
    )
}

export default Index;
