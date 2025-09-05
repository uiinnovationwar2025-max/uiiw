const VisionMission = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="px-20 py-24 gap-8 md:gap-24 lg:gap-48 lg:px-72 z-10 bg-contain md:bg-cover bg-center bg-no-repeat bg-[url('/visi-misi/bg-mobile.png')] md:bg-[url('/visi-misi/bg.png')] flex flex-col items-center justify-center min-h-screen  ">
        <div className=" text-center">
          <h1 className="text-white font-visby text-4xl md:text-6xl md:mb-12 max-md:mb-4 ">
            Our Vision
          </h1>
          <p className="text-white text-start text-sm md:text-lg lg:text-2xl font-questrial mx-auto">
            UI Innovation War 2025 menjadi wadah bagi para peserta yang
            intelektual, dimana peserta dapat belajar dan mengembangkan
            kreativitas dari proses yang adaptif dan diverse sehingga mereka
            dapat maksimal merumuskan ide bisnis yang berkelanjutan melalui
            kompetisi bisnis.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-white font-visby text-4xl md:text-6xl md:mb-12 max-md:mb-4 ">
            Our Mission
          </h1>
          <ul className="list-disc text-white text-start text-sm md:text-lg lg:text-2xl font-questrial mx-auto">
            <li>
              Menyelenggarakan rangkaian wadah penyaluran melalui kompetisi
              utama berupa Business Case Competition dan Business Plan
              Competition
            </li>
            <li>
              Mengembangkan potensi intelektual dan diversitas para peserta
              untuk mewujudkan ide yang strategis melalui sharing materi di
              rangkaian DUWI
            </li>
            <li>
              Meningkatkan exposure kepada target yang lebih relevan kepada
              peserta didik dan mahasiswa
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default VisionMission;
