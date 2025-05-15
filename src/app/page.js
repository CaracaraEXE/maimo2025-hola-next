import Navbar from "@/app/components/Navbar.js";
import Footer from "@/app/components/Footer.js";
import HomeContainer from "@/app/components/HomeContainer.js";
import HeroImage from "@/app/components/HeroImage"

export default function Home() {

   const climas = [
        {temperatura:16,pais:"Argentina"},
        {temperatura:30,pais:"Brazil"},
         {temperatura:18,pais:"Uruguay"},
    ];

  return (
    <div>
      <Navbar title="Jason's recipes" year={2025}/>
      <HeroImage/>
      <HomeContainer/>
      <Footer />
    </div>
  );
}
