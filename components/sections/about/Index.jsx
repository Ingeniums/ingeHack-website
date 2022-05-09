import SectionTitle from "../../shared/SectionTitle";
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section" id="about">
            <SectionTitle title={"About"}/>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
                <p className="text-ingehack-white flex-1 text-xl text-center md:text-2xl lg:text-left lg:text-3xl font-NeuHaasRegular">
                IngeHack is one of the greatest Ingnenium’s events, its a CTF (Capture The Flag) competition that brings computer and information security geeks together in one place to have an amazing weekend taking on challenges, It also includes different conferences, presented by doctors and professors
                </p>
                <div className="flex-1">
                    <Image height={350} width={600} src="/ingehack-about.jpeg" className="cursor-pointer" alt="CTF photo" />
                </div>
            </div>
        </section>
    )
}

export default Index;