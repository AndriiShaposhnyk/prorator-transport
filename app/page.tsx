import Services from "./components/Services";
import Fleet from "./components/Fleet";
import AboutUs from "./components/AboutUs";
import Quote from "./components/Quote";
import OwnerOperator from "./components/OwnerOperator";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <section id="home" className="scroll-mt-24 text-center p-8">
        <h1 className="text-3xl text-gray-900">
          Reliable Logistics Solutions Across United States and Canada
        </h1>
      </section>
      <Services />
      <Fleet />
      <AboutUs />
      <Quote />
      <OwnerOperator />
      <ContactUs />
    </div>
  );
}
