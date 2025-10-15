export default function Breakpoints2() {
    return (
      <div className="relative flex items-center justify-center h-8 w-full"> {/* Mengurangi tinggi menjadi lebih kecil */}
        {/* Left Circle */}
        <div className="w-1 h-1 bg-white rounded-full absolute left-0"></div> {/* Mengurangi ukuran lingkaran */}
    
        {/* Line and Image Container */}
        <div className="flex items-center flex-grow mx-0.5"> {/* Mengurangi margin horizontal lebih lanjut */}
          {/* Left Line */}
          <div className="h-0.5 bg-white flex-grow"></div>
  
          {/* Image */}
          <img
            src="/images/breakpoints_decor_putih.png"
            alt="Breakpoints Decor"
            className="mx-0.5" // Mengurangi jarak antara gambar dan garis
          />
  
          {/* Right Line */}
          <div className="h-0.5 bg-white flex-grow"></div>
        </div>
  
        {/* Right Circle */}
        <div className="w-1 h-1 bg-white rounded-full absolute right-0"></div> {/* Mengurangi ukuran lingkaran */}
      </div>
    )
  }
  