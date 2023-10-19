import React from "react";
import { DashboardContainer } from "./style";
import { Sidebar } from "./SidebarView";
export const DashboardView = () => {
  return (
    <DashboardContainer>
      <Sidebar/>
    </DashboardContainer>
  );
};
