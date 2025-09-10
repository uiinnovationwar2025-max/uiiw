import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const FAQContent = [
    {
      question: "Siapa saja yang bisa mengikuti lomba BCC?",
      answer:
        "Lomba BCC terbuka untuk seluruh mahasiswa aktif (D3/D4/S1) dengan usia maksimal 25 tahun, yang dapat dibuktikan dengan kartu tanda mahasiswa.",
    },
    {
      question: "Apakah lomba ini hanya untuk mahasiswa di Jabodetabek?",
      answer:
        "Tidak, lomba ini terbuka untuk peserta dari seluruh wilayah. Namun, untuk tahap final (Pitching Deck), peserta wajib hadir secara offline di lokasi yang ditentukan, yaitu di sekitar Jakarta.",
    },
    {
      question: "Berapa biaya pendaftaran lomba BCC?",
      answer: "Biaya pendaftaran sebesar Rp150.000 per tim.",
    },
    {
      question: "Apakah bisa mendaftar secara individu?",
      answer:
        "Tidak bisa, lomba BCC UI Innovation War hanya bisa diikuti oleh tim yang terdiri dari 2-3 orang dengan 1 orang sebagai ketua tim.",
    },
    {
      question:
        "Apakah anggota tim boleh berasal dari universitas yang berbeda?",
      answer:
        "Boleh, tidak ada ketentuan anggota tim harus berasal dari universitas yang sama.",
    },
    {
      question: "Apakah peserta akan mendapatkan pembinaan dalam menyusun BCC?",
      answer:
        "Ya, tim yang lolos ke tahap final akan mendapatkan mentoring dari para mentor berpengalaman.",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen justify-center relative md:px-20 max-md:px-10 py-12 sm:py-24">
      <p className="text-primary-1 font-visby max-md:text-4xl md:text-6xl mb-10">
        FAQ
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full max-md:space-y-2 md:space-y-6"
        defaultValue="item-1"
      >
        {FAQContent.map(({ question, answer }, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQ;
