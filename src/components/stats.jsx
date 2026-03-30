const Stats = () => {
  return (
    <div className="bg-[#9538E2] text-white py-16 rounded-[40px] flex flex-col md:flex-row justify-around my-10 gap-8">
      <div className="text-center w-full border-r border-white/20 last:border-none">
        <h2 className="text-5xl font-bold">50K+</h2>
        <p className="opacity-80 mt-2">Active Users</p>
      </div>
      <div className="text-center w-full border-r border-white/20 last:border-none">
        <h2 className="text-5xl font-bold">200+</h2>
        <p className="opacity-80 mt-2">Premium Tools</p>
      </div>
      <div className="text-center w-full">
        <h2 className="text-5xl font-bold">4.9</h2>
        <p className="opacity-80 mt-2">Rating</p>
      </div>
    </div>
  );
};
export default Stats;
