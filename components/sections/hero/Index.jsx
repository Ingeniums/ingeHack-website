import Counter from "./Counter";
import style from "../../../styles/hero.module.css";
const Index = () => {
  return (
    <section className="section" id="home">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col">
          <h1
            className={`font-DoctorGlitch mt-8 uppercase text-ingehack-green text-[3rem] sm:text-[5rem] lg:text-[8rem] ${style.glitchedTxt}`}
          >
            Ingehack
          </h1>
          <div className="flex justify-between items-center text-ingehack-white font-NeuHaasBold -mt-4 md:-mt-6 lg:-mt-10">
            <h3>CTF Competition</h3>
            <h3>3rd Edition</h3>
          </div>
        </div>
        <div className="text-ingehack-white text-xl lg:text-2xl font-NeuHaasBold mt-2 lg:mt-6">
          <h3>October 14th, 2022</h3>
          <p className="hidden">Exact adress, Oran</p>
        </div>

        <Counter countDownLimit={1665748800000} />
      </div>
    </section>
  );
};

export default Index;
