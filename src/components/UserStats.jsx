
export function UserStats({stats}) {

    return(
        <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-4 mb-6">
            <div className="text-center border-r border-slate-100 last:border-0">
                <span className="block text-xl font-bold text-slate-800">{stats.followers}</span>
                <span className="text-xs text-slate-500 uppercase font-medium">Seguidores</span>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
                <span className="block text-xl font-bold text-slate-800">{stats.projects}</span>
                <span className="text-xs text-slate-500 uppercase font-medium">Proyectos</span>
            </div>
            <div className="text-center">
                    <span className="block text-xl font-bold text-slate-800">{stats.rank}</span>
                <span className="text-xs text-slate-500 uppercase font-medium">Likes</span>
            </div>
        </div>
    )
}