import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AI programming jokes",
  description:
    "“Discover a world of laughter with our AI-themed joke application! Dive into a collection of clever programming humor and witty AI punchlines. Elevate your coding spirit with a touch of humor – the perfect companion for tech enthusiasts and programmers alike.”",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-white bg-no-repeat ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
