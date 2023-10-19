import { DashboardContainer } from 'containers';
import React from 'react';
import { WithLayout } from 'components';

const Dashboard: React.FC = () => {
  return <DashboardContainer />;
};

export const DashboardPage = WithLayout(Dashboard);
