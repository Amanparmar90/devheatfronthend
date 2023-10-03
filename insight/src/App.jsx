import styles from "./style";
import { DescriptionWork, Benefits, Tech, DeveloperProfile, Footer, Navbar, Features, Home, Review } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
      <Features />
      <Tech />
      <Benefits />
      <DeveloperProfile />
      <DescriptionWork />
      <Review />
      <Footer />
      </div>
    </div>
  </div>
);

export default App;
