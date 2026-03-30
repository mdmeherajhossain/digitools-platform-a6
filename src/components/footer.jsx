const Footer = () => {
  return (
    <footer className="mt-20">
      {/* CTA Section */}
      <div className="bg-[#9538E2] rounded-[40px] py-20 px-10 text-center text-white mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn bg-white text-[#9538E2] hover:bg-gray-100 rounded-full px-10 border-none h-14 font-bold">
            Explore Products
          </button>
          <button className="btn btn-outline text-white border-white hover:bg-white/10 rounded-full px-10 h-14 font-bold">
            View Pricing
          </button>
        </div>
        <p className="mt-6 text-white/60 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0b1221] text-white p-16 rounded-t-[60px] -mx-4 md:-mx-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto mb-20">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">Social Links</h4>
            <div className="flex gap-4">
              <span className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-white/20">
                FB
              </span>
              <span className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-white/20">
                TW
              </span>
              <span className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-white/20">
                IN
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between text-gray-500 text-sm max-w-[1440px] mx-auto">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
