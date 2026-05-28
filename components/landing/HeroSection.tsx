import { WaitlistForm } from "@/components/WaitlistForm";
import { CroppedImage } from "@/components/landing/CroppedImage";

export function HeroSection() {
  return (
    <section className="heroSection" aria-labelledby="hero-title">
      <div className="heroCopy">
        <h1 id="hero-title">
          გადავარჩინოთ <span>კარგი საკვები.</span> ერთად.
        </h1>
        <p className="heroText">
          FoodLoop არის თბილისის მომავალი პლატფორმა, სადაც კაფეები, ფურნეები,
          რესტორნები და მაღაზიები დღის ბოლოს დარჩენილ კარგ საკვებს უფრო
          ხელმისაწვდომად გაუზიარებენ ქალაქს.
        </p>
        <div className="heroFormShell" aria-label="FoodLoop მოლოდინის სია">
          <h2>შეუერთდი მოლოდინის სიას</h2>
          <WaitlistForm id="hero-waitlist" />
        </div>
      </div>

      <div className="heroVisual" aria-label="თბილისის ბაზრის საკვების სცენა">
        <div className="heroPhoto">
          <CroppedImage
            className="cropHero"
            alt="FoodLoop-ის ქაღალდის ჩანთა თბილისის ბაზარში ბოსტნეულთან და პურთან"
            priority
          />
        </div>
        <div className="marketNote">
          <strong>კარგი საკვები ფუჭდება არა!</strong>
          <span>თბილისი • მალე</span>
        </div>
      </div>
    </section>
  );
}
