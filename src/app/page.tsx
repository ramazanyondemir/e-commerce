import PromoSection from "@/components/promotion-section/PromoSection";
import CategoryNavBar from "../components/CategoryNavBar";
import Container from "../components/Container";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <CategoryNavBar />
      </Container>
      <div className="bg-[url(/background-pattern.jpg)]">
        <Container>
          <PromoSection />
        </Container>
      </div>
    </>
  );
}
