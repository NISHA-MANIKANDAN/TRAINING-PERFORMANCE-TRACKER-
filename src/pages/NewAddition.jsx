import AddSkillForm from "../features/newaddition/AddSkillForm";
import SkillsTable from "../features/newaddition/SkillTable";
import { useState } from "react";

const NewAddition = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddSkillClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Skill Management</h1>
      <SkillsTable onAddSkillClick={handleAddSkillClick} />
      {showForm && <AddSkillForm onClose={handleCloseForm} />}
    </div>
  );
};

export default NewAddition;
