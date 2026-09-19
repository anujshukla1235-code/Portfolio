import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight">404 - Not Found</h2>
      <p className="text-zinc-500">Could not find the requested resource or page.</p>
      <Link 
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-10 px-8 py-2 font-medium transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
