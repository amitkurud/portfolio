import { Footer, HeadNav } from "components/HomePage";
import "prismjs/themes/prism-tomorrow.css";

function BlogLayout({ children }) {
  return (
    <div className="h-full grid grid-rows-[3rem_1fr] overflow-y-auto">
      <HeadNav />
      {children}
      <Footer />
    </div>
  );
}

export default BlogLayout;
