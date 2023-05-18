import SideBar from "../components/SideBar"
import medieval from "../static/medieval.png";
import ResumePartyBot from "../components/ResumePartyBot"
import ResumePartyTop from "../components/ResumePartyTop"

export default function CreatePartyConfig(){
    return(
        <div className="flex">
            <SideBar />
            <div className="flex flex-grow h-screen bg-gray-100">
                <div className="px-4 py-4 w-1/3">
                    <img
                    className="h-full w-full rounded-[20px] object-cover"
                    src={medieval}
                    />
                </div>
                <div className="flex flex-col w-full mr-4">
                    <ResumePartyTop />
                    <ResumePartyBot />
                </div>
            </div>
        </div>
    )
}
