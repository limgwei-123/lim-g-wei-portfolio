export function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Lim G Wei. All rights reserved.</p>
        <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
