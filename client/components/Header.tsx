export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2">
          {/* Health Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-blue-600"
            fill="currentColor"
          >
            <path d="M16 2L28 8V16L16 22L4 16V8L16 2Z" />
            <path d="M16 12L22 15V21L16 24L10 21V15L16 12Z" opacity="0.6" />
          </svg>

          {/* HealthCompare Logo Text */}
          <span className="text-2xl font-bold text-slate-900">HealthCompare</span>
        </div>
      </div>
    </header>
  );
}
