import {
  StyledContainer,
  StyledDescription,
  StyledImg,
  StyledTitle,
} from './StyledHome.styled';
import CarCollections from '../../images/carsColection.png'

const Home = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitle>Welcome to our Car Rental Service!</StyledTitle>
        <StyledDescription>
          Are you searching for the perfect car for your next adventure or work
          assignment? Look no further! Our rental car service is dedicated to
          providing you with the finest selection of vehicles tailored to your
          specific needs. Whether you're embarking on a road trip, attending
          important business meetings, or simply need a reliable vehicle for
          daily commuting, we've got you covered. At our rental service, we
          prioritize your comfort and satisfaction above all else. Our extensive
          fleet of vehicles boasts the latest models equipped with top-notch
          features and amenities to ensure a seamless and enjoyable journey
          every time. From compact cars ideal for city exploration to spacious
          SUVs perfect for family vacations, we offer a diverse range of options
          to suit every preference and requirement. Experience the convenience
          and flexibility of renting a car with us, and let your journey be
          nothing short of extraordinary. Whether you're traveling solo or with
          loved ones, our commitment to providing exceptional service and
          reliable transportation remains unwavering. Start your journey with us
          today and discover the unparalleled convenience and comfort of renting
          a car from our trusted service. Your adventure awaits – book your
          perfect ride now and embark on a memorable journey with confidence and
          peace of mind.
        </StyledDescription>
        <StyledImg src={CarCollections} alt="cars" />
      </StyledContainer>
    </>
  );
};

export default Home;
