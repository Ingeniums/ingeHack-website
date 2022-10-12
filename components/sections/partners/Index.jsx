import SectionTitle from "../../shared/SectionTitle";
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section " id="partners">
            <SectionTitle title={"Partners"}/>
            <div className="flex flex-col items-center gap-24 lg:flex-row">
                <div className="flex-1">
                    <Image height={300} width={300} src="/shellmates.png" className="cursor-pointer left-0" alt="CTF photo" />
                </div>
                <p className="text-ingehack-white flex-1 text-md text-center md:text-xl lg:text-left lg:text-2xl font-NeuHaasRegular">
                Shellmates Club is a cyber security students club in ESI Algiers. By organizing multiple activities and competitions, their aim is to familiarize the cybersecurity culture in Algeria under the slogan: <i> / * Where there is a shell, there is a way* /</i>

                </p>
            </div>
            <div className="flex flex-col items-center gap-24 lg:flex-row">
                <p className="text-ingehack-white flex-1 text-md text-center md:text-xl lg:text-left lg:text-2xl font-NeuHaasRegular">
                Technocrates is a group of technology enthusiasts from Medea which aims to spread the culture of technology and share knowledge about the different technical fields through events and activities.
                </p>
                <div className="flex-1">
                    <Image height={300} width={300} src="/technocrates.png" className="cursor-pointer" alt="CTF photo" />
                </div>
            </div>
        </section>
    )
}

export default Index;
