import { Cherry_Bomb_One, Itim } from "next/font/google";
import "./globals.css";

const CBOfont = Cherry_Bomb_One({
  variable: "--font-cbo",
  subsets:["latin"],
  weight:"400",
})


const itimFont = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: "400",
}
)

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${itimFont.variable} ${CBOfont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
