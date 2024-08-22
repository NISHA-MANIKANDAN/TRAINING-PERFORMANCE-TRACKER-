import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter"
function Dashboard() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Academic details</Heading>
      <DashboardFilter />
    </Row>
    <DashboardLayout />
    </>
  );
}

export default Dashboard;
