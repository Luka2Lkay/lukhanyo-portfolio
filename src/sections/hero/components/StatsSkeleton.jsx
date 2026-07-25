function StatsSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-pulse"
        >
          <div className="mx-auto h-8 w-16 rounded bg-slate-700/50" />
          <div className="mx-auto mt-4 h-4 w-24 rounded bg-slate-700/50" />
        </div>
      ))}
    </div>
  );
}

export default StatsSkeleton;
