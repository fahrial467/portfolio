const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">MFA</h1>
      <div className="flex gap-8 font-semibold">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/fahrial467?tab=repositories">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-fahrial-ababil-46b9631a1/?skipRedirect=true">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/fahrial_36/?next=%2Femails%2Femails_sent">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
