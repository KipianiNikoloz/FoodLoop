import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CroppedImage } from "@/components/landing/CroppedImage";
import { offerExamples } from "@/components/landing/content";

export function OffersSection() {
  return (
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
  );
}
