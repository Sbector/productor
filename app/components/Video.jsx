export default function Video() {
    return (
        <div className="w-full relative">
            <video
                className="absolute w-full h-screen -z-40 object-cover"
                src="./videoProductor2026.mp4" 
                autoPlay 
                loop 
                playsInline 
                muted
            >
            </video>
        </div>
    )
}