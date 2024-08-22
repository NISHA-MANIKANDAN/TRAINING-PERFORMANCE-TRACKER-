
import Row from "../ui/Row";
import ProjectList from "../features/projects/ProjectList";
import ProposalProgress from "../features/projects/ProposalProgress";
import Calendar from "../features/projects/calendar";

function Projects() {
  return (
    <Row >
      <Row type="horizontal">
      <ProjectList />
      <Calendar />
      </Row>
      <ProposalProgress />
      
    </Row>
  );
}

export default Projects;
