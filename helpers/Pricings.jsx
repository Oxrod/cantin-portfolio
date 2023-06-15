const singleImage =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const forTwoImage =
  "https://images.unsplash.com/photo-1617640706155-390bb7fe50e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const familyImage =
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80";
const pregnancyImage =
  "https://images.unsplash.com/photo-1568043625493-2b0633c7c491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const babyImage =
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const specialEventImage =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

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
