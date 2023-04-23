import React from "react";
import "./Field.css";
import field from "../../utils/images/field.webp";
import { gsap } from "gsap";
import Footer from "../../components/footer/Footer"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
function Field() {
  // gsap.fromTo(".fieldOverlay1",{x:-2000}, {duration: 1,delay:0.6, x:0,ease:"elastic"})
  // gsap.fromTo(".fieldOverlay2",{x:-2000},{duration:1.2, x:0,delay:1,ease:"elastic"})
  // gsap.fromTo(".fieldImg",{x:-2000},{duration:1.2, x:0,delay:1,ease:"elastic"})
  return (
    <>
      <div className="fieldMain">
        <div className="fieldDiv1">
          <div className="fieldImgDiv">
            <div className="fieldOverlay1 "></div>
            <div className="fieldOverlay2 "></div>
            <p className="fieldHeroHead">solutions for legal problems</p>
            <img className="fieldImg" src={field} alt="Practise Field"></img>
          </div>
          <div>
            <div className="fieldListDiv ">
              <div className="fieldList">
                <a class="animated-arrow" href="#consitutional">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">CONSTITUTIONAL</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#civil">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">CIVIL</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#Alternate_dispute_resolutions_system">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">
                      ALTERNATE DISPUTE RESOLUTIONS SYSTEM
                    </span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#criminal">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">CRIMINAL</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#intellectual_property_rights">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">INTELLECTUAL PROPERTY RIGHTS</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#real_estate_transaction">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">REAL ESTATE TRANSACTIONS</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="fieldList">
                <a class="animated-arrow" href="#corporate_services">
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">CORPORATE SERVICES</span>
                    <span class="the-arrow -right">
                      <span class="shaft"></span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fieldDiv2">
          <section className="fieldSection" id="consitutional">
            <h3 className="fieldHead">CONSTITUTIONAL</h3>
            <p className="fieldPara">
              Extensive participation in matters pertaining to Constitutional
              Laws, suchas Writs, Writ Appeals, Civil Revision Petition, PIL,
              etc.
            </p>
            <p className="fieldPara">
              Appearing and representing before Hon’ble Madras High Courts for
              the matters pertaining to Constitutional Law.
            </p>
          </section>
          <section className="fieldSection" id="civil">
            <h3 className="fieldHead">CIVIL</h3>
            <p className="fieldPara">
              Active participation in matters pertaining to Civil Laws such as
              Indian Contract Act 1872, Specific Relief Act 1963, The Transfer
              of Property Act 1882, The Companies Act 1956, The Insolvency and
              Bankruptcy Code 2016, The Securitization and Reconstruction of
              Financial Assets and Enforcement of Securities Interest Act, 2002
              (also known as the SARFAESI Act), The Hindu Marriage Act 1955, The
              Hindu Succession Act 1956, The Indian Succession Act 1925, The
              Consumer Protection Act 1986, The Arbitration and Conciliation Act
              1996, The Customs Act, The Income Tax Act.
            </p>
            <p className="fieldPara">
              Appearing and representing before various Hon’ble Courts, forums
              and Tribunals such as Madras High Court, City Civil Court, Family
              Courts, Combined Court at Ponneri, Poonamallee, Chengalpettu,
              Magistrate Courts, Consumer Forums, Debt Recovery Tribunal, Debt
              Recovery Appellate Tribunal, National Company Law Tribunal, Labour
              Courts, Income Tax Commission, Income Tax Appellate Tribunal,
              Customs - Excise – Service –Tax Appellate Tribunal, Tamil Nadu
              Electricity Regulatory Commission, Lok Adalat, Mediation Centers,
              Arbitration Centers.
            </p>
            <p className="fieldPara">
              Filing Various Suits, Appeals, Petitions, Execution Petitions,
              Consumer Complaints, Drafting Pleading, Cross Examinations,
              Arguments, obtaining orders and Judgments.
            </p>
          </section>
          <section className="fieldSection" id="Alternate_dispute_resolutions_system">
            <h3 className="fieldHead">ALTERNATE DISPUTE RESOLUTIONS SYSTEM</h3>
            <p className="fieldPara">
              I have successfully actively participated in several Arbitration
              Proceedings, such as sending notices, filing applications,
              appointment of arbitrator/s and petitions, advancing arguments
              before Madras High Court and Arbitration Tribunal to expedite the
              Arbitration Proceedings.
            </p>
            <p className="fieldPara">
              I have consistently participated, negotiated and have successfully
              settled several matters by referring to the Mediation Centers, Lok
              Adalat conducted in the Hon’ble Courts.
            </p>
          </section>
          <section className="fieldSection" id="criminal">
            <h3 className="fieldHead">CRIMINAL</h3>
            <p className="fieldPara">
              Extensive active participation in matters pertaining to Criminal
              Laws such as Indian Penal Code, The Code of Criminal Procedure,
              The Negotiable Instruments Act 1881.
            </p>
            <p className="fieldPara">
              I have extensively handled Private Complaints filed under section
              200 for the offences Section 138 of the Negotiable Instruments
              Act, 1881.
            </p>
            <p className="fieldPara">
              Appearing and representing before various Hon’ble Sessions and
              Magistrate Courts such as Saidapet Magistrate Court, George Town
              Magistrate Court, III, IV and VI Fast Track Courts in the Chennai
              City.
            </p>
            <p className="fieldPara">
              Filing Various Petitions, Complaints, obtaining Warrants and
              Following up in Executing the Warrants at the earliest.
            </p>
          </section>
          <section className="fieldSection" id="intellectual_property_rights">
            <h3 className="fieldHead">INTELLECTUAL PROPERTY RIGHTS</h3>
            <p className="fieldPara">
              Consistent active participation in matters pertaining to
              Intellectual Property Rights.
            </p>
            <p className="fieldPara">
              Filing Trademark Applications through Online Portal, appearing and
              representing before Hon’ble Madras High Courts and Hon’ble
              Trademark Registry, Chennai Branch.
            </p>
          </section>
          <section className="fieldSection" id="real_estate_transaction">
            <h3 className="fieldHead">REAL ESTATE TRANSACTIONS</h3>
            <p className="fieldPara">
              I have a diverse real estate practice which covers all aspects of
              the Real Estate Laws prevailing in the territory.
            </p>
            <p className="fieldPara">
              I have drafted numerous legal opinions, real estate due diligence,
              deeds, receipts and agreements relating to Immovable Property such
              as Sale, Lease, Development Agreement, Joint-Development
              Agreement, Memorandum of Deposit of Title Deeds, Receipts and
              furthermore, I have extensively participated and assisted in
              having the deeds, receipts and agreements registered before the
              appropriate jurisdictional registrar offices.
            </p>
            <p className="fieldPara">
              I have also obtained various certificates and letters from various
              authorities relating to real estate.
            </p>
          </section>
          <section className="fieldSection" id="corporate_services">
            <h3 className="fieldHead">CORPORATE SERVICES</h3>
            <p className="fieldPara">Formation of Private limited Companies.</p>
            <p className="fieldPara">Formation of Public limited Companies.</p>
            <p className="fieldPara">Formation of non-profit association/ Sec.25 companies.</p>
            <p className="fieldPara">
              Conversion of Proprietorship concern, Partnership firm into
              Private or Public limited Companies.
            </p>
            <p className="fieldPara">
              Conversion of Private limited into Public Limited and vice versa.
            </p>
          </section>
        </div>
      
        <div className='scrollContainer'>
          <a className="cntTop" href='#top'>
          <BsFillArrowUpCircleFill className="scrollBtn"/>

          </a>
      </div>
        </div>
     
     <Footer/>
    </>
  );
}

export default Field;
