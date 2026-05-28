import { FoodLoopMark } from "@/components/landing/FoodLoopMark";

export function SiteHeader() {
  return (
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
  );
}
