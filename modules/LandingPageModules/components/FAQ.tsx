import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const FAQContent = [
    {
      question: "Apa itu UI Innovation War?",
      answer:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      question: "Apa itu UI Innovation War?",
      answer:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      question: "Apa itu UI Innovation War?",
      answer:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      question: "Apa itu UI Innovation War?",
      answer:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screenjustify-center relative md:px-20 max-md:px-10 py-12 sm:py-24">
      <p className="text-primary-1 font-visby max-md:text-4xl md:text-6xl mb-10">
        FAQ
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full h-[55vh] max-md:space-y-2 md:space-y-6"
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
