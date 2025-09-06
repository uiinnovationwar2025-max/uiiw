const CoreValues = () => {
  return (
  <main 
    className="relative min-h-screen flex flex-col items-center py-12 sm:py-24">

    <img
    src="/CoreValuesLineObject.webp"
    className="absolute inset-0 w-full h-full object-cover -z-10"
    alt="Background Lines"
  />
    {/* Heading */}
    <div className="my-7 w-full text-h1 text-center text-primary-1">
      Core Values
    </div>

    {/* Grid */}
    <div className="my-3 grid grid-cols-2 gap-x-8 gap-y-6">
      <div className="rounded-2xl w-[400px] h-[199px] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-3 text-center">
        <div className="text-h5 text-primary-5 my-3">
          Diverse
        </div>
        <div className="text-b8 text-primary-5">
          UI Innovation War 2025 menjadi ruang inklusif yang mendorong kolaborasi lintas latar belakang, sudut pandang, 
          dan keahlian untuk menghasilkan solusi yang lebih kaya dan berdampak luas.
        </div>
      </div>
      <div className="rounded-2xl w-[400px] h-[199px] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-3 text-center">
        <div className="text-h5 text-primary-5 my-3">
          Adaptive
        </div>
        <div className="text-b8 text-primary-5">
          UI Innovation War 2025 menjadi ajang bagi peserta untuk melatih fleksibilitas dalam berpikir dan bertindak, sehingga mampu menyesuaikan diri dengan berbagai perubahan dan tantangan demi mencapai hasil yang optimal. 
        </div>
      </div>
      <div className="rounded-2xl w-[400px] h-[199px] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-3 text-center">
        <div className="text-h5 text-primary-5 my-3">
          Strategic
        </div>
        <div className="text-b8 text-primary-5">
          UI Innovation War 2025 mendorong peserta untuk berpikir terarah dan menyusun langkah yang tepat guna mencapai tujuan jangka panjang secara efektif dan berkelanjutan.
        </div>
      </div>
      <div className="rounded-2xl w-[400px] h-[199px] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-3 text-center">
        <div className="text-h5 text-primary-5 my-3">
          Intellectualist
        </div>
        <div className="text-b8 text-primary-5">
          UI Innovation War 2025 mendorong peserta untuk mengedepankan logika, pengetahuan, 
          dan pemikiran kritis dalam menganalisis masalah dan merumuskan solusi yang berbobot.
        </div>
      </div>
      
    </div>
  </main>
  );
};

export default CoreValues;
