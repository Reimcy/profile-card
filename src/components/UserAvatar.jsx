
export function UserAvatar() {

    return (
        <div className="relative -mt-16 mb-4 flex flex-col items-center">
            <div className="p-1.5 bg-white rounded-full">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Foto de perfil" 
                className="w-28 h-28 rounded-full object-cover shadow-md"
              />
            </div>

            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Alex Rodríguez</h2>
                <p className="text-indigo-600 font-medium text-sm uppercase tracking-wide mb-1">Fullstack Developer</p>
            
                <div className="flex items-center justify-center text-slate-500 text-sm mt-2">
                    <svg className ="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Caracas, Venezuela</span>
                </div>
            </div>
        </div>
    )
}