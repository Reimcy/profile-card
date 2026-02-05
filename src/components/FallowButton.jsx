
export function FallowButton({isFollowing, onClick}) {
    
   
    /*const toggleFollow = () => {
        setIsFollowing(!isFollowing);
        if (isFollowing) {
            userData.stats.followers = (parseFloat(followers) - 0.1).toFixed(1) + 'k';
        } else {
            userData.stats.followers = (parseFloat(followers) + 0.1).toFixed(1) + 'k';
        }
    }*/
    return (
        <button onClick={onClick} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm hover:shadow active:scale-95">
            {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
    )
}