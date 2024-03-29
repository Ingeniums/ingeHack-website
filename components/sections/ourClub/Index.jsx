import SectionTitle from "../../shared/SectionTitle";
import Image from "next/image";
const Index = () => {
  const socialLinks = [
    {
      iconSrc: "/facebook.png",
      url: "https://www.facebook.com/ingeniums",
    },
    {
      iconSrc: "/instagram.png",
      url: "https://www.instagram.com/ingeniums22/",
    },
    {
      iconSrc: "/discord.png",
      url: "https://discord.gg/wcFRTCPp5n",
    },
  ];
  return (
    <section className="section" id="club">
      <SectionTitle title={"Host Club"} />
      <div className="flex flex-col gap-12 md:flex-row items-center md:justify-between">
        <img
          src="/ingeniumsLogo.jpg"
          alt="ingeniums"
          className="rounded-full h-64 w-64"
        />
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-ingehack-white text-xl lg:text-2xl text-center md:text-left font-NeuHaasRegular">
            Founded in 2017, Ingeniums is a scientific and cultural club that
            aspires to create a dynamic and lively environment between students,
            aiming to promote enriched exchanges, creativity, and the sharing of
            cultures.
          </p>
          <div className="flex gap-8 items-center">
            {socialLinks.map((link) => {
              return (
                <a key={link.url} href={link.url} target="__blank">
                  <Image
                    height={48}
                    width={48}
                    className="cursor-pointer"
                    src={link.iconSrc}
                    alt="facebook"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
