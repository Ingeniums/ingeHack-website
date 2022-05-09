import Image from 'next/image'
const SpeakerCard = ({img, name, title}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Image src={img} alt={name} height={400} width={400} className="cursor-pointer"/>
            <div className="flex flex-col">
                <h3 className="text-2xl text-ingehack-green font-NeuHaasBold">{name}</h3>
                <p className="text-ingehack-white text-lg font-NeuHaasRegular">{title}</p>
            </div>
        </div>
    )
}

export default SpeakerCard;