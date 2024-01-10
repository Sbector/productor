export default function Video() {
    return (
        <div className="w-full relative">
            <video
                className="absolute blur-sm w-full h-screen -z-40 object-cover"
                src="./home.mp4" 
                autoPlay 
                loop 
                playsInline 
                muted
            >
            </video>
        </div>
    )
}