const SpeakerCard = ({img, name, title}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={img} alt="name" className="w-full cursor-pointer"/>
            <div className="flex flex-col">
                <h3 className="text-2xl text-ingehack-green">{name}</h3>
                <p className="text-ingehack-white text-lg">{title}</p>
            </div>
        </div>
    )
}

export default SpeakerCard;