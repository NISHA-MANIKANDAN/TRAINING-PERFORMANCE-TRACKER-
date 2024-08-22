import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../ui/Filter';
import { setDays, fetchStudentRecords } from './studentRecordsSlice';

function DashboardFilter() {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.studentRecords.days);

  useEffect(() => {
    dispatch(fetchStudentRecords(days));
  }, [dispatch, days]);

  const handleFilterChange = (event) => {
    dispatch(setDays(event.target.value));
  };

  return (
    <Filter
      filterField='last'
      value={days}
      onChange={handleFilterChange}
      options={[
        { value: '7', label: 'Last 7 days' },
        { value: '30', label: 'Last 30 days' },
        { value: '90', label: 'Last 90 days' },
      ]}
    />
  );
}

export default DashboardFilter;
