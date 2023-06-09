import "./About.css";
import court from "../../utils/images/court.jpg";
import { TbBulb } from "react-icons/tb";
import Footer from "../../components/footer/Footer"
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function About() {
  return (
    <div className="aboutMain">
      <img src={court} className="aboutImg" alt="About" />

      <div className="aboutDiv1">
        <section className="aboutSection ">
          <h3 className="aboutHead">ABOUT THE FOUNDER MR. AKSHAYY SAMADARIA</h3>
          <p>
          Advocate Akshayy Samadaria, founder of Samdarria & Associates, a sole proprietorship law office concern. He has perused my Ll.B from Karnataka Lingayat Education Society’s Law College, Bangalore in 2015 and right after his course, he got enrolled as an Advocate under the Tamil Nadu and Puducherry Bar Council and he joined as an Junior Associate under Advocate Anand Sashidharan’s Law Office, Chennai until 2020.
          </p>
          <br></br>
          <p>
          
In the course of past 5 years as an Junior Associate, he has extensively represented before various Hon’ble Courts, Tribunals, Forums which includes Madras High Court, City Civil Court, Family Courts, Combined Court at Ponneri, Poonamallee, Chengalpettu, Magistrate Courts, Consumer Forums, Debt Recovery Tribunal, Debt Recovery Appellate Tribunal, National Company Law Tribunal, Labour Courts, Income Tax Commission, Income Tax Appellate Tribunal, Customs - Excise – Service - Tax Appellate Tribunal, Tamil Nadu Electricity Regulatory Commission, Lok Adalat, Mediation Centers, Arbitration Centers and Trademark Registrar. Furthermore, he has assisted his senior in many real estate transactions right from drafting of various deeds, giving title opinions and legal opinions and registering the deeds, agreements, memorandums before the Various Registration Office. He has also assisted his senior in company transactions, such as preparing Due Diligence and assisting in mergers, acquisitions, amalgamations of various companies. 
          </p>
          <br></br>
          
          <br></br>

          <p>In 2020 October, Advocate Akshayy Samadaria, started his own law firm with the only intention to people to best of knowledge and learn from the experience. Since then, the firm has served many people seeking legal services. In such a short span, the Firm has sincerely served the following individuals and entity.</p>
          <br></br>
          <ul className="sectionList">
            <li>Lenskart Solution Pvt. Ltd.</li>
            <li>Digital Age Retail Pvt. Ltd. (First Cry)</li>
            <li>Prashanth Hospitals</li>
            <li>O2 Spa (Masti Health Private Limited)</li>
            <li>Utracon Structurals Private Limited</li>
            <li>Wallace Sports Research Foundations</li>
            <li>Sical Logistics</li>
            <li>International Clearing and Shipping Agency</li>
            <li>Solidare Private Limited</li>
            <li>Quintegra Solutions Private Limited</li>
            <li>RBL Bank</li>
            <li>Compstore</li>
            <li> Solokrafts Industries Pvt Ltd</li>
            <li>Texonic Instruments Pvt Ltd</li>
            <li>Muzik247 Private Limited</li>
            <li>Jaguar Studios</li>
            <li>Medihub Sciencetec Private Limited</li>
            <li>Supreme Computers Private Limited</li>
            <li>JR Group of Companies</li>
            <li>Kushal Electric Company</li>
            <li>Shree Electricals</li>
            <li>Kesar Marketing</li>
            <li>Suresh Pharma</li>
          </ul>
          <br></br>
          <br></br>
          <p>
          In the course of representation of cases, We, have also engaged and briefed Designated Senior Counsels. He is also the panel member of Legal Department for IDFC First Bank and NBFC’s namely Hinduja Housing Finance Limited, Matru Financial Services Private Limited and Mahaveer Finance India Limited. He also deals with matters pertaining to Specific Relief Act, Contract Act, Transfer of Property Act, Writ Remedies, Arbitration, Conciliation, Execution Petition and Cheque Bounce matters.
          </p>
          <br></br>
          <br></br>
        </section>
      </div>
      <div className="aboutDiv2">
        <section className="aboutSection">
          <h3 className="aboutHead">ABOUT THE FIRM</h3>
          <br></br>
          <br></br>
          <p>
            We have built-up our own private and independent office since 2020,
            located at Egmore, Chennai, which is very near to the Hon’ble Madras
            High Court and is accessible to various Hon’ble Courts, Forums and
            Tribunals in the City. We have equipped my office with all various
            necessary things and materials which will in turn help us in saving
            our time and satisfy our clients by giving legal aids and
            consultation.
          </p>
        </section>
      </div>
      <div className="aboutDiv3">
        <section className=" motive">
          <TbBulb className="motiveIcon" />
          <h3 className="aboutHead">MOTIVE</h3>
          <p>
            In providing legal assistance and aid to our clients by whatever
            means possible irrespective of their backgrounds, caste and religion
            by representing our clients before various Hon’ble Courts,
            Tribunals, Forums and assisting clients in various transactions such
            as real estate and commercial.
          </p>
          <br></br>
          <p>
            Participating in any manner whatsoever to help the society in
            cultivating friendly and peaceful environments.
          </p>
        </section>
      </div>
      <div className="aboutDiv4">
        <section className="detailSection">
          <div className="detailBox">
            {/* <h5 className="detail-head"> ENROLLMENT </h5>
      <p className="detail-para">MS/3245/2015 NUMBER</p> */}
            <h5 className="detail-head">PLACE OF PRACTICE</h5>
            <p className="detail-para">
              Madras High Court, Tamil Nadu and Puducherry Bar Council.
            </p>
          </div>
          <div className="detailBox">
            <h5 className="detail-head">OFFICE ADDRESS</h5>
            <p className="detail-para">
              Office No.20, Ground Floor, Prince Plaza, Door No.46, Pantheon
              Road, Egmore, Chennai – 600 008.
            </p>
          </div>
          <div className="detailBox">
            <h5 className="detail-head">Email</h5>
            <p className="detail-para">akshayy@samdariaandassociates.com</p>
            <h5 className="detail-head">Phone</h5>
            <p className="detail-para">9952006141</p>
          </div>
        </section>
        {/* <div className="bottomDetail">
<div><p className="detail-para bottomPara">Email: <a href="mailto:akshayy@samdariaandassociates.com">akshayy@samdariaandassociates.com</a></p></div>
<div><p className="detail-para bottomPara">Phone: <a href="tel:9952006141">9952006141</a></p></div>
<div><p className="detail-para bottomPara">Place: <a>Chennai</a></p></div>
</div> */}
      </div>
  

 <Footer></Footer>

      <div className="scrollContainer">
        <a href="#top">
          <BsFillArrowUpCircleFill className="scrollBtn" />
        </a>
      </div>
    </div>
  );
}

export default About;
