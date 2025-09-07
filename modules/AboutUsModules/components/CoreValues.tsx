const CoreValues = () => {
  const contents = [{
    title: "Diverse",
    description: `UI Innovation War 2025 menjadi ruang inklusif yang mendorong kolaborasi lintas latar belakang, sudut pandang, 
    dan keahlian untuk menghasilkan solusi yang lebih kaya dan berdampak luas.`,
  },
  {
    title: "Adaptive",
    description: `UI Innovation War 2025 menjadi ajang bagi peserta untuk melatih fleksibilitas dalam berpikir dan bertindak.
    , sehingga mampu menyesuaikan diri dengan berbagai perubahan dan tantangan demi mencapai hasil yang optimal.`
  },
  {
    title: "Strategic",
    description: `UI Innovation War 2025 mendorong peserta untuk berpikir terarah 
    dan menyusun langkah yang tepat guna mencapai tujuan jangka panjang secara efektif dan berkelanjutan.`
  },
  {
    title: "Intellectualist",
    description: `UI Innovation War 2025 mendorong peserta untuk mengedepankan logika, pengetahuan, 
    dan pemikiran kritis dalam menganalisis masalah dan merumuskan solusi yang berbobot.`
  }
];

  return (
  <main 
    className="relative flex flex-col items-center py-12 sm:py-24">

    <img
    src="/CoreValuesLineObject.webp"
    className="absolute inset-0 w-full h-full object-scale-down -z-10"
    alt="Background Lines"
    />
    {/* Heading */}
    <div className="my-7 w-full font-visby text-3xl leading-8 lg:text-6xl lg:leading-14 text-center text-primary-1">
      Core Values
    </div>

    {/* Grid */}
    <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
      {contents.map(({title, description}, index) => (
        <div key={index} className="rounded-2xl w-[16rem] lg:w-[25rem] lg:h-[12.438rem] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-5 lg:py-3 text-center">
          <div className="font-visby text-lg leading-6 lg:text-2xl lg:leading-8 text-primary-5 lg:my-3">
            {title}
          </div>
          <div className="font-questrial text-xs leading-4 lg:text-sm lg:leading-5 text-primary-5 mt-2 lg:mt-0">
            {description}
          </div>
      </div>  
      ))}    
    </div>
  </main>
  );
};

export default CoreValues;
