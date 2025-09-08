import Image from "next/image";

const menus = [
  {
    value: "duwi",
    title: "Discover UI with Innovators (DUWI)",
    description:
      'Discover UI With Innovators (DUWI) 2025 adalah sebuah acara luring yang menjadi bagian dari rangkaian UI Innovation War 2025. Dengan tema "Inspiring Future Leaders to Compete and Create", acara ini bertujuan memberikan wawasan dan inspirasi mengenai dunia kompetisi bisnis bagi siswa SMA/SMK di seluruh Indonesia, serta bermanfaat bagi mahasiswa.',
    url: "https://example.com/",
  },
  {
    value: "mcc",
    title: "Mini Case Competition",
    description:
      "Mini Case Competition merupakan kegiatan pre-event daring pada UI Innovation War 2025 yang berperan dalam menarik minat mahasiswa S1 untuk berpartisipasi dalam Business Case Competition dari UI Innovation War 2025. Tujuannya adalah untuk mengasah kemampuan peserta dalam memahami dan menyelesaikan tantangan bisnis nyata (real case) yang diberikan oleh case collaborator. Peserta akan diberikan waktu pengerjaan kasus selama 72 jam, setelah itu akan diumumkan pemenangnya saat acara Discover UI with Innovators DUWI 2025.",
    url: "https://example.com/",
  },
  {
    title: "Business Plan Competition",
    description:
      "Business Plan Competition (BPC) merupakan kompetisi rencana bisnis yang diselenggarakan untuk siswa Sekolah Menengah Atas (SMA). Tujuannya adalah untuk mendorong kreativitas, inovasi, dan semangat kewirausahaan di kalangan remaja. BPC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BPC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
    url: "https://example.com/",
  },
  {
    title: "Business Case Competition",
    description:
      "Business Case Competition (BCC) merupakan kompetisi studi kasus bisnis yang dilakukan oleh tim-tim mahasiswa dalam bersaing untuk merancang solusi bisnis yang inovatif dan mempresentasikannya di hadapan dewan juri. BCC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BCC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
    url: "https://example.com/",
  },
];

const RegisterModules = () => {
  return (
    <main className="relative flex max-sm:gap-6 flex-col min-h-screen text-center items-center lg:overflow-hidden justify-center pt-30 sm:pt-40">
      {/* Desktop Object */}
      <div className="absolute -top-24 -z-40 hidden lg:block -left-14 w-5xl mx-auto max-w-screen h-[72rem] ">
        <Image src={"/landing-hero/object-1.svg"} alt="object" fill />
      </div>

      <div className="absolute -top-24 -z-40 right-0 hidden lg:block w-2xl mx-auto max-w-screen h-[72rem] ">
        <Image src={"/landing-hero/object-2.svg"} alt="object" fill />
      </div>

      {/* Mobile Object */}
      <div className="absolute -top-48 -z-40 block lg:hidden w-full mx-auto max-w-5xl h-[36rem] ">
        <Image src={"/landing-hero/object-3.svg"} alt="object" fill />
      </div>

      {/* TODO: Bisa disambung sama our programs */}
      <div className="absolute -bottom-64 -z-40 block lg:hidden w-full mx-auto max-w-5xl h-[36rem]">
        <Image src={"/landing-hero/object-4.svg"} alt="object" fill />
      </div>
      <div className="text-2xl leading-8 lg:text-5xl lg:leading-14 text-center font-visby bg-gradient-to-br from-[#00567A] to-[#00344B] px-5 lg:px-12 py-2 lg:py-4 rounded-full text-primary-5">
        Register
      </div>
      <div className="w-full relative">
        <img
          src={"/register/bg-register.webp"}
          alt="object"
          className="object-contain"
        />
        <div className="flex items-center w-full px-[5%] gap-[1%] h-full absolute top-0">
          <div className="group w-1/4 h-2/3 relative">
            <Image
              src={"/register/duwi-frame.webp"}
              alt="object"
              className="object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100"
              fill
            />
            <Image
              src={"/register/duwi.webp"}
              alt="object"
              className="object-contain scale-85 group-hover:scale-75 transition"
              fill
            />
          </div>
          <div className="group w-1/4 h-[52%] relative">
            <Image
              src={"/register/mcc-frame.webp"}
              alt="object"
              className="object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100"
              fill
            />
            <Image
              src={"/register/mcc.webp"}
              alt="object"
              className="object-contain scale-85 group-hover:scale-75 transition"
              fill
            />
          </div>
          <div className="group w-1/4 h-[52%] relative">
            <Image
              src={"/register/bpc-frame.webp"}
              alt="object"
              className="object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100"
              fill
            />
            <Image
              src={"/register/bpc.webp"}
              alt="object"
              className="object-contain scale-85 group-hover:scale-75 transition"
              fill
            />
          </div>
          <div className="group w-1/4 h-2/3 relative">
            <Image
              src={"/register/bcc-frame.webp"}
              alt="object"
              className="object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100"
              fill
            />
            <Image
              src={"/register/bcc.webp"}
              alt="object"
              className="object-contain scale-85 group-hover:scale-75 transition"
              fill
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterModules;
