import { SkipNavLink } from "@agney/skip-nav";
import { NavLink } from "components/uikit";
import { Navbar } from "components/uikit/Navbar";
import LogoSvg from "images/logo.svg";
import Link from "next/link";

export const HeadNav = () => {
  return (
    <>
      <SkipNavLink className="text-gray-50 dark:text-gray-700 focus:data-reach-skip-link:bg-slate-600 dark:focus:data-reach-skip-link:bg-slate-200" />
      <div className="sticky top-0 z-50">
        <Navbar className="max-w-7xl mx-auto px-4">
          <Navbar.Logo>
            <Link
              href="/"
              className="mr-auto -rotate-6 hover:rotate-0 transition-transform duration-300"
            >
              <LogoSvg
                width={50}
                className="text-primary-600 dark:text-primary-400"
                title="Home"
              />
            </Link>
          </Navbar.Logo>
          <Navbar.Right className="space-x-6">
            <NavLink
              as={Link}
              href="/experience"
              className="text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Experience
            </NavLink>
            <NavLink
              as="a"
              href="https://github.com/amitkurud?tab=repositories"
              target="_blank"
              className="text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              as={Link}
              href="/blog"
              className="text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Blog
            </NavLink>
          </Navbar.Right>
        </Navbar>
      </div>
    </>
  );
};
