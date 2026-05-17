import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodLoop | თბილისში კარგი საკვები ნაკლები დანაკარგით",
  description:
    "FoodLoop არის მომავალი პლატფორმა თბილისში, რომელიც აკავშირებს ადამიანებს ადგილობრივ ბიზნესებთან და ეხმარება ხარისხიანი საკვების გადარჩენას.",
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
