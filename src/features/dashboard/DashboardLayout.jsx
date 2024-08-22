import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudentRecords } from './studentRecordsSlice';
import Card from '../../ui/card';
import { FaBook } from 'react-icons/fa';
import RewardPointsGraph from './RewardPointsGraph';

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { records, status, error, days } = useSelector((state) => state.studentRecords);

  useEffect(() => {
    dispatch(fetchStudentRecords(days));
  }, [dispatch, days]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}

      {status === 'succeeded' && (
        <div style={{ display: 'flex',gap: '20px'}}>
          {records.map((record) => (
            <div key={record._id} style={{ display: 'flex',gap: '20px'}}>
              <Card
                title="CGPA"
                value={record.cgpa}
                lastYearValue={record.lastYearCgpa}
                icon={<FaBook />}
                unit="CGPA"
              />
              <Card
                title="Attendance"
                value={record.attendancePercentage}
                lastYearValue={record.lastYearAttendance}
                icon={<FaBook />}
                unit="%"
              />
              <Card
                title="FA Percentage"
                value={record.faPercentage}
                lastYearValue={record.lastYearFaPercentage}
                icon={<FaBook />}
                unit="%"
              />
              <Card
                title="Reward Points"
                value={record.rewardPoints}
                lastYearValue={record.lastYearRewardPoints}
                icon={<FaBook />}
                unit="Points"
              />
            </div>
            
          ))}

        </div>
      )}<RewardPointsGraph />
    </div>
  );
};

export default DashboardLayout;
