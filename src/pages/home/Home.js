import CitySlider from "../../components/slider/Slider";
import "./Home.css";
import slides from "./SliderList";
import advice from "../../utils/icons/advice.png";
import law from "../../utils/icons/law.png";
import homeAbout from "../../utils/images/homeAbout.jpg";
import { Link } from "react-router-dom";
import { GoLaw } from "react-icons/go";
import { MdCorporateFare } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CountUp from 'react-countup';
function Home() {
  const [showModal, setShowModal] = useState(true);
  // console.log(slides);
  // Cookies.set("showModal",true);


    // const timeout = setTimeout(() => {
    //   setShowModal(true)
    // }, 1000)
    

    // clearTimeout(timeout)


   
  

  const modalHandler = async () => {
    // setShowModal(false);
    sessionStorage.setItem('disclaimer', true);
    setShowModal(false);
    // Cookies.set("showModal",false);
  };

  useEffect(() => {
    const agreed = sessionStorage.getItem('disclaimer');
    if(agreed){
      setShowModal(false);
    }
  }, [])
  





  return (
    <div className="homeMain">
      <div
        className={
          "modalMain " + (showModal ? "modalDisplay " : "modalHidden ")
        }
      >
        <div className="modalContent">
          <h2>DISCLAIMER</h2>
          <p>
            The current rules of the Bar Council of India restrict / prohibit
            law firms from advertising and soliciting work through communication
            in the public domain. This website has been designed solely for the
            purposes of dissemination of basic information about Samdarria and
            Associates, which is made available on the specific request of the
            visitor/user. By clicking on 'AGREE', the visitor acknowledges that
          </p>
          <div>
            <ul className="modalList">
              <li>
                the contents of this website do not amount to advertising or
                solicitation;
              </li>
              <li>
                the information provided on the website is meant only for
                his/her understanding about our activities and who we are on
                their own volition;
              </li>
              <li>
                the contents of this website do not constitute, and shall not be
                construed as, legal advice or substitute for legal advice;
              </li>
              <li>
                the use of this website is completely at the user’s own volition
                and shall not create or amount to an attorney-client
                relationship;
              </li>
              <li>
                We are not liable for the consequence of any action or decision
                taken by the visitor by relying on the contents of this website
                or of any external links on this website;
              </li>
              <li>
                We do not assume any liability for the interpretation or use of
                the information provided on this website and does not offer any
                warranty, either express or implied;
              </li>
              <li>
                the contents of this website are the property of Samdarria and
                associates and the visitor is not authorised to use any part
                thereof, with or without adaptation, without the express prior
                written consent of Samdarria & Associates;
              </li>
              <li>
                We uses cookies on this website to improve user experience. By
                continuing to use this website without changing your privacy
                settings, you agree to the use of cookies.
              </li>
            </ul>
          </div>
          <button className="modalBtn" onClick={modalHandler}>
            Agree and Continue
          </button>
        </div>
      </div>

      <div>
        <CitySlider slides={slides} />
      </div>
      <div className="homeContent1">
        <div className="homeContent1Div1">
          <img src={advice} alt="Icon"></img>

          <h3>Expert Advice</h3>

          <p>
            Legal matters that impact our daily lives and businesses can be
            complex and require the guidance of an expert to navigate
            successfully. Our team of experienced professionals can provide
            precise guidance with no room for errors. Our legal advisors are
            available to help you overcome any obstacles and address any
            questions or concerns you may encounter, offering timely advice and
            taking appropriate action.
          </p>
        </div>
        <div className="homeContent1Div2">
          <img src={law} alt="Icon"></img>

          <h3>Our Approach</h3>

          <p>
            We recognize the significant role that time plays in determining the
            outcome of almost any situation, and we appreciate its value to the
            utmost degree. Whether you come to our firm with minor or major
            issues, we will listen attentively to your concerns. Afterwards, we
            will request a minimum hours to craft customized solutions that
            abide by the limits of our constitution, and we will ensure that you
            depart with a smile.
          </p>
        </div>
      </div>

      <div className="homeContent2">
        <div className="homeContent2Div1">
          <img className="homeAboutImg" src={homeAbout} alt="About Us"></img>
        </div>
        <div className="homeContent2Div2">
          <h2>About Samdarria & Associates</h2>
          <p>
            Akshayy Samadaria, founder of Samdarria & Associates, a sole
            proprietorship law office concern. I have perused my Ll.B from
            Karnataka Lingayat Education Society’s Law College, Bangalore in
            2015 and right after my course, I got enrolled asan Advocate under
            the Tamil Nadu and Puducherry Bar Council and I joined as an Junior
            Associate under Advocate Anand Sashidharan’s Office at Besant Nagar,
            Chennai and since then I am under the said Anand Sashidharan’s
            guidance.
          </p>
          <Link to="/about" className="knowMoreBtn">
            Know More
          </Link>
        </div>
      </div>

      <div className="serviceContent">
        <h1 className="serviceHead">Services We Provide</h1>
        <p>
          We offers a wide range of legal consulting services in various
          practice areas and sectors, catering to unique and intricate
          requirements. Our satisfied clients from all over the world attest to
          the quality of our commercial and specialized services. Our primary
          focus is to provide top-notch legal consultancy services that address
          our clients' challenges with utmost care and attention.
        </p>
        <div className="serviceContainer">
          <div className="serviceCard">
            <GoLaw className="serviceIcon" />
            <h3>CONSTITUTIONAL</h3>
          </div>
          <div className="serviceCard">
            <MdCorporateFare className="serviceIcon" />
            <h3>CORPORATE SERVICES</h3>
          </div>
          <div className="serviceCard">
            <FaBook className="serviceIcon" />
            <h3>CIVIL</h3>
          </div>
        </div>
        <div>
          <Link className="exploreBtn" to="/field">
            Explore All
          </Link>
        </div>
      </div>

      <div className="infoMain">
        <h1 className="infoHead">WHY US?</h1>
        <div className="infoContent">
          <div className="infoCard">
            <p><CountUp start={0} end={280} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp> crores+</p>
            <h3>Real Estate Transactions</h3>
          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={35} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp>+</p>
            <h3>Litigation Disposed successfully</h3>
          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={55} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp>+</p>
          <h3>Litigation Representation</h3>

          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={700} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp> crores+</p>
          <h3>Arbitration Proceedings Disposed Successfully</h3>

          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={4} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp>+</p>
          <h3>Trademark Registered</h3>

          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={16} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp>+</p>
          <h3>Trademark Filed</h3>

          </div>
          <div className="infoCard">
            <p><CountUp start={0} end={11} duration={3} enableScrollSpy={true} startOnMount={false}></CountUp>+</p>
          <h3>Trademark Pending</h3>

          </div>
        </div>
      </div>

      <div className="chooseUsContent">
        <div className="overlay"></div>
        <h1 className="chooseHead">Why Choose Us</h1>

        <div className="chooseContainer">
          <div className="chooseCard">
            <h3>Best Attorneys</h3>
            <p>
              Our pride in describing ourselves as the "best" stems from the
              hard work, education, and resilience that we have invested in our
              talents and values. We continually strive to enhance our team to
              provide you with the most secure and most reliable legal advice.
            </p>
          </div>
          <div className="chooseCard">
            <h3>Affordable Fee</h3>
            <p>
              We have faith that goodwill will bring together the necessary
              components to turn the impossible into reality. Our firm is
              committed to providing the highest-quality services at affordable
              rates.
            </p>
          </div>
          <div className="chooseCard">
            <h3>Best Case Strategy</h3>
            <p>
              We have meticulously analyzed, tackled, and preserved every case
              or problem that has come our way, and our experts have access to
              this wealth of experience.we assure you that we have a
              well-documented work to demonstrate our expertise.
            </p>
          </div>
          <div className="chooseCard">
            <h3>Professional Team</h3>
            <p>
              Our experienced attorneys handle cases in a stress-free manner,
              and our professional approach ensures that our clients remain
              composed throughout the process.
            </p>
          </div>
          <div className="chooseCard">
            <h3>Client Satisfaction</h3>
            <p>
              Samdarria and associates has a reputation for satisfying its
              clients and achieving successful case outcomes with minimal
              expenses.
            </p>
          </div>
          <div className="chooseCard">
            <h3>Committed to work</h3>
            <p>
              We have a team of committed attorneys who provide unparalleled and
              unwavering legal support to every case we handle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
