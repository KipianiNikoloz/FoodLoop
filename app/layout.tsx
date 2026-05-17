import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodLoop | გადავარჩინოთ კარგი საკვები ერთად",
  description:
    "FoodLoop არის თბილისის მომავალი პლატფორმა, რომელიც აკავშირებს ადამიანებს ადგილობრივ ბიზნესებთან და ეხმარება კარგ საკვებს დანაკარგისგან გადარჩენაში.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
