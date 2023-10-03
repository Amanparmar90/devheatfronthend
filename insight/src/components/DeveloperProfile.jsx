
import styles from "../style";
import Devika from "./devika.jpeg";
import Aman from "./Aman.jpeg";
import Vedic from "./vedic.jpeg";

const DeveloperProfile = () => (
  
  <section id="Contacts" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>


    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        About Us
      </h2>
      
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <div class="card-wrapper">
       <div class="card profile-two">
       <div class="card-image profile-img--two">
          <img src={Devika} alt="profile two " />
        </div>

       

        <div class="details jane">
            <h2>Devika Verma
              <br />
              <p class="job-title">IIIt Surat Student</p>
              <span class="job-title">Frontend Developer</span>
            </h2>
        </div>
    </div>
 </div>
     
 <div class="card-wrapper">
       <div class="card profile-two">
       <div class="card-image profile-img--two">
          <img src={Aman} alt="profile two " />
        </div>

        

        <div class="details jane">
            <h2>Aman Parmar
              <br />
              <p class="job-title">IIIt Surat Student</p>
              <span class="job-title">React Developer </span>
            </h2>
        </div>
    </div>
 </div>

 <div class="card-wrapper">
       <div class="card profile-two">
       <div class="card-image profile-img--two">
          <img src={Vedic} alt="profile two " />
        </div>

       

        <div class="details jane">
            <h2>Vedic Chalwa
              <br />
              <p class="job-title">IIIt Surat Student</p>
              <span class="job-title">AI/ML</span>
            </h2>
        </div>
    </div>
 </div>
    </div>
  </section>
);

export default DeveloperProfile;
