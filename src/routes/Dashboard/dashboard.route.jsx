import Sidebar from "../../components/Sidebar/sidebar.component";
import Card from "../../components/Card/card.component";
import BarChartExample from "../../components/Charts/BarChart/barChart.component";
import { useState } from "react";
import StatsCard from "../../components/StatsCard/statsCard.component";
import AreaChartt from "../../components/Charts/AreaChart/areaChart.component";
import { IoMdRefresh } from "react-icons/io";
import Dropdown from "../../components/Dropdown/dropdown.component";
import ProgressItem from "../../components/ProgressItem/progressItem.component";

import Slack from "../../assets/slack.png";
import SlackPB from "../../assets/slack-progressbar.png";
import Teams from "../../assets/msft-teams.png";
import TeamsPB from "../../assets/msft-teams-progressbar.png";
import AWS from "../../assets/aws-cloud.png";
import AWSPB from "../../assets/aws-cloud.png";
import Google from "../../assets/google-cloud.png";
import GooglePB from "../../assets/google-progressbar.png";
import Oracle from "../../assets/oracle.png";
import OraclePB from "../../assets/oracle-progressbar.png";
import GMail from "../../assets/google-gmail.png";
import GMailPB from "../../assets/gmail-progressbar.png";


const Dashboard = () => {

    const [ displayMenuItem , setDisplayMenuItem ] = useState(false);
    console.log("dashboard :::" , displayMenuItem);

    const queriesBySource = [
      {id:1 , source:"Slack" , query:"171k" , icon:<Slack /> , progressBar:<SlackPB />},
      {id:2 , source:"Microsoft Teams" , query:"21k" , icon:<Teams /> , progressBar:<TeamsPB />},
      {id:3 , source:"AWS Cloud" , query:"7.8k" , icon:<AWS /> , progressBar:<AWSPB />},
      {id:4 , source:"Google Cloud" , query:"2.1k" , icon:<Google /> , progressBar:<GooglePB />},
      {id:5 , source:"Oracle" , query:"987", icon:<Oracle /> , progressBar:<OraclePB />},
      {id:6 , source:"G Suite Gmail" , query:"809" , icon:<GMail /> , progressBar:<GMailPB />},
    ];


    const handleDisplayMenu = (val) => {
    //    console.log("val" , val);
       setDisplayMenuItem(val);
    }

    return(
        <>
        {/* Outer Container */}
        <div className="flex h-[100vh]">
            {/* Siderbar component */}
            <Sidebar onClick={handleDisplayMenu} />
            {/* MAIN CONTENT */}
            <div className={`${displayMenuItem ? "w-[85%]" : "w-[96%]" } px-5 pt-5 pb-10 h-[fit-content]`}>
              {/* PARENT CONTAINER */}
              <div className="flex flex-col gap-y-4">
               <div className="flex justify-between">
                 <p className="text-xl font-medium">Analytics</p>
                 <button className="border rounded rounded-[3px] p-0 flex items-center px-3 gap-x-1">
                    <IoMdRefresh />
                    <p className="p-0 m-0 font-medium text-[13px]">Refresh Dashboard</p>
                 </button>
               </div>
               <div className="flex flex-col gap-y-3">
                  <Dropdown />
                  {/* container 1 */}
                  <div className="flex gap-x-3">
                    <Card width="w-[20%]" title="Users">
                      <div className="flex flex-col gap-y-[15px] mt-2">
                         <StatsCard title="Total Users" number={577} border="border-blue-300" />
                         <StatsCard title="Active" number={543} border="border-blue-300" />
                         <StatsCard title="Inactive" number={34} border="border-blue-300" />
                      </div>
                    </Card>
                    <Card width="w-[80%]" title="Number of Unique Logins">
                        <div className="flex flex-col gap-y-[18px] mt-1">
                          <StatsCard number={374} />
                          <BarChartExample color="rgba(28, 168, 221, 1)" ticks={[0,4,8]} />
                        </div>
                    </Card>
                  </div>
                   {/* container 2 */}
                  <div className="flex gap-x-3">
                    <Card width="w-[50%]" title="Queries Executed in the workflow">
                      <div className="flex flex-col gap-y-[18px] mt-1">
                        <StatsCard number={"371.8k"} />
                        <BarChartExample color="#22c55e" />
                      </div>
                    </Card>
                    <Card width="w-[50%]" title="Queries by Source">
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
                    <Card width="w-[100%]" title="Avg. Response Time - Workflow">
                      <div className="flex flex-col gap-y-[16px] mt-1">
                        <StatsCard number={"10.5s"} />
                        <AreaChartt type="catmullRom" stroke="#377637" fill="#b9edc4" />
                      </div>
                    </Card>
                  </div>
                   {/* container 4 */}
                  <div  className="flex gap-x-3">
                    <Card width="w-[50%]" title="Firewall API Calls">
                      <div className="flex flex-col gap-y-[18px] mt-1">
                        <StatsCard number={"12.5k"} />
                        <BarChartExample color="#22c55e" />
                      </div>
                    </Card>
                    <Card width="w-[50%]" title="Avg. Response Time - Firewall">
                      <div className="flex flex-col gap-y-[18px] mt-1">
                        <StatsCard number={"2.47s"} />
                        <AreaChartt type="monotone" stroke="rgba(141, 211, 238, 1)" fill="rgb(165, 213, 233)" />
                      </div>
                    </Card>
                  </div>
               </div>
              </div>
            </div>
        </div> 
        </>
    );
}


export default Dashboard;