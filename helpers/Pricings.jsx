const singleImage =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const forTwoImage = "";
const familyImage = "";
const pregnancyImage = "";
const babyImage = "";
const specialEventImage = "";

const Pricings = [
  {
    type: "single",
    price: 130,
    header: "Juste pour moi",
    desc: "Séance pour une personne, en extérieur ou en studio",
    image: singleImage,
  },
  {
    type: "forTwo",
    price: 195,
    header: "Pour deux",
    desc: "Pour deux personnes, en extérieur ou en studio",
    image: forTwoImage,
  },
  {
    type: "family",
    price: 220,
    header: "Famille",
    desc: "Pour la famille ou les amis jusque 4 personnes, en extérieur ou en studio. 30€ de supplément par personne au-delà de 4 (hormis enfant jusqu'à 2 ans)",
    image: familyImage,
  },
  {
    type: "onceUponATime",
    price: 160,
    header: "Il était une fois",
    desc: "Photo de grossesse (A votre domicile, en extérieur ou en studio)",
    image: pregnancyImage,
  },
  {
    type: "myBaby",
    price: 100,
    header: "Mon bébé",
    desc: "Photo d'enfant jusqu'à 3 ans (photo à domicile)",
    image: babyImage,
  },
  {
    type: "specialEvent",
    price: "Sur mesure",
    header: "J'immortalise l'évènement",
    desc: "Prestation de mariage ou baptême sur devis",
    image: specialEventImage,
  },
];

export default Pricings;
