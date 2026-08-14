import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import DishModal from "@/components/DishModal";
import ReservationModal from "@/components/ReservationModal";
import { UIProvider } from "@/components/UIProvider";

export default function Home() {
  return (
    <UIProvider>
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <StorySection />
          <MenuSection />
          <LocationsSection />
        </main>
        <Footer />
      </div>
      <DishModal />
      <ReservationModal />
    </UIProvider>
  );
}
