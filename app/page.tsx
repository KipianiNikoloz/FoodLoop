import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const marketSheet = "/images/foodloop-market-sheet.png";

const steps = [
  {
    number: "1",
    title: "იპოვე",
    text: "ადგილობრივი კაფეები, ფურნეები და მაღაზიები დაამატებენ დღის ბოლოს დარჩენილ კარგ საკვებს.",
  },
  {
    number: "2",
    title: "აირჩიე",
    text: "მიიღე შეტყობინება, შეარჩიე პაკეტი და დაინახე რა ტიპის საკვები გელოდება.",
  },
  {
    number: "3",
    title: "წაიღე",
    text: "გაიარე ახლოს მდებარე ბიზნესთან და გადაარჩინე საკვები დანაკარგისგან.",
  },
];

const offerExamples = [
  {
    title: "თბილისის ფურნეები",
    description: "დღის ბოლოს დარჩენილი პური, კრუასანი და ტკბილეული.",
    price: "მაგ: 2.5₾ - 6₾",
    tag: "საცხობი",
    crop: "cropBakery",
  },
  {
    title: "დღის მენიუ",
    description: "კაფეს ლანჩი ან სალათი, რომელიც იმ დღეს აღარ გაიყიდება.",
    price: "მაგ: 8₾ - 15₾",
    tag: "კაფე",
    crop: "cropCafe",
  },
  {
    title: "ახალი პროდუქტი",
    description: "ბოსტნეული, ხილი და სხვა პროდუქტი, რომელიც ჯობს დღეს გამოიყენო.",
    price: "მაგ: 5₾ - 12₾",
    tag: "მაღაზია",
    crop: "cropMarket",
  },
];

function FoodLoopMark() {
  return (
    <span className="brandSymbol" aria-hidden="true">
      <svg viewBox="0 0 56 56" role="img">
        <path
          d="M28 47c-9.2 0-17-6.2-17-15.6 0-8.4 5.7-14.5 13.2-14.5 4.3 0 7.3 2.2 9.1 5.1 1.6-2.7 4.5-5.1 8.5-5.1 6 0 10.2 4.7 10.2 11.3 0 10.4-11.7 18.8-24 18.8Z"
          fill="currentColor"
        />
        <path
          d="M28.6 16.4c.3-4.7 2.5-8 6.8-10.2 1.8 4.4-.2 8.2-4.7 10.7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M23.4 18.8c-3.5-2.1-6.4-2.4-9.1-1.1"
          fill="none"
          stroke="#315635"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </span>
  );
}

function CroppedImage({
  className,
  alt,
  priority = false,
}: {
  className: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={marketSheet}
      alt={alt}
      fill
      className={className}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      sizes="(max-width: 720px) 100vw, 48vw"
    />
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="brandMark" href="#top" aria-label="FoodLoop მთავარი">
          <FoodLoopMark />
          <span>
            <strong>FoodLoop</strong>
            <small>თბილისი</small>
          </span>
        </a>
        <nav aria-label="მთავარი ნავიგაცია">
          <a href="#how">როგორ მუშაობს</a>
          <a href="#offers">შეთავაზებები</a>
          <a href="#partners">ბიზნესისთვის</a>
        </nav>
        <a className="headerCta" href="#hero-waitlist">
          სიაში ჩაწერა
        </a>
      </header>

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

      <section id="how" className="howSection" aria-labelledby="how-title">
        <div className="scriptTitle">
          <h2 id="how-title">
            როგორ მუშაობს <span>FoodLoop?</span>
          </h2>
        </div>
        <div className="stepGrid">
          {steps.map((step) => (
            <article className="stepItem" key={step.number}>
              <div className="stepIllustration" aria-hidden="true">
                <span>{step.number}</span>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="offers" className="offerBand" aria-labelledby="offers-title">
        <div className="sectionIntro">
          <h2 id="offers-title">რას შემოგვთავაზებენ?</h2>
          <Badge variant="marigold">Coming soon</Badge>
        </div>
        <div className="offerGrid">
          {offerExamples.map((offer) => (
            <Card className="offerCard" key={offer.title}>
              <div className="offerImage">
                <CroppedImage className={offer.crop} alt={`${offer.title} FoodLoop მაგალითი`} />
                <Badge variant="marigold">{offer.tag}</Badge>
              </div>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span>{offer.price}</span>
                <span aria-hidden="true" className="bagIcon">
                  ♡
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="partners" className="partnerSection" aria-labelledby="partners-title">
        <div className="partnerImage">
          <CroppedImage className="cropPartner" alt="კაფეს თანამშრომელი გადასცემს FoodLoop ჩანთას მომხმარებელს" />
        </div>
        <div className="partnerCopy">
          <h2 id="partners-title">ბიზნესს, შემოგვიერთდი!</h2>
          <p>
            თუ დღის ბოლოს ხარისხიანი საკვები გრჩებათ, FoodLoop დაგეხმარებათ
            დანაკარგის შემცირებაში და ქალაქთან უფრო ახლოს ყოფნაში. ახლა ვაგროვებთ
            პირველ მომხმარებლებსა და პარტნიორ ბიზნესებს თბილისში.
          </p>
          <div className="partnerPoints">
            <span>მეტი სტუმარი</span>
            <span>ნაკლები ნარჩენი</span>
            <span>ქალაქის კარგი რიტმი</span>
          </div>
          <a className="partnerLink" href="#final-waitlist">
            გახდი პარტნიორი
          </a>
        </div>
      </section>

      <section className="finalCta" aria-labelledby="final-title">
        <div className="tomatoStill" aria-hidden="true">
          <Image src={marketSheet} alt="" fill className="cropTomato" sizes="180px" />
        </div>
        <div>
          <h2 id="final-title">შეუერთდი მოლოდინის სიას</h2>
          <p>გაიგე FoodLoop-ის გაშვების შესახებ პირველმა.</p>
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
