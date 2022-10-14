import SectionTitle from "../../shared/SectionTitle";
import Image from 'next/image'
const Index = () => {
    return (
        <section className="section " id="partners">
            <SectionTitle title={"Location"}/>
 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6265162176887!2d-0.5364173999999999!3d35.735402799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e7cb2d8a1cd23%3A0xd1df821f50020bd!2sUniversity%20of%20Oran%202%20Mohamed%20Ben%20Ahmed!5e0!3m2!1sen!2sdz!4v1665731291576!5m2!1sen!2sdz" loading="lazy" height='800' referrerpolicy="no-referrer-when-downgrade" ></iframe>

            
        </section>
    )
}

export default Index;
