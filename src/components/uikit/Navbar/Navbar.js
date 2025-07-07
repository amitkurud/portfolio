import { NavbarPopover } from "./NavbarPopover";
import clsx from "clsx";
import { ThemeButton } from "components/shared";

function NavbarLogo({ children }) {
  return children;
}

function NavbarRight({ children }) {
  return (
    <div className="inline-flex gap-x-8 items-center">
      <div className="gap-x-8 items-center hidden md:inline-flex">
        {children}
      </div>
      <ThemeButton />
      <NavbarPopover>{children}</NavbarPopover>
    </div>
  );
}

function NavbarLeft({ children }) {
  return (
    <div className="inline-flex gap-x-0 items-center">
      <div className="gap-x-8 items-center hidden md:inline-flex">
        {children}
      </div>
      <ThemeButton />
      <NavbarPopover>{children}</NavbarPopover>
    </div>
  );
}

export function Navbar({ className, children }) {
  return (
    <nav
      className={clsx(
        "sticky top-0 flex gap-x-4 items-center justify-center md:justify-between pt-4 pb-2 text-secondary-900 dark:text-secondary-200 bg-inherit px-4 md:px-8 backdrop-blur-xs opacity-90",
        className,
      )}
    >
      {children}
    </nav>
  );
}

Navbar.Logo = NavbarLogo;
Navbar.Right = NavbarRight;
Navbar.Left = NavbarLeft;
