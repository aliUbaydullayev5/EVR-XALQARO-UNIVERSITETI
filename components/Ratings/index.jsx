import StudentCard from "./studentCard";
import Container from "./style";
import ratings from "../Mock/ratings";

const RatingsComponent = () => {
  return (
    <Container>
      <Container.Top className="nocopy">Talabalar reytingi</Container.Top>
      <Container.Bottom>
        <Container.Sciences>
          <h1 className="nocopy">FIO</h1>
          <p className="nocopy">1-blok</p>
          <p className="nocopy">2-blok</p>
          <b className="nocopy">Matematika</b>
          <p className="nocopy">Ona tili</p>
          <p className="nocopy">Tarix</p>
          <b className="nocopy">Natija</b>
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
