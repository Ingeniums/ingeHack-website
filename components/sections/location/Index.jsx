import SectionTitle from "../../shared/SectionTitle";
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section " id="partners">
            <SectionTitle title={"Our partners"}/>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
                <div className="flex-1">
                    <Image height={450} width={500} src="/shellmates.png" className="cursor-pointer " alt="CTF photo" />
                </div>
                <p className="text-ingehack-white flex-1 text-xl text-center md:text-2xl lg:text-left lg:text-3xl font-NeuHaasRegular">
                Shellmates Club is a cyber security students club in ESI Algiers. By organizing multiple activities and competitions, their aim is to familiarize the cybersecurity culture in Algeria under the slogan: Where there is a shell, there is a way 
                </p>
            </div>
            
        </section>
    )
}

export default Index;
