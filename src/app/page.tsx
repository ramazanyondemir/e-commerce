import CategoryNavBar from "../components/CategoryNavBar";
import Container from "../components/Container";
import Header from "../components/header";
import PromoSection from "../components/PromoSection";

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
