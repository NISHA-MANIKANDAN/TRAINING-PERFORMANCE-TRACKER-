import styled from 'styled-components';

const Table = () => {
  const SkillsBox = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px 20px 0 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: 900px;
    margin-top: 25px;
    
    margin-left:10px;
  `;

  const SkillsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 20px;
  `;

  const Title = styled.h2`
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  `;

  const Progress = styled.span`
    font-size: 0.9rem;
    color: #999;
  `;

  const SkillsList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 0;
  `;

  const SkillsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }
  `;

  const SkillIcon = styled.div`
    width: 30px;
    height: 30px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
  `;

  const SkillName = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    flex-grow: 1;
  `;

  const SkillStatus = styled.div`
    display: flex;
    align-items: center;
  `;

  const Status = styled.span`
    font-size: 0.9rem;
    color: #999;
    margin-right: 15px;
  `;

  const Hours = styled.span`
    font-weight: bold;
  `;

  return {
    SkillsBox,
    SkillsHeader,
    Title,
    Progress,
    SkillsList,
    SkillsItem,
    SkillIcon,
    SkillName,
    SkillStatus,
    Status,
    Hours,
  };
};

export default Table;
