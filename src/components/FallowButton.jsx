import { useState } from "react"

export function FallowButton() {
    const [isFollowing, setIsFollowing] = useState(false);
    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <button onClick={toggleFollow} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm hover:shadow active:scale-95">
            {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
    )
}