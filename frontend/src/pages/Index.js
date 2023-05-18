import TopBar from "../components/TopBar"
import heroImage from '../static/Hero_image.png';

export default function LoginPage(){
    return(
        <>
            <TopBar/>
                <div className="flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${heroImage})`,
                    height: 'calc(100vh - 64px)' // soustraire la hauteur de la barre latérale
                  }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">NEXUS</h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-5">
                    Bienvenue sur Nexus, une platerforme de jeux rôle multijoueurs ou l intelligence artificiel est votre assistant et maître du jeux. Seul votre imagination est votre limite
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Play
                  </button>
            </div>
        </>
    )
}