const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer-text">
    <h3 className="copyright-text mt-2">
      <span>Copyright © {currentYear}</span>
      <span className="highlight">/Durak M.</span>
    </h3>
  </div>
  );
};

export default FooterText;
