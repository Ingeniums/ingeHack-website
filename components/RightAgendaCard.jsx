
const RightAgendaCard = ({title, content, isAnimated}) => {
    return (
        <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-ingehack-green pointer-events-none"></div>
                </div>
                <div
                  className={`${isAnimated && 'animate-ping'} w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-ingehack-green shadow`}
                ></div>
              </div>
              <div
                className="bg-ingehack-green col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="leading-tight text-justify">
                  {content}.
                </p>
              </div>
        </div>
    )
}
export default RightAgendaCard