import SectionTitle from "../../shared/SectionTitle";
import Link from 'next/link'
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section" id="club">
            <SectionTitle title={"Host Club"}/>
            <div className="flex flex-col gap-12 md:flex-row items-center md:justify-between">
                
                <img src="/ingeniumsLogo.jpg" alt="ingeniums" className="rounded-full h-64 w-64"/>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-ingehack-white text-xl lg:text-2xl text-center md:text-left">
                    Ingeniums is a group of students from the Highest Institute of computer science of Sidi Bel Abbes who aspires to create a dynamic environment between students, have enriched exchanges and promote the culture of sharing. And this in an atmosphere of positivity and creativity.
                    </p>
                    <div className="flex gap-8 items-center">
                        <Link href="https://www.facebook.com/ingeniums">
                            <a><Image height={48} width={48} className="cursor-pointer" src="/facebook.png" alt="facebook" /></a>
                        </Link>
                        <Link href="https://www.instagram.com/ingeniums22/">
                            <a><Image height={48} width={48} className="cursor-pointer" src="/instagram.png" alt="instagram" /></a>
                        </Link>
                        <Link href="https://discord.gg/wcFRTCPp5n">
                            <a><Image height={48} width={48} className="cursor-pointer" src="/discord.png" alt="discord" /></a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index