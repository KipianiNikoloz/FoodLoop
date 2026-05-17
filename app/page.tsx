import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

const offerExamples = [
  {
    title: "საცხობი პაკეტი",
    description: "დღის ბოლოს დარჩენილი პური, კრუასანი და ტკბილეული.",
    price: "8-12 GEL",
    tag: "მაგალითი",
  },
  {
    title: "კაფეს ლანჩი",
    description: "მომზადებული კერძები, რომლებიც იმავე დღეს უნდა გაიტანოთ.",
    price: "10-16 GEL",
    tag: "მალე",
  },
  {
    title: "სასურსათო კალათა",
    description: "ხილი, ბოსტნეული და პროდუქტები, რომლებსაც ჯერ კიდევ კარგი ხარისხი აქვთ.",
    price: "12-20 GEL",
    tag: "თბილისი",
  },
];

const steps = [
  "იპოვეთ დღის ბოლოს დარჩენილი ხარისხიანი საკვები ადგილობრივ ბიზნესებთან.",
  "შეუერთდით სიას და პირველებმა მიიღეთ წვდომა გაშვებისას.",
  "აიღეთ შეკვეთა ახლომდებარე ადგილიდან და შეამცირეთ საკვების დანაკარგი.",
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brandMark" href="#top" aria-label="FoodLoop მთავარი">
          <span className="brandIcon">FL</span>
          <span>
            <strong>FoodLoop</strong>
            <small>თბილისი</small>
          </span>
        </a>
        <nav aria-label="მთავარი ნავიგაცია">
          <a href="#how">როგორ მუშაობს</a>
          <a href="#impact">გავლენა</a>
          <a href="#partners">ბიზნესებისთვის</a>
        </nav>
      </header>

      <section id="top" className="heroSection">
        <div className="heroCopy">
          <p className="eyebrow">მალე თბილისში</p>
          <h1>კარგი საკვები ნაკლებ ფასად, ნაკლები დანაკარგით.</h1>
          <p className="heroText">
            FoodLoop აკავშირებს ადამიანებს ადგილობრივ კაფეებთან, საცხობებთან,
            რესტორნებთან და მაღაზიებთან, რომ დღის ბოლოს ხარისხიანი საკვები არ დაიკარგოს.
          </p>
          <WaitlistForm id="hero-waitlist" />
        </div>
        <div className="heroVisual" aria-label="FoodLoop-ის მომავალი აპლიკაციის გადახედვა">
          <div className="phoneMockup">
            <div className="phoneHeader">
              <span>FoodLoop</span>
              <strong>თბილისი</strong>
            </div>
            <div className="savingCard">
              <span>დღის შეთავაზება</span>
              <strong>საცხობი პაკეტი</strong>
              <p>მიიღეთ ხარისხიანი საკვები გაშვებისას 50%-მდე ნაკლებ ფასად.</p>
            </div>
            <div className="miniCards">
              <span>კაფე</span>
              <span>სასურსათო</span>
              <span>რესტორანი</span>
            </div>
          </div>
          <div className="deckPreview">
            <Image src="/ui-deck/foodloop-ui-5.png" alt="FoodLoop UI მიმართულების პრევიუ" fill sizes="(max-width: 900px) 90vw, 480px" priority />
          </div>
        </div>
      </section>

      <section className="offerBand" aria-labelledby="offers-title">
        <div className="sectionIntro">
          <p className="eyebrow">რა შეიძლება გამოჩნდეს</p>
          <h2 id="offers-title">რეალისტური კატეგორიები, არა ყალბი ინვენტარი.</h2>
          <p>
            ეს ბარათები აჩვენებს მომავალი შეთავაზებების ტიპებს. FoodLoop ჯერ ლაივ
            შეკვეთებს, რუკას ან გადახდას არ ხსნის.
          </p>
        </div>
        <div className="offerGrid">
          {offerExamples.map((offer) => (
            <article className="offerCard" key={offer.title}>
              <span>{offer.tag}</span>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <strong>{offer.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="howSection" aria-labelledby="how-title">
        <div className="sectionIntro inverted">
          <p className="eyebrow">როგორ იმუშავებს</p>
          <h2 id="how-title">მარტივი გზა საკვების გადასარჩენად.</h2>
        </div>
        <div className="stepGrid">
          {steps.map((step, index) => (
            <article className="stepCard" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="impactSection" aria-labelledby="impact-title">
        <div>
          <p className="eyebrow">გავლენა</p>
          <h2 id="impact-title">ყოველი გადარჩენილი პაკეტი ნიშნავს ნაკლებ ნარჩენს.</h2>
          <p>
            FoodLoop-ის მიზანია ყოველდღიური არჩევანი გახდეს უფრო ხელმისაწვდომი,
            ადგილობრივი და მდგრადი.
          </p>
        </div>
        <dl className="impactStats">
          <div>
            <dt>50%-მდე</dt>
            <dd>პოტენციური დაზოგვა</dd>
          </div>
          <div>
            <dt>1 ქალაქი</dt>
            <dd>საწყისი ფოკუსი: თბილისი</dd>
          </div>
          <div>
            <dt>2 ჯგუფი</dt>
            <dd>მომხმარებლები და პარტნიორები</dd>
          </div>
        </dl>
      </section>

      <section id="partners" className="partnerSection" aria-labelledby="partners-title">
        <div className="partnerCopy">
          <p className="eyebrow">ბიზნესებისთვის</p>
          <h2 id="partners-title">გაქვთ დღის ბოლოს დარჩენილი ხარისხიანი საკვები?</h2>
          <p>
            FoodLoop დაეხმარება ადგილობრივ ბიზნესებს გაყიდონ ის, რაც სხვაგვარად
            დაიკარგებოდა, და მიაღწიონ ადამიანებს, ვინც ახლოს ეძებს კარგ ფასს.
          </p>
        </div>
        <div className="categoryPills" aria-label="პარტნიორების კატეგორიები">
          <span>კაფეები</span>
          <span>საცხობები</span>
          <span>რესტორნები</span>
          <span>სასურსათო მაღაზიები</span>
        </div>
      </section>

      <section className="finalCta" aria-labelledby="final-title">
        <div>
          <p className="eyebrow">ადრეული წვდომა</p>
          <h2 id="final-title">შეუერთდით სიას FoodLoop-ის გაშვებამდე.</h2>
          <p>
            დაგვიტოვეთ ელფოსტა და აირჩიეთ, გსურთ FoodLoop გამოიყენოთ როგორც
            მომხმარებელმა თუ პარტნიორმა ბიზნესმა.
          </p>
        </div>
        <WaitlistForm id="final-waitlist" variant="footer" />
      </section>

      <footer className="siteFooter">
        <strong>FoodLoop</strong>
        <span>Affordable meals. Less food waste. Smarter daily choices.</span>
      </footer>

      <a className="stickyCta" href="#hero-waitlist">
        სიაში ჩაწერა
      </a>
    </main>
  );
}
