export default function BigQuote({ children }) {
  return (
    <section className="flex justify-center items-center py-6">
      <div className="relative text-2xl font-light text-neutral-100 italic my-12">
        <div className="absolute md:inset-[-10px] md:inset-x-12 md:inset-y-3 inset-10 bg-yellowgreenlight md:opacity-15 opacity-25 z-0 blur-3xl" />
        <div className="relative z-10  mx-auto max-w-[90%]">{children}</div>
      </div>
    </section>
  );
}
