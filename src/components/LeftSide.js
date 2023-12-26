import { MdOutlineDashboard ,MdInventory2,MdOutlinePayments} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

export const LeftSideContainer = () => {
  return (
    <>
      <div className="leftSideBar ">
        <div className="sideContent center">
          <span className="content_logo">
            <MdOutlineDashboard size="20px "/>
          </span>
          <h3>Dashboard</h3>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
          <MdInventory2 />

          </span>
          <h5>Risk management</h5>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
          <MdOutlinePayments />

          </span>
          <h5>payment</h5>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
            <MdInventory2 />
          </span>
          <h5>Inventory</h5>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
          <CgProfile />
          </span>
          <h5>Profile</h5>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
          <CgProfile />
          </span>
          <h5>Employess</h5>
        </div>
        <div className="sideContent center">
          <span className="content_logo">
          <TbBrandGoogleAnalytics />
          </span>
          <h5>Analysis</h5>
        </div>
      </div>
    </>
  );
};
