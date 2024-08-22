import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TechnicalTable from "../features/bookings/TechnicalTable"
import RankDisplay from "../features/bookings/RankBox";
function TechnicalSkills() {
  return (
    <Row >
      <Heading as="h1">Technical Progress Details</Heading>
      <TechnicalTable />
      <Row type="horizontal">
      <RankDisplay percentage="25th" label="RANK" />
      <RankDisplay percentage="80th" label="C programming" />
      <RankDisplay percentage="10th" label="JAVA" />
      <RankDisplay percentage="2" label="DSA" />

      </Row>
    </Row>
  );
}

export default TechnicalSkills;
