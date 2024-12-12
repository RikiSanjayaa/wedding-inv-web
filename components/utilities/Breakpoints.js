export default function Breakpoints() {
  return (
    <div className="relative flex items-center justify-center h-20 w-full">
      {/* Left Circle */}
      <div className="w-2 h-2 bg-sakura-500 rounded-full absolute left-0"></div>

      {/* Line and Image Container */}
      <div className="flex items-center flex-grow mx-2">
        {/* Left Line */}
        <div className="h-0.5 bg-sakura-500 flex-grow"></div>

        {/* Image */}
        <img
          src="/images/breakpoints_decor.png"
          alt="Breakpoints Decor"
          className="mx-2"
        />

        {/* Right Line */}
        <div className="h-0.5 bg-sakura-500 flex-grow"></div>
      </div>

      {/* Right Circle */}
      <div className="w-2 h-2 bg-sakura-500 rounded-full absolute right-0"></div>
    </div>
  )
}