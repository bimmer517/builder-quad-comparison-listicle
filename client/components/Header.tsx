export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          {/* American Health Digest Logo Image */}
          <div className="h-16 w-auto overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2Ff385093ba6d847c189d3e014d0905c8a?format=webp&width=800&height=1200"
              alt="American Health Digest Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="text-xl font-extrabold text-[#1a4a3a] leading-tight uppercase tracking-tight ml-2">
            American Health Digest
          </span>
        </div>
      </div>
    </header>
  );
}
