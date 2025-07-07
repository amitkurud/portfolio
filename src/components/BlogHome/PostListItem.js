import { DateString } from "./DateString";
import Link from "next/link";

export function PostListItem({ meta, slug }) {
  return (
    <div className="border-current border-red-700">
      <Link
        href={{
          pathname: `/blog/${slug}`,
          query: { title: meta.title },
        }}
      >
        <article className="flex border-red-400 flex-col gap-y-3">
          <header className="flex flex-col gap-y-0.5">
            <h3 className="text-xl text-balance">{meta.title}</h3>
            <DateString className="text-sm text-gray-500 dark:text-gray-400">
              {meta.date}
            </DateString>
          </header>
          <p className="text-gray-600 dark:text-gray-300 wrap-anywhere">
            {meta.excerpt || meta.description}
          </p>
        </article>
      </Link>
    </div>
  );
}
