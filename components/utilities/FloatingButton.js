export default function FloatingButton({ isPlaying, togglePlay }) {

  return (
    <button
      onClick={togglePlay}
      className="fixed top-6 right-6 bg-sakura-300 text-white p-4 rounded-full shadow-soft-sakura hover:bg-sakura-100 focus:outline-none focus:ring-2 focus:ring-sakura-100"
    >
      <img
        src={isPlaying ? "/images/pause.png" : "/images/play.png"}
        alt={isPlaying ? "Pause BGM" : "Play BGM"}
        className="w-6 h-6"
      />
    </button>
  );
}