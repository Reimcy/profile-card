import { UserAvatar } from "./UserAvatar"
import { UserStats } from "./UserStats"
import { FallowButton } from "./FallowButton"
import { ToggleThemeButton } from "./ToggleThemeButton" 
import {useState} from "react"

const userData = {
  name: "Juan Perez",
  role: "Desarrollador Web",
  img: "https://i.pravatar.cc/300",
  ubication: "Madrid, España",
  stats: {
    followers: "5.2k",
    projects: 12,
    rank: "8.5"
  }
}

export function ProfileCard() {

    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing)
        if (isFollowing) {
            userData.stats.followers = (parseFloat(userData.stats.followers) - 0.1).toFixed(1) + 'k';
        } else {
            userData.stats.followers = (parseFloat(userData.stats.followers) + 0.1).toFixed(1) + 'k';
        }
    }
    
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">
            <div className="w-full justify-self-center relative top-10 max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600"></div>
                <UserAvatar name={userData.name} role={userData.role} img={userData.img} ubication={userData.ubication}/> 
                <UserStats stats={userData.stats}/>
                <div className="flex gap-3 p-4">
                    <FallowButton isFollowing={isFollowing} onClick={handleFollowClick}/>
                    <ToggleThemeButton/>
                </div>
            </div>
        </div>
    )
}