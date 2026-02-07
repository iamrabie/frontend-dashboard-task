import Slack from "../../assets/slack.png";
import Oracle from "../../assets/oracle.png";
import AWS from "../../assets/aws-cloud.png";
import Teams from "../../assets/msft-teams.png";
import GMail from "../../assets/google-gmail.png";
import Google from "../../assets/google-cloud.png";
import AWSPB from "../../assets/aws-progressbar.png";
import GMailPB from "../../assets/gmail-progressbar.png";
import SlackPB from "../../assets/slack-progressbar.png";
import OraclePB from "../../assets/oracle-progressbar.png";
import GooglePB from "../../assets/google-progressbar.png";
import TeamsPB from "../../assets/msft-teams-progressbar.png";


const ProgressItem = () => {

    const queriesBySource = [
      {id:1 , source:"Slack" , query:"171k" , icon:Slack , progressBar:SlackPB},
      {id:2 , source:"Microsoft Teams" , query:"21k" , icon:Teams , progressBar:TeamsPB},
      {id:3 , source:"AWS Cloud" , query:"7.8k" , icon:AWS , progressBar:AWSPB},
      {id:4 , source:"Google Cloud" , query:"2.1k" , icon:Google , progressBar:GooglePB},
      {id:5 , source:"Oracle" , query:"987", icon:Oracle , progressBar:OraclePB},
      {id:6 , source:"G Suite Gmail" , query:"809" , icon:GMail , progressBar:GMailPB},
    ];

    return(
        <>
           {queriesBySource?.map((item) => {
            return(
            <div className="flex justify-between">
                <div className="flex gap-x-1.5">
                 <img src={item.icon} alt={item.source} className="object-cover border p-[2px] bg-gray-100 rounded-md h-6 w-6"/>
                 <p className="text-[12px] font-semibold self-center">{item.source}</p>
                </div>
                <div className="flex gap-x-7 items-center">
                 <img src={item.progressBar} alt={item.source} className="h-[3.5px] object-cover" />  
                 <p className="text-[12px] font-semibold self-center">{item.query}</p>
                </div>
            </div>
            );
        })}
        </>
    );
}


export default ProgressItem;