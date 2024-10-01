interface FaqListItem {
  question: string;
  answer: string;
}

type faqList = FaqListItem[];

const FaqList: faqList = [
  {
    question: "Why do you need my location?",
    answer:
      "Location data is used to grab your lattitude and longtitude. this is then used to help you know what sort of K Index you need for your location, as well as get some more accurate data",
  },
  {
    question: "WTF is a nanotesla",
    answer:
      "A nanotesla (nT) is a unit of measurement used to quantify the strength of magnetic fields, particularly in space weather and geomagnetic studies. It's a very small unit, equal to one billionth (10^-9) of a tesla, which is the standard unit of magnetic flux density in the International System of Units (SI).",
  },
  {
    question: "And this is...?",
    answer:
      "A free to use dashboard with data to help predict whether or not you will see the aurora from your location at a glance",
  },
  {
    question: "Can we support you?",
    answer:
      "yes, buymeacoffee and I'll probably design some merch for shits n gigs",
  },
  {
    question: "Can you add <insert thing here>",
    answer:
      "possibly, flick me an email and I will suss it out. It depends on how much acquiring the data costs and if it fits the purpose of the dash remaining easy to understand at a glance",
  },
];

export default FaqList;
