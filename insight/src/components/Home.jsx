import styles from "../style";
import Button from "./Button";
import First from "./first.png";

const Home = () => {
  return (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <section id="home" className={`flex md:flex-col flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              DEBUG OF <br className="sm:block hidden" />{" "}
              <span className="text-gradient">LIKES AND</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            DISLIKES.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Debugging likes and dislikes on YouTube involves resolving issues with the platform's user interface or backend code to ensure accurate tracking and display of video preferences, enhancing user experience.

          </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

         <Button styles={`mt-10`} />

        </div>
      </section>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={First} alt="billing" className="w-[45%] h-[80%] relative z-[1]" />
      </div>
    </section>
  );
};

export default Home;
