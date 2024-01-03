export default function Video() {
    return (
        <div className="w-full relative">
            <video
                className="absolute w-full h-screen -z-40 object-cover object-[-275px_0px] md:object-center"
                src="./web.mp4" autoPlay loop muted style={{ clipPath: 'polygon(0 0, 100% 0, 100% 99.9%, 0 99.9%)' }}
                >
            </video>
        </div>
    )
}