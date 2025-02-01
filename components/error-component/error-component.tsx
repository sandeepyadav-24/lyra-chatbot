type ErrorComponentProps = {
  error: string;
};
export default function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 border border-red-300 rounded-lg bg-app-secondary">
      <svg
        className="w-12 h-12 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-red-700">Error</h2>
      <p className="text-red-600">{error?.slice(0, 50)}</p>
    </div>
  );
}
