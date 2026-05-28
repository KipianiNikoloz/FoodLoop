import { CroppedImage } from "@/components/landing/CroppedImage";

export function PartnerSection() {
  return (
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
  );
}
