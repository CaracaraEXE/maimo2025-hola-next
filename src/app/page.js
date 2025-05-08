import Image from "next/image";

const title = "OLDENAI";

const dia = "Jueves";

import Navbar from "@/app/components/Navbar.js";
import Footer from "@/app/components/Footer.js";
import HomeContainer from "@/app/components/HomeContainer.js";
import HeroImage from "./components/HeroImage";
import { Itim } from "next/font/google"

const Itimfont = Itim({
  subsets:["latin"],
  weight:"400",
})

export default function Home() {
  return (
    <div className={`${Itimfont.className}`}>
      <Navbar />
      <HeroImage/>
      <HomeContainer/>
      <Footer />
    </div>
  );
}
