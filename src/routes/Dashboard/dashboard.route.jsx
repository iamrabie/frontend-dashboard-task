import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

import Card from "../../components/Card/card.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Dropdown from "../../components/Dropdown/dropdown.component";
import StatsCard from "../../components/StatsCard/statsCard.component";
import AreaChartt from "../../components/Charts/AreaChart/areaChart.component";
import ProgressItem from "../../components/ProgressItem/progressItem.component";
import BarChartExample from "../../components/Charts/BarChart/barChart.component";


const Dashboard = () => {
  const [displayMenuItem, setDisplayMenuItem] = useState(false);

  //BAR CHARTS RELOAD STATES
  const [onReloadChart1, setOnReloadChart1] = useState(false);
  const [onReloadChart2, setOnReloadChart2] = useState(false);
  const [onReloadChart3, setOnReloadChart3] = useState(false);

  //AREA CHARTS RELOAD STATES
  const [onReloadAreaChart1, setOnReloadAreaChart1] = useState(false);
  const [onReloadAreaChart2, setOnReloadAreaChart2] = useState(false);

  //RELOADING WHOLE DASHBOARD
  const [onReloadDashboard, setOnReloadDashboard] = useState(false);



  //FUNCTIONS
  const handleDisplayMenu = (val) => {
    setDisplayMenuItem(val);
  };

  const handleResetChart1 = (val) => {
    setOnReloadChart1(val);
  };

  const handleResetChart2 = (val) => {
    setOnReloadChart2(val);
  };

  const handleResetChart3 = (val) => {
    setOnReloadChart3(val);
  };

  const handleResetAreaChart1 = (val) => {
    setOnReloadAreaChart1(val);
  };

  const handleResetAreaChart2 = (val) => {
    setOnReloadAreaChart2(val);
  };

  //reloading the analytics dashboard
  const handleAnalyticsDashboard = () => {
    setOnReloadDashboard(true);
  };

  const handleResetDashboard = (val) => {
    setOnReloadDashboard(val);
  };

  return (
    <>
      {/* Outer Container */}
      <div className="flex h-[100vh]">
        {/* Siderbar component */}
        <Sidebar onClick={handleDisplayMenu} />
        {/* MAIN CONTENT */}
        <div
          className={`${displayMenuItem ? "w-[85%]" : "w-[96%]"} px-5 pt-5 pb-10 h-[fit-content]`}
        >
          <div className="flex flex-col gap-y-4">
            {/* PARENT CONTAINER */}
            {/* refresh dashboard */}
            <div className="flex justify-between">
              <p className="text-xl font-medium">Analytics</p>
              <button className="border rounded rounded-[3px] p-0 flex items-center px-3 gap-x-1">
                <IoMdRefresh />
                <p
                  className="p-0 m-0 font-medium text-[13px]"
                  onClick={handleAnalyticsDashboard}
                >
                  Refresh Dashboard
                </p>
              </button>
            </div>

            <div className="flex flex-col gap-y-3">
              {/* date filter */}
              <Dropdown />
              {/* container 1 */}
              <div className="flex gap-x-3">
                <Card
                  width="w-[20%]"
                  title="Users"
                  onClick={() => {
                    console.log("you reloaded");
                  }}
                >
                  <div className="flex flex-col gap-y-[15px] mt-2">
                    <StatsCard
                      title="Total Users"
                      number={577}
                      border="border-blue-300"
                    />
                    <StatsCard
                      title="Active"
                      number={543}
                      border="border-blue-300"
                    />
                    <StatsCard
                      title="Inactive"
                      number={34}
                      border="border-blue-300"
                    />
                  </div>
                </Card>
                <Card
                  width="w-[80%]"
                  title="Number of Unique Logins"
                  onClick={() => {
                    setOnReloadChart1(true);
                  }}
                >
                  <div className="flex flex-col gap-y-[18px] mt-1">
                    <StatsCard number={374} />
                    <BarChartExample
                      color="rgba(28, 168, 221, 1)"
                      onReload={onReloadChart1}
                      onReset={handleResetChart1}
                      onReloadDashboard_={onReloadDashboard}
                      onResetDashboard_={handleResetDashboard}
                    />
                  </div>
                </Card>
              </div>


              {/* container 2 */}
              <div className="flex gap-x-3">
                <Card
                  width="w-[50%]"
                  title="Queries Executed in the workflow"
                  onClick={() => {
                    setOnReloadChart2(true);
                  }}
                >
                  <div className="flex flex-col gap-y-[18px] mt-1">
                    <StatsCard number={"371.8k"} />
                    <BarChartExample
                      color="#22c55e"
                      onReload={onReloadChart2}
                      onReset={handleResetChart2}
                      onReloadDashboard_={onReloadDashboard}
                      onResetDashboard_={handleResetDashboard}
                    />
                  </div>
                </Card>
                <Card
                  width="w-[50%]"
                  title="Queries by Source"
                  onClick={() => {
                    console.log("you reloaded");
                  }}
                >
                  <div className="flex flex-col gap-y-[8px] mt-3">
                    <div className="flex justify-between text-[12px] font-medium text-gray-500 border-b pb-1 border-gray-200">
                      <p>Source</p>
                      <p>Queries</p>
                    </div>
                    <ProgressItem />
                  </div>
                </Card>
              </div>


              {/* container 3 */}
              <div>
                <Card
                  width="w-[100%]"
                  title="Avg. Response Time - Workflow"
                  onClick={() => {
                    setOnReloadAreaChart1(true);
                  }}
                >
                  <div className="flex flex-col gap-y-[16px] mt-1">
                    <StatsCard number={"10.5s"} />
                    <AreaChartt
                      type="catmullRom"
                      stroke="#377637"
                      fill="#b9edc4"
                      onReload={onReloadAreaChart1}
                      onReset={handleResetAreaChart1}
                      onReloadDashboard_={onReloadDashboard}
                      onResetDashboard_={handleResetDashboard}
                    />
                  </div>
                </Card>
              </div>

              
              {/* container 4 */}
              <div className="flex gap-x-3">
                <Card
                  width="w-[50%]"
                  title="Firewall API Calls"
                  onClick={() => {
                    setOnReloadChart3(true);
                  }}
                >
                  <div className="flex flex-col gap-y-[18px] mt-1">
                    <StatsCard number={"12.5k"} />
                    <BarChartExample
                      color="#22c55e"
                      onReload={onReloadChart3}
                      onReset={handleResetChart3}
                      onReloadDashboard_={onReloadDashboard}
                      onResetDashboard_={handleResetDashboard}
                    />
                  </div>
                </Card>
                <Card
                  width="w-[50%]"
                  title="Avg. Response Time - Firewall"
                  onClick={() => {
                    setOnReloadAreaChart2(true);
                  }}
                >
                  <div className="flex flex-col gap-y-[18px] mt-1">
                    <StatsCard number={"2.47s"} />
                    <AreaChartt
                      type="monotone"
                      stroke="rgba(141, 211, 238, 1)"
                      fill="rgb(165, 213, 233)"
                      onReload={onReloadAreaChart2}
                      onReset={handleResetAreaChart2}
                      onReloadDashboard_={onReloadDashboard}
                      onResetDashboard_={handleResetDashboard}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
