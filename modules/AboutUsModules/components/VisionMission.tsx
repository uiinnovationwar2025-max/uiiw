import Image from "next/image";

const VisionMission = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/visi-misi-bg.png"
        alt="Visi Misi BG"
        fill
        className="object-contain" // Gunakan object-cover agar image memenuhi container
        priority
        quality={100}
      />

      {/* Konten di atas image */}
      <div className="relative px-72 z-10 flex flex-col items-center justify-center min-h-screen space-y-56 ">
        <div className=" text-center">
          <h1 className="text-white text-h1 mb-6 ">Our Vision</h1>
          <p className="text-white text-start text-b5 mx-auto">
            UI Innovation War 2025 menjadi wadah bagi para peserta yang
            intelektual, dimana peserta dapat belajar dan mengembangkan
            kreativitas dari proses yang adaptif dan diverse sehingga mereka
            dapat maksimal merumuskan ide bisnis yang berkelanjutan melalui
            kompetisi bisnis.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-white text-h1 mb-6 ">Our Mission</h1>
          <p className="text-white text-start text-b5 mx-auto">
            - Menyelenggarakan rangkaian wadah penyaluran melalui kompetisi
            utama berupa Business Case Competition dan Business Plan Competition
            - Mengembangkan potensi intelektual dan diversitas para peserta
            untuk -mewujudkan ide yang strategis melalui sharing materi di
            rangkaian DUWI Meningkatkan exposure kepada target yang lebih
            relevan kepada - peserta didik dan mahasiswa
          </p>
        </div>
      </div>
    </main>
  );
};

export default VisionMission;
