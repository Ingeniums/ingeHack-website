import LeftAgendaCard from "./LeftAgendaCard";
import RightAgendaCard from "./RightAgendaCard";
import SectionTitle from "../../shared/SectionTitle";

const Index = () => {

    return (
        <section className="hidden" id="agenda">
            <SectionTitle title={"Agenda"}/>
            <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
            >
              <LeftAgendaCard title={"Day 1"} content={"Opening ceremony (13:00)"} isAnimated={true}/>
              <RightAgendaCard title={"Day 1"} content={"First conference"} isAnimated={false}/>
              <LeftAgendaCard title={"Day 1"} content={"Coffee break"} isAnimated={false}/>
              <RightAgendaCard title={"Day 1"} content={"Second conference"} isAnimated={false}/>
              <LeftAgendaCard title={"Day 1"} content={"CTF start"} isAnimated={false}/>
              <RightAgendaCard title={"Day 1"} content={"Dinner"} isAnimated={false}/>
              <LeftAgendaCard title={"Day 2"} content={"Breakfast"} isAnimated={true}/>
              <RightAgendaCard title={"Day 2"} content={"Lunch"} isAnimated={false}/>
              <LeftAgendaCard title={"Day 2"} content={"coffee break"} isAnimated={false}/>
              <RightAgendaCard title={"Day 2"} content={"CTF end (19:00)"} isAnimated={false}/>
              <LeftAgendaCard title={"Day 2"} content={"Closing ceremony and awards"} isAnimated={false}/>
          </div>
        </section>
    )
}

export default Index;
