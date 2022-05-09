import Image from 'next/image'
const Index = () => {
    return (
        <footer className="bg-ingehack-gray">
            <div className="container  flex flex-col  gap-4 py-4 text-ingehack-white">
                <div className="flex flex-col gap-8  md:flex-row md:justify-between md:items-center">
                    <div className="flex gap-2 items-center">
                        <Image src="/esiSBALogo.jpg" height={96} width={96} alt="Esi sba"/>
                        <div className="flex flex-col gap-2">
                            <p className="font-NeuHaasBold">Higher school of computer science - 08 May 1945</p>
                            <p className="font-NeuHaasRegular">Sidi Bel Abbes 22016, Algeria</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-NeuHaasBold">ingeniums@esi-sba.dz</p>
                        <p className="font-NeuHaasRegular">+213666235548</p>
                    </div>
                </div>

                <div className="text-center font-NeuHaasBold">
                    <p>&copy; IngeHack 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Index;