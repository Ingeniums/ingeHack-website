import LeftAgendaCard from "./LeftAgendaCard";
import RightAgendaCard from "./RightAgendaCard";
import SectionTitle from "../../shared/SectionTitle";

const Index = () => {

    return (
        <section className="" id="agenda">
            <SectionTitle title={"Agenda"}/>
            <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
            >
              <LeftAgendaCard title={"14/10"} content={"Reception"} time={"08:30"} isAnimated={true}/>
              <RightAgendaCard title={"14/10"} content={"Opening Ceremony"} time={"10:00"} isAnimated={false}/>
              <LeftAgendaCard title={"14/10"} content={"1st conference"} time={"11:00"} isAnimated={false}/>
              <RightAgendaCard title={"14/10"} content={"2nd conference"} time={"11:30"} isAnimated={false}/>
              <LeftAgendaCard title={"14/10"} content={"Jumu3a prayer + Lunch break"} time={"12:00"} isAnimated={false}/>
              <RightAgendaCard title={"14/10"} content={"CTF start"} time={"14:30"} isAnimated={false}/>
              <LeftAgendaCard title={"14/10"} content={"Dinner"} time={"21:00"} isAnimated={false}/>
              <RightAgendaCard title={"15/10"} content={"Breakfast"} time={"09:00"} isAnimated={false}/>
              <LeftAgendaCard title={"15/10"} content={"Lunch"} time={"12:00"} isAnimated={false}/>
              <RightAgendaCard title={"15/10"} content={"CTF end )"} time={"14:30"} isAnimated={false}/>
              <LeftAgendaCard title={"15/10"} content={"Closing ceremony and awards"} time={"15:00"} isAnimated={false}/>
          </div>
        </section>
    )
}

export default Index;
