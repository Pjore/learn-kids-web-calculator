import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kids Learning Playground",
  description: "A simple learning playground for kids to explore JavaScript and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
