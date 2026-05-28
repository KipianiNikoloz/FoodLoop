import { steps } from "@/components/landing/content";

export function HowSection() {
  return (
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
  );
}
