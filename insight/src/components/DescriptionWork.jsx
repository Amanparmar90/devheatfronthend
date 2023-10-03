
import styles, { layout } from "../style";
import Description from "./description.png";

const DescriptionWork = () => (
  <section id="Description" className={layout.sectionReverse}>
    
    <div className={layout.sectionImgReverse}>
      <img src={Description} alt="billing" className="w-[80%] h-[95%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Download <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Here are the installation steps for your Chrome extension website:< br/>< br/>

1. *Clone the Repository:*
   Clone this GitHub repository to your local machine using the following command:
   
   git clone https://github.com/your-username/your-chrome-extension.git<br /> <br />
   

2. *Install in Chrome:*<br /> <br />
   a. Open Chrome and go to `chrome://extensions/`.<br />
   b. Enable "Developer mode" in the top-right corner. <br/>
   c. Click on the "Load unpacked" button.<br />
   d. Select the folder where you cloned this repository.<br />



      </p>

    </div>

    
  </section>
);

export default DescriptionWork;
