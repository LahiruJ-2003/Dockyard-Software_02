export const botData = [
  {
    keywords: ["hi", "hello", "hey"],
    answer: "Hey there! How can I assist?",
  },
  {
    keywords: ["thanks", "thank you", "thx"],
    answer: "You're welcome!",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    answer: "See you soon!",
  },
  {
    keywords: ["price", "cost", "rate"],
    answer: "Please contact us for a custom pricing plan.",
  },
  {
    keywords: ["demo", "schedule"],
    answer: "You can schedule a demo via our Schedule page.",
  },
  {
    keywords: ["location", "where are you"],
    answer: "We are located in Sri Lanka.",
  },
  {
    question: "What type of products do you sell?",
    keywords: [
      "product",
      "products",
      "sell",
      "selling",
      "offerings",
      "what do you sell",
    ],
    answer:
      "We offer a wide range of digital solutions including software products, web applications, mobile apps, and customized tools tailored to your business needs.",
  },
  {
    question: "What type of services do you offer?",
    keywords: [
      "services",
      "offer",
      "service",
      "do you provide",
      "what can you do",
    ],
    answer:
      "We provide UI/UX design, web development, mobile app development, system integration, and technical consulting services.",
  },
  {
    question: "How to contact you?",
    keywords: [
      "contact",
      "reach",
      "email",
      "phone",
      "get in touch",
      "how to contact",
    ],
    // answer:
    //   "You can contact us via our website's chat feature, email at contact@dockyard.software, or call us at +94 77 123 4567.",
    answer: "You can reach us anytime!",
    buttons: [{ label: "📞 Contact Us", link: "/Pages/contact" }],
  },
  {
    question: "Do you provide maintenance services?",
    keywords: ["maintenance", "support", "after sales", "do you fix bugs"],
    answer:
      "Yes, we provide ongoing maintenance, technical support, and updates to ensure your systems run smoothly.",
  },
];
