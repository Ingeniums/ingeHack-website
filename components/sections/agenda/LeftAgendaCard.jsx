
const LeftAgendaCard = ({title, content, isAnimated}) => {
    return (
        <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-ingehack-green col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1 font-NeuHaasBold">{title}</h3>
                <p className="leading-tight text-justify font-NeuHaasRegular">
                  {content}
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-ingehack-green pointer-events-none"></div>
                </div>
                <div
                  className={`${isAnimated && 'animate-ping'} w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-ingehack-green shadow`}
                ></div>
              </div>
        </div>
    )
}

export default LeftAgendaCard;