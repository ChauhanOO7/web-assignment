import GroupComponent from "../components/GroupComponent";
import SidebarContent from "../components/SidebarContent";
import StructureDescription from "../components/StructureDescription";
import Pointer from "../components/Pointer";
import "./CollapsedJourneyBoard.css";

const CollapsedJourneyBoard = () => {
  return (
    <div className="collapsed-journey-board">
      <GroupComponent
        logo1="/logo-1@2x.png"
        group1098="/group-1098@2x.png"
        vector="/vector@2x.png"
        ellipseDiv={false}
      />
      <main className="main-content">
        <section className="sidebar-content-parent">
          <SidebarContent />
          <StructureDescription />
        </section>
        <Pointer />
      </main>
    </div>
  );
};

export default CollapsedJourneyBoard;
