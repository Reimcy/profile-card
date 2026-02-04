import { UserAvatar } from "./UserAvatar"
import { UserStats } from "./UserStats"
import { FallowButton } from "./FallowButton"
import { ToggleThemeButton } from "./ToggleThemeButton" 

export function ProfileCard() {

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">
            <div className="w-full justify-self-center relative top-10 max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600"></div>
                <UserAvatar/> 
                <UserStats/>
                <div className="flex gap-3 p-4">
                    <FallowButton/>
                    <ToggleThemeButton/>
                </div>
            </div>
        </div>
    )
}