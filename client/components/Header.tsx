export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200" style={{ backgroundColor: "#E5EADD" }}>
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          {/* American Health Digest Logo Image */}
          <div className="h-14 w-14 rounded-full overflow-hidden border border-gray-300 bg-white shadow-sm">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2Fa19b056ae0f84680b65657ab7214006a?format=webp&width=100" 
              alt="American Health Digest Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-[#1a4a3a] leading-tight uppercase tracking-tight">American Health</span>
            <span className="text-lg font-bold text-[#1a4a3a] leading-tight uppercase tracking-widest opacity-80">Digest</span>
          </div>
        </div>
      </div>
    </header>
  );
}
