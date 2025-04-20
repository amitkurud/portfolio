import "./global.css";
import { Providers } from "./providers";
import "@agney/skip-nav/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Work_Sans } from "next/font/google";

const workSansFont = Work_Sans({
  variable: "--font-heading",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Amit",
  description: "A portfolio for Amit Kurud",
  keywords: ["Frontend Developer", "Developer", "Engineer", "Portfolio"],
  creator: "Amit",
  metadataBase: new URL("https://amitkurud.com"),
};

export const viewport = {
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${workSansFont.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full bg-secondary-50 selection:bg-primary-200 dark:bg-secondary-900 dark:selection:bg-primary-500">
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
