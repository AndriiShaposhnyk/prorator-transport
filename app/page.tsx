import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import AboutUs from "./components/AboutUs";
import Quote from "./components/Quote";
import OwnerOperator from "./components/OwnerOperator";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center">
       <HeroSection />
      <Services />
      <Fleet />
      <AboutUs />
      <Quote />
      <OwnerOperator />
      <ContactUs />
    </div>
  );
}
