import Container from "../../components/Container/Container";
import Banner from "../../components/Home/Banner/Banner";
import DeliveryMan from "../../components/Home/DeliveryMan/DeliveryMan";
import Features from "../../components/Home/Features/Features";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <Features />
        <DeliveryMan />
      </Container>
    </div>
  );
};

export default Home;
