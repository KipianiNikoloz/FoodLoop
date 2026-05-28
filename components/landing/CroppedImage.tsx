import Image from "next/image";
import { marketSheet } from "@/components/landing/content";

type CroppedImageProps = {
  className: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function CroppedImage({
  className,
  alt,
  priority = false,
  sizes = "(max-width: 720px) 100vw, 48vw",
}: CroppedImageProps) {
  return (
    <Image
      src={marketSheet}
      alt={alt}
      fill
      className={className}
      loading={priority ? "eager" : "lazy"}
      preload={priority}
      sizes={sizes}
    />
  );
}
