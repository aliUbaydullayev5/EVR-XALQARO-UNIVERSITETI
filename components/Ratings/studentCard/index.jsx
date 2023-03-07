import Container from "./style";


const StudentCard = ({ data = {} }) => {
  const { id,name,firstBlock,secondBlock,mathematics,motherTongue,history,result,lastname } = data;

  return (
    <Container>
     <h1>{id} <p>{lastname} {name}</p> </h1>
     <b>{firstBlock}</b>
     <b>{secondBlock}</b>
     <h2>{mathematics}</h2>
     <b>{motherTongue}</b>
     <b>{history}</b>
     <h2>{result}</h2>
    </Container>
  );
};

export default StudentCard
;
