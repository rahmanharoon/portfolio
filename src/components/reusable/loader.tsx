export function Loader() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  );
}
