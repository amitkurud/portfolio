import GithubIcon from "images/social-media/github.svg";
import TwitterIcon from "images/social-media/twitter.svg";

const SocialMediaLink = ({ href, iconEl, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-8 h-8 text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 flex items-center justify-center rounded-full hover:bg-white/10"
    >
      {iconEl}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="glass-effect py-4 mt-auto">
      <div>
        <div className="flex items-center justify-center space-x-6">
          <SocialMediaLink
            href="https://github.com/amitkurud"
            iconEl={<GithubIcon width="1.5rem" />}
            ariaLabel="My Github Profile"
          />
          <SocialMediaLink
            href="https://twitter.com/amitkurud"
            iconEl={<TwitterIcon width="1.5rem" />}
            ariaLabel="My Twitter Profile"
          />
        </div>
        <p className="text-center mt-4 text-sm text-secondary-600 dark:text-secondary-400">
          © {new Date().getFullYear()} Amit Kurud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
