
import styles from "../style";
import Shobit from "./Shobit.png";
import Abhishek from "./Abhishek.png";
import Nilesh from "./Nilesh.png";


const Review = () => (
  
    <section id="Contacts" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <div class="reviews">

<div class="review">
   <div class="head-review">
      <img src={Shobit} width="250px" />
   </div>
   <div class="body-review">
      <div class="name-review">Shobit Bishnoi</div>
      <div class="place-review">Germany</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half"></i>
      </div>
      <div class="desc-review">"This extension is a game-changer! It provides quick and accurate YouTube video metrics, making content assessment a breeze."</div>
   </div>
</div>
<div class="review">
   <div class="head-review">
      <img src={Abhishek} width="250px" />
   </div>
   <div class="body-review">
      <div class="name-review">Abhishek Rathore</div>
      <div class="place-review">India</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
      </div>
      <div class="desc-review">"Incredibly useful! I love the real-time stats on likes, dislikes, and more. It's a must-have for YouTube enthusiasts."</div>
   </div>
</div>
<div class="review">
   <div class="head-review">
      <img src={Nilesh} width="250px" />
   </div>
   <div class="body-review">
      <div class="name-review">Nilesh Agrawal</div>
      <div class="place-review">India</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half"></i>
      </div>
      <div class="desc-review">"Simple, yet powerful. This extension elevates the YouTube experience with valuable insights at a glance. Highly recommended!"</div>
   </div>
</div>

</div>

    </div>
  </section>
  )


export default Review;