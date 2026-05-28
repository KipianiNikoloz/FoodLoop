import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { marketSheet } from "@/components/landing/content";

export function FinalCta() {
  return (
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
  );
}
