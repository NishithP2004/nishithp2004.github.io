import ProfileCard from "./ProfileCard"

function Main() {
    return (
        <main className="w-2/5 border-r-1 border-green-500 h-full p-2 hidden sm:block bg-gradient-to-b from-slate-900 via-gray-800 to-black">
            <div className="p-2 flex flex-col justify-center items-center text-center m-auto h-full w-full">
                <ProfileCard
                    name="Nishith P"
                    title="Tech Wiz 🪄"
                    handle="NishithP2004"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="avatar.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                    className="scale-75 w-1/2"
                />
            </div>
        </main>
    )
}

export default Main