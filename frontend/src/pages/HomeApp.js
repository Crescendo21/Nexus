import SideBar from "../components/SideBar"
import SelectWord from "../components/SelectWord"
import HeaderApp from "../components/HeaderAppHome"

export default function HomeApp(){
    return(
        <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full h-screen">
                <HeaderApp />
                <h2 className="font-['Ubuntu'] text-4xl font-bold mt-6 mb-4 text-center">SELECT YOUR WORLD</h2>
                <div className="h-px bg-black bg-opacity-20 w-full"></div>
                <SelectWord />
            </div>
        </div>
    )
}
