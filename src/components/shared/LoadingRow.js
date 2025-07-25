import clsx from "clsx";

export function LoadingRow({ colCount = 1 }) {
  return (
    <div
      style={{ "--col-count": colCount }}
      className={clsx(
        "h-4 bg-slate-300 dark:bg-slate-700 rounded-sm",
        "col-[span_var(--col-count)/span_var(--col-count)]",
      )}
    />
  );
}
