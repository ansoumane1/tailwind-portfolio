import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 item-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="mt-8 text-slate-600 leading-loose ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            sequi libero aperiam maxime, architecto voluptas facere dolor earum
            alias consectetur labore amet minima necessitatibus adipisci
            similique deserunt impedit sunt. Harum.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
