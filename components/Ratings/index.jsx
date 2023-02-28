import StudentCard from "./studentCard";
import Container from "./style";
import ratings from "../Mock/ratings"


const RatingsComponent = () => {
  return (
    <Container>
      <Container.Top>Talabalar reytingi</Container.Top>
      <Container.Bottom>
       <Container.Sciences>
        <h1>FIO</h1>
        <p>1-blok</p>
       </Container.Sciences>
       <Container.BottomDesc>
          <div>
            {ratings.map((value) => (
              <StudentCard data={value} key={value.id} />
            ))}
          </div>
        </Container.BottomDesc>
      </Container.Bottom>
    </Container>
  );
};

export default RatingsComponent;
