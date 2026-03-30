import bannerImg from '../assets/bannerImage.png';

const Banner = () => {
  return (
    <div className="hero py-10 lg:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={bannerImg}
          className="max-w-full lg:max-w-md rounded-lg"
          alt="Banner"
        />
        <div>
          <div className="badge badge-ghost text-[#9538E2] mb-4">
            ● New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 text-lg max-w-lg">
            Access premium AI tools, design assets, and productivity
            software—all in one place.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary bg-[#9538E2] rounded-full px-10 border-none">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full px-10">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
