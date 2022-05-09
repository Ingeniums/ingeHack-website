
const SectionTitle = ({title}) => {
    return (
        <div className="relative">
            <h2 className="text-center text-6xl text-ingehack-green mb-4 font-Matrix">{title}</h2>
            <div className="h-1 w-10 bg-ingehack-green absolute bottom-0 left-[48%]"></div>
        </div>
    )
}

export default SectionTitle