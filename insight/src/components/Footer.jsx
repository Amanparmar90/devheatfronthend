import styles from "../style";
import { footerLinks } from "../constants";

const Footer = () => (
  <section  className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>


    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16  mb-6 relative z-[1]">
       {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]  `}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4 ">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
 <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[30px] text-white">
        Copyright  2023 Insight. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
