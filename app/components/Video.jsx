export default function Video() {
    return (
        <div className="w-full relative">
            <video
                className="absolute w-full h-screen -z-40 object-cover portrait:object-[-275px_0px]"
                src="/videos/web.mp4" 
                autoPlay 
                loop 
                playsInline 
                muted
            >
            </video>
        </div>
    )
}