import DataImage, { listProyek, listTools } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero xl:py-26 grid lg:grid-cols-2 grid-cols-1 items-center"
        id="beranda"
      >
        <div className="lg:items-center animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center bg-zinc-800 w-fit rounded-2xl p-4">
            <q>Ketekukan dan keterampilan adalah kunci.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Muhammad Fahrial Ababil
          </h1>
          <p className="text-base/loose mb-8 opacity-50 ">
            Saya lulusan Teknik Informatika Universitas Indraprasta PGRI, Saat
            ini saya sudah memiliki pengalaman bekerja di bidang konstruksi dan
            manufaktur sebagai Construction Engineer, Estimator Engineer, dan
            Operator Produksi. Selain itu saya mampu menjalankan tugas sebagai
            IT Support seperti trouble shooting, perbaikan dan instalasi
            hardware software komputer dan printer, instalasi LAN, serta coding
            HTML, CSS, Bootsrap, Tailwind dan JavaScript. Saya juga mempunyai
            hobi editing video, foto dan gambar, serta olahraga Badminton,
            joging, dan bersepeda.
          </p>
          <div className="flex items-center gap-4 ">
            <a
              href="./public/assets/CV Fahrial Ababil ATS V3.1.pdf"
              className="bg-sky-500 p-4 rounded-2xl hover:bg-sky-400 font-bold"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-600 p-4 rounded-2xl hover:bg-zinc-500 font-bold"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="flex lg:w-lg lg:justify-self-end w-full mt-5 lg:mt-0 animate__animated animate__fadeInUp animate__delay-3s "
        />
      </div>
      {/* end hero section */}

      {/* About Section (tentang) */}
      <div className="Tentang py-40" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once=""
        >
          <p className="text-base/loose mb-10">
            Hi, Perkenalkan saya Muhammad Fahrial Ababil, seorang Construction
            Engineer dan Estimator Engineer di PT. Wijaya Karya Industri dan
            Konstruksi dengan pengalaman lebih dari 1 tahun di Construction
            Enginner dan 6 Tahun di Estimator Engineer. Saya memiliki keahlian
            dalam perencanaan metode instalasi, pembuatan kinematik 2D dan 3D,
            dan estimasi proyek konstruksi baja. Selain itu, saya juga memiliki
            kemampuan dalam IT Support dan ketertarikan dalam dunia teknologi
            khususnya komputer dan pemrograman.
          </p>
          <div className="flex items-center sm:gap-8">
            <div>
              <h1 className="text-4xl mb-1">
                6<span className="text-sky-400">± Tahun</span>
              </h1>
              <p className="font-semibold">Estimator Enginner</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-sky-400">± Tahun</span>
              </h1>
              <p className="font-semibold">Construction Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* tools */}
      <div className="tools ">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once=""
        >
          Aplikasi yang Dikuasi
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once=""
        >
          beberapa Aplikasi yang sering saya gunakan sebagai penunjang pekerjaan
          dan tools yang dapat saya gunakan.
        </p>
        <div className="tools-box mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 hover:bg-zinc-800 rounded-md group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once=""
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end Section (tentang) */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once=""
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once=""
        >
          Beberapa proyek yang pernah dikerjakan.
        </p>
        <div className="proyek-box mt-14 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 hover:bg-zinc-700 hover:text-sky-400 rounded-md flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once=""
            >
              <img
                src={proyek.gambar}
                alt="proyek image"
                className="flex mx-auto rounded-md md:w-[300px] md:h-[200px] mb-4"
              />
              <div>
                <h1 className="text-2xl font-bold my-4 h-[64px]">
                  {proyek.nama}
                </h1>
                <p className="text-base/loose h-[96px] my-4">{proyek.ket}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end proyek */}

      {/* kontak */}
      <div
        id="kontak"
        className="kontak mt-32 sm:p-10 p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once=""
      >
        <h1 className="text-4xl font-bold text-center">Kontak</h1>
        <p className="tex-base/loose text-center mb-10 opacity-50">
          Hubungi saya melalui pesan di bawah ini.
        </p>
        <form
          action="https://formsubmit.co/fahrialababil@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
          autoComplete=""
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap:</label>
              <input
                type="text"
                className="border border-zinc-500 rounded-md p-2"
                name="nama"
                placeholder="Masukkan Nama Anda..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email:</label>
              <input
                type="email"
                className="border border-zinc-500 rounded-md p-2"
                name="email"
                placeholder="Masukkan Email Anda..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Pesan:
              </label>
              <textarea
                className="border border-zinc-500 rounded-md p-2"
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Masukkan Pesan..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 w-full rounded-lg p-3 font-bold text-lg cursor-pointer"
              >
                Kirim Pesan <i className="ri-mail-line ri-lg"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end kontak */}
    </>
  );
}

export default App;
