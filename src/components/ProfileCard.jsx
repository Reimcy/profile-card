import { UserAvatar } from "./UserAvatar"
import { UserStats } from "./UserStats"
import { FollowButton } from "./FollowButton"
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
    const [Followers, setFollowers] = useState(parseFloat(userData.stats.followers));

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing)
        if (isFollowing) {
            setFollowers(() => Followers - 0.1);
        } else {
            setFollowers(() => Followers + 0.1);
        }
    }
    
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">
            <div className="w-full justify-self-center relative top-10 max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600"></div>
                <UserAvatar name={userData.name} role={userData.role} img={userData.img} ubication={userData.ubication}/> 
                <UserStats porjects={userData.stats.projects} followers={Followers} rank={userData.stats.rank}/>
                <div className="flex gap-3 p-4">
                    <FollowButton isFollowing={isFollowing} onClick={handleFollowClick}/>
                    <ToggleThemeButton/>
                </div>
            </div>
        </div>
    )
}