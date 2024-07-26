import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import { FaTwitter } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import "./App.css";

function App() {
  return (
    <>
      {/* Navigation error in md */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 lg:px-24 bg-[#3A4026] pb-4 pt-8">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-wrap text-white font-semibold gap-6 md:gap-12 text-sm md:text-lg mt-4 md:mt-0">
          <div className="hover:font-bold pt-2 md:pt-4">Home</div>
          <div className="hover:font-bold pt-2 md:pt-4">About Us</div>
          <div className="hover:font-bold pt-2 md:pt-4">Our Services</div>
          <div className="hover:font-bold pt-2 md:pt-4">Blog</div>
          <div className="hover:font-bold pt-2 md:pt-4">Contact</div>
          <div className="ml-0 md:ml-8 border border-[#C6FF00] rounded-full py-2 px-4 md:py-3 md:px-6">
            Get Started
          </div>
        </div>
      </div>

      {/* Problem in 1024*/}
      <div className="flex flex-col lg:flex-row justify-between px-6 md:px-12 lg:px-24 bg-[#3A4026] py-12 md:py-24">
        <div className="lg:w-2/3">
          <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl work-sans">
            Bringing your
          </div>
          <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl pt-2 work-sans">
            <span className="text-[#C6FF00] playfair-display italic">
              financial{" "}
            </span>
            in line with
          </div>
          <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl work-sans">
            your present reality
          </div>
          <div className="text-white text-lg lg:text-xl mt-8 lg:ml-24 lg:mr-48">
            Establish a foundation of trust with your customers through
            transparency, authenticity, and consistent delivery. Provide expert
            guidance, exceptional support, and a valuable product that makes a
            difference.
          </div>
          <div className="flex gap-4 lg:gap-8 mt-8 lg:ml-24 lg:mt-12">
            <div className="bg-[#C6FF00] rounded-full px-4 py-2 lg:px-6 lg:py-3 font-semibold">
              Get Started
            </div>
            <div className="border border-[#C6FF00] rounded-full px-4 py-2 lg:px-6 lg:py-3 text-white font-semibold">
              Learn More
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <img src={img1} alt="Financial" className="w-full" />
        </div>
      </div>

      {/* Problem in 1024*/}
      <div className="bg-[#868C70]">
        <div className="bg-[#5F6647] mx-6 md:mx-12 lg:mx-24 rounded-b-3xl py-10 lg:py-20">
          <div className="text-center text-white font-semibold text-3xl sm:text-4xl lg:text-5xl work-sans">
            Enabling{" "}
            <span className="text-[#C6FF00] playfair-display italic">
              high-growth{" "}
            </span>
            companies to
          </div>
          <div className="text-center text-white font-semibold text-3xl sm:text-4xl px-4 lg:text-5xl work-sans pb-10 lg:pb-20">
            achieve sustainable scale
          </div>
          <div className="flex flex-col md:flex-row md:justify-between justify-center items-center text-white text-lg lg:text-xl font-bold px-6 md:px-12 lg:px-36">
            <div className="mb-4 md:mb-0">
              <FaTwitter className="text-2xl" />
            </div>
            <div className="flex gap-2 items-center mb-4 md:mb-0">
              <FaVideo className="text-2xl" />
              <span>zoom</span>
            </div>
            <div className="mb-4 md:mb-0">CAIXA</div>
            <div className="font-semibold mb-4 md:mb-0">Google</div>
            <div>CASIO</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-24 py-10 lg:py-20 gap-14">
          <div className="lg:w-1/3">
            <img src={img2} alt="Organizational" className="w-full" />
          </div>
          <div className="lg:w-2/3">
            <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl work-sans">
              Organizational{" "}
              <span className="text-[#C6FF00] playfair-display italic">
                leaders
              </span>{" "}
              to enhance oversight
            </div>
            <div className="text-white text-lg lg:text-xl mt-8 lg:ml-24 lg:mr-48">
              Transparency and authenticity are two key values that can help
              build trust with customers. Transparency means being open and
              honest with customers about how your business operates, the
              products and services you offer, and any potential issues that may
              arise.
            </div>
            <div className="border-2 border-[#C6FF00] rounded-full py-2 px-6 mt-8 w-32 lg:ml-24 text-white font-semibold text-center">
              About Us
            </div>
          </div>
        </div>
      </div>

      {/* Problem in 1024*/}
      <div className="bg-[#7A8066] px-6 md:px-12 lg:px-24 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl work-sans">
              <span className="text-[#C6FF00] playfair-display italic">
                Efficiently{" "}
              </span>
              manage your
            </div>
            <div className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl work-sans">
              planning with solution
            </div>
          </div>
          <div className="pt-8 lg:pt-14">
            <div className="border border-[#C6FF00] rounded-full py-2 px-6 text-white font-semibold text-center w-[120px]">
              See More
            </div>
          </div>
        </div>
        <div className="rounded-3xl my-8 lg:my-14 border border-[#C6FF00] bg-[#3A4026] flex flex-col lg:flex-row justify-between p-8 lg:p-14">
          <div className="lg:w-2/3">
            <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold work-sans">
              <span className="playfair-display italic">Invest </span>{" "}
              management
            </div>
            <div className="text-white text-lg lg:text-xl mt-8 lg:ml-24 lg:mr-48">
              Establish a foundation of trust with your customers through
              transparency, authenticity, and consistent delivery. Provide
              expert guidance, exceptional support, and a valuable product that
              makes a difference.
            </div>
            <div className="bg-[#C6FF00] rounded-full py-2 px-6 font-semibold mt-8 w-36 lg:ml-24 text-center">
              Learn More
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:pl-8">
            <img src={img3} alt="Investment" className="w-full" />
          </div>
        </div>
        <div className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl work-sans mt-8">
          <span className="text-[#C6FF00] playfair-display italic">
            Financial{" "}
          </span>{" "}
          plan
        </div>
        <div className="w-full h-[1px] bg-black my-8"></div>
        <div className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl work-sans mt-8">
          <span className="text-[#C6FF00] playfair-display italic">
            Wealth{" "}
          </span>{" "}
          management
        </div>
        <div className="w-full h-[1px] bg-black my-8"></div>
        <div className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl work-sans mt-8">
          <span className="text-[#C6FF00] playfair-display italic">
            Business{" "}
          </span>{" "}
          management
        </div>
        <div className="w-full h-[1px] bg-black my-8"></div>
      </div>

      <div className="bg-[#868C70] py-12 px-6 md:py-24 lg:px-24">
        <div className="text-white font-semibold text-4xl md:text-7xl pt-2 work-sans text-center">
          A
          <span className="text-[#C6FF00] playfair-display italic">
            {""} guide {""}
          </span>
          to making the most of
        </div>
        <div className="text-white font-semibold text-4xl md:text-7xl text-center work-sans">
          your finances
        </div>
        <div className="text-center my-8 text-white text-base md:text-lg px-4 lg:px-48">
          The key message of the guide is that by taking a proactive approach to
          managing your finances and making smart financial decisions, you can
          achieve financial stability and security, and live a comfortable life.
          Some of the specific advice provided in the guide includes creating a
          budget and tracking your expenses.
        </div>
        <div className="flex justify-center items-center">
          <div className="border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6">
            Learn More
          </div>
        </div>
        <div className="flex justify-center items-center pt-8">
          <img
            src={img4}
            alt=""
            className="w-full h-auto md:w-[800px] md:h-[400px]"
          />
        </div>
      </div>

      {/* Problem in 1024*/}
      <div className="bg-[#7A8066] px-6 py-12 md:px-24 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <div className="text-white font-semibold text-4xl md:text-7xl pt-2 work-sans">
              Recent
              <span className="text-[#C6FF00] playfair-display italic">
                {""} updates {""}
              </span>
              from our
            </div>
            <div className="text-white font-semibold text-4xl md:text-7xl work-sans">
              blog
            </div>
          </div>
          <div className="pt-6 md:pt-14">
            <div className="border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6 text-center w-[180px]">
              View More
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-24">
          <div className="rounded-3xl lg:my-14 mt-14 border border-[#C6FF00] bg-[#3A4026] p-6 md:p-14 w-full lg:w-1/2">
            <div>
              <img src={logo} alt="" className="w-[130px] h-[60px]" />
            </div>
            <div className="text-white font-semibold text-2xl md:text-3xl pt-2 work-sans">
              How to profitable
              <span className="text-[#C6FF00] playfair-display italic">
                {""} build out {""}
              </span>
              a sales
            </div>
            <div className="text-white font-semibold text-2xl md:text-3xl pt-2 work-sans">
              profitable
            </div>
            <div className="pt-6 flex justify-end">
              <img src={img5} alt="" />
            </div>
          </div>

          <div className="my-14 w-full lg:w-1/2">
            <div className="flex gap-4 text-white text-lg lg:pt-14">
              <div>Best practice</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Anica Bertha</div>
            </div>
            <div className="pt-8 lg:pb-20 pb-8">
              <div className="text-white font-semibold text-4xl md:text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display italic text-4xl md:text-6xl">
                sales team
              </div>
            </div>
            <div className="text-white font-lg pl-12 md:pl-48 text-justify">
              Once a Sales team has identified potential customers, they can
              work to nurture those relationships and move them through the
              sales funnel.
            </div>
            <div className="bg-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-8 md:mt-14 ml-12 md:ml-48">
              Read More
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black"></div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-14">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4 text-white text-lg pt-14">
              <div>Strategy</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Martin Hoxha</div>
            </div>
            <div className="pt-8 lg:pb-20 pb-8">
              <div className="text-white font-semibold text-4xl md:text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display italic text-4xl md:text-6xl">
                marketing team
              </div>
            </div>
            <div className="text-white font-lg pl-12 md:pl-48 text-justify">
              Attracting new customers requires an understanding of their needs
              and preferences. A marketing department can conduct research.
            </div>
            <div className="border text-white border-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-8 md:mt-14 ml-12 md:ml-48">
              Read More
            </div>
          </div>
          <div className="hidden lg:block bg-black w-[1px] h-[500px]"></div>
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4 text-white text-lg pt-14">
              <div>Recruiting</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Diana Webster</div>
            </div>
            <div className="pt-8 lg:pb-20 pb-8">
              <div className="text-white font-semibold text-4xl md:text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display italic text-4xl md:text-6xl">
                recruiting team
              </div>
            </div>
            <div className="text-white font-lg pl-12 md:pl-48 text-justify">
              Another factor to consider is the past success with founder-led
              hires. If the company has been successful in hiring key employees.
            </div>
            <div className="border text-white border-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-8 md:mt-14 ml-12 md:ml-48">
              Read More
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3A4026] px-6 py-12 md:px-24 md:py-24">
        <div className="text-white font-semibold text-4xl lg:text-7xl work-sans text-center">
          The cutting-edge financial
        </div>
        <div className="text-white font-semibold text-4xl lg:text-7xl work-sans text-center">
          <span className="text-[#C6FF00] playfair-display italic">
            solution
          </span>{" "}
          empowering you to
        </div>
        <div className="text-white font-semibold text-4xl lg:text-7xl work-sans text-center">
          expand at your own pace
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#C6FF00] rounded-full px-4 py-2 font-semibold mt-8 md:mt-14">
            Get Started
          </div>
        </div>
      </div>

      <div className="bg-[#5F6647] px-6 pt-12 pb-8 lg:px-24 lg:pt-24 lg:pb-8">
  <div className="flex flex-col lg:flex-row justify-between pb-14">
    <div>
      <img src={logo2} alt="" className="w-32 h-auto lg:w-48 lg:h-auto" />
    </div>
    <div className="flex flex-col lg:flex-row lg:gap-24">
      <div className="mb-8 lg:mb-0">
        <div className="text-white font-bold text-xl lg:text-2xl py-2">Contact</div>
        <div className="text-white text-base lg:text-xl">Hello@profitex.com</div>
        <div className="text-white text-base lg:text-xl">Kansas, USA</div>
      </div>
      <div className="mb-8 lg:mb-0">
        <div className="text-white font-bold text-xl lg:text-2xl py-2">Company</div>
        <div className="text-white text-base lg:text-xl pb-2">Home</div>
        <div className="text-white text-base lg:text-xl pb-2">About</div>
        <div className="text-white text-base lg:text-xl pb-2">Our Services</div>
        <div className="text-white text-base lg:text-xl pb-2">Blog</div>
        <div className="text-white text-base lg:text-xl pb-2">Contact</div>
      </div>
      <div>
        <div className="text-white font-bold text-xl lg:text-2xl py-2">Social Media</div>
        <div className="text-white text-base lg:text-xl pb-2">Facebook</div>
        <div className="text-white text-base lg:text-xl pb-2">Twitter</div>
        <div className="text-white text-base lg:text-xl pb-2">Instagram</div>
        <div className="text-white text-base lg:text-xl pb-2">LinkedIn</div>
      </div>
    </div>
  </div>
  <div className="w-full h-[1px] bg-black"></div>
  <div className="flex flex-col lg:flex-row justify-between text-white pt-8 text-base lg:text-lg">
    <div className="lg:pb-0 pb-1">Copyright 2022 Profitex</div>
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-14">
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
