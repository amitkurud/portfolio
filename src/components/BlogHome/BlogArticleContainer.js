export function BlogArticleContainer({ children }) {
  return (
    <article className="border-red-300 mx-auto prose lg:prose-xl dark:prose-invert px-6 max-w-[min(65ch,100%)]">
      {children}
    </article>
  );
}
