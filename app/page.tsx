import CategoryNavBar from "./components/CategoryNavBar";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <CategoryNavBar />
      </div>
    </>
  );
}
