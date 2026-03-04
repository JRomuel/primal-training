import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hutly - We Craft The Future Dwelling",
  description:
    "Crafted for your comfort, to enhance the beauty of your present lifestyle and pave the way for a more aesthetically pleasing future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
