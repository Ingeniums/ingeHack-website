import LeftAgendaCard from "./LeftAgendaCard";
import RightAgendaCard from "./RightAgendaCard";
import SectionTitle from "./SectionTitle";

const Agenda = () => {
    return (
        <section className="section">
            <SectionTitle title={"Agenda"}/>
            <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
            >
              <LeftAgendaCard title={"Day1"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={true}/>
              <RightAgendaCard title={"Day1"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={false}/>
              <LeftAgendaCard title={"Day1"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={false}/>
              <RightAgendaCard title={"Day2"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={true}/>

              <LeftAgendaCard title={"Day2"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={false}/>
              <RightAgendaCard title={"Day2"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={false}/>
              <LeftAgendaCard title={"Day3"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={true}/>

              <RightAgendaCard title={"Day3"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vitae, facilis"} isAnimated={false}/>
          </div>
        </section>
    )
}

export default Agenda;