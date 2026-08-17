const About = () => {
  return (
    <section className="pt-15 flex flex-col items-center w-full pb-[10%]">
      <h1 className="text-3xl text-black font-orbitron font-[600] text-center pb-9">
        About Innotech
      </h1>
      <section className="flex px-[5%] gap-[10%]">
        <div className="font-geist w-[50%] flex flex-col gap-5 pr-10">
          <h1 className="text-3xl font-bold text-gray-900">Building a Community of Builders</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Innotech is a vibrant tech community dedicated to fostering innovation and collaboration. We host weekly meetups, skill-building workshops, and collaborative open-source projects. 
            <br/><br/>
            Whether you are a seasoned developer, a budding designer, or just tech-curious, our club provides the perfect environment to learn, build, and connect with like-minded peers.
          </p>
          <button className="mt-2 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-geist text-lg font-bold rounded-full transition-all duration-300 w-max shadow-md">
            Learn More
          </button>
        </div>
        <div className="relative w-[50%]">
          <img src="/images/about.svg" alt="" />
          <img
            src="/images/About-img.svg"
            alt=""
            className="absolute bottom-[17%] right-8 w-[40%]"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
