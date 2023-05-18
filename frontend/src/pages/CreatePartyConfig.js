import SideBar from "../components/SideBar"
import SelectWord from "../components/InviteFriends"
import medieval from "../static/medieval.png";
import InviteFriends from "../components/InviteFriends"
import SettingsPartyTop from "../components/SettingsPartyTop"

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
                <div className="flex flex-col w-full">
                    <SettingsPartyTop />
                    <SelectWord />
                </div>
            </div>
        </div>
    )
}
