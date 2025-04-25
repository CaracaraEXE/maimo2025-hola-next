import Image from "next/image";

const title = "OLDENAI";

const dia = "Jueves";

import Navbar from "@/app/components/Navbar.js";
import Footer from "@/app/components/Footer.js";
import HomeContainer from "@/app/components/HomeContainer.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeContainer/>
      <Footer />
    </div>
  );
}
