// import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Tech from "./techwork.png";

const CardDeal = () => (
  <section id="teach" className={layout.section}>
     
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Resources
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The technology stack for our Chrome extension website includes Node.js and Express.js for server-side functionality, MongoDB for data storage, and the MERN stack with React, CSS, HTML, and JavaScript for the client-side interface. This combination ensures a robust and responsive user experience, while APIs are leveraged for data retrieval and integration.      </p>
    </div>
    <div className={layout.sectionImg}>
      <img src={Tech} alt="" className="w-[90%] h-[90%] " />
    </div>

   
  </section>
);

export default CardDeal;
