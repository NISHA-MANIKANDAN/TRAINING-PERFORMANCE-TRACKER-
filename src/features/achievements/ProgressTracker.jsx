import React from 'react';
import { 
  ProgressTrackerContainer, 
  ProgressHeader, 
  ProgressText, 
  ProgressLink,
  ProgressBarWrapper, 
  ProgressBar, 
  ProgressBarFill, 
  MilestonesContainer, 
  Milestone, 
  MilestoneTitle, 
  MilestoneDetails, 
  Protip 
} from '../../ui/progresstracker';

const ProgressTracker = () => {
  const completedReviews = 25;
  const milestones = [
    {
      id: 1,
      title: 'Reviews start',
      progress: 100,
      dueDate: 'Dec 11',
      selfReviews: 50,
      managerReviews: 0,
      shareFinalize: 0,
    },
    {
      id: 2,
      title: 'Select peers',
      progress: 50,
      dueDate: 'Dec 11',
      selfReviews: 0,
      managerReviews: 0,
      shareFinalize: 0,
    },
    {
      id: 3,
      title: 'Approve peers',
      progress: 0,
      dueDate: 'Dec 31',
      selfReviews: 0,
      managerReviews: 0,
      shareFinalize: 0,
    },
  ];

  return (
    <ProgressTrackerContainer>
      <ProgressHeader>
        <ProgressText>Completed reviews ({completedReviews}%)</ProgressText>
        <ProgressBarWrapper>
          <ProgressBar>
            <ProgressBarFill style={{ width: `${completedReviews}%` }} />
          </ProgressBar>
        </ProgressBarWrapper>
      </ProgressHeader>
      <ProgressLink href="#">Review milestones</ProgressLink>

      <MilestonesContainer>
        {milestones.map(milestone => (
          <Milestone key={milestone.id}>
            <MilestoneTitle>
              {milestone.title}
            </MilestoneTitle>
            <MilestoneDetails>
              <span>by {milestone.dueDate}</span>
              <span>Self reviews: {milestone.selfReviews}%</span>
              <span>Manager reviews: {milestone.managerReviews}%</span>
              <span>Share and finalize: {milestone.shareFinalize}%</span>
            </MilestoneDetails>
            <ProgressBarWrapper>
              <ProgressBar>
                <ProgressBarFill style={{ width: `${milestone.progress}%` }} />
              </ProgressBar>
            </ProgressBarWrapper>
          </Milestone>
        ))}
      </MilestonesContainer>
      <Protip>
        Protip: Do any participants in this cycle have multiple managers? Assign an additional manager...
      </Protip>
    </ProgressTrackerContainer>
  );
};

export default ProgressTracker;
