"use client";

import WelcomeSection from "./components/welcomeSection";
import Navbar from "./components/navbar";
import StepsSection from "./components/stepsSection";
import InfoSection from "./components/infoSection";
import ReviewSection from "./components/reviewSection";
import SubscribeSection from "./components/subscribeSection";
import BackToTop from "./components/backToTop";

export default function Home() {
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-gradient-to-b from-fuchsia-500">
      <Navbar />
      <WelcomeSection />
      <StepsSection />
      <InfoSection />
      <ReviewSection />
      <SubscribeSection />
      <BackToTop />
    </div>
  );
}
