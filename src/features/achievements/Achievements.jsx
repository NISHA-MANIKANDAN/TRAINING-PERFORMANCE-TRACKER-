import React from 'react';
import { 
  AchievementsContainer, 
  AchievementCard, 
  AchievementIcon, 
  AchievementTitle, 
  AchievementStatus 
} from '../../ui/achievements';

const achievements = [
  { id: 1, title: 'Verified Designer', status: 'Incomplete', icon: '🎨' },
  { id: 2, title: 'Skill Graph', status: 'Incomplete', icon: '📊' },
  { id: 3, title: 'UX Certified', status: 'Incomplete', icon: '🎓' },
  { id: 4, title: 'Design Scholar', status: 'Incomplete', icon: '📚' },
  { id: 5, title: 'Assessment Ace', status: 'Incomplete', icon: '📋' },
  { id: 6, title: 'Super Streaker', status: 'Incomplete', icon: '⚡' },
  { id: 7, title: 'Book Worm', status: 'Incomplete', icon: '📖' },
  { id: 8, title: 'Design Brief Master', status: 'Incomplete', icon: '✏️' },
  { id: 9, title: 'Triple Treat', status: 'Complete', icon: '👍' },
  { id: 10, title: 'Pro Gamer', status: 'Incomplete', icon: '🎮' },
];

const Achievements = () => {
  return (
    <AchievementsContainer>
      {achievements.map(achievement => (
        <AchievementCard key={achievement.id}>
          <AchievementIcon>{achievement.icon}</AchievementIcon>
          <AchievementTitle>{achievement.title}</AchievementTitle>
          <AchievementStatus status={achievement.status}>
            {achievement.status}
          </AchievementStatus>
        </AchievementCard>
      ))}
    </AchievementsContainer>
  );
};

export default Achievements;
