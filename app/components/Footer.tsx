const Footer = () => {
  return (
    <footer className="py-4 flex items-center gap-2 justify-center">
      <p>
        Built with{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/nodetec/ublog"
          rel="noreferrer noopener"
        >
          Sovereign Traveler
        </a>
      </p>
      <GitHubStars />
    </footer>
  );
};


export default Footer;
