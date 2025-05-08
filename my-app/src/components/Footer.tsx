const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer-text my-3 py-4">
    <h3 className="copyright-text mt-2 text-md-center">
    <span>&copy; {new Date().getFullYear()}  All rights reserved.</span>
      <span className="highlight">/Durak M.</span>
    </h3>
  </div>
  );
};

export default FooterText;
