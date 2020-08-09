export default {
  categories: [
    { topic: "Mountain", emoji: "⛰️" },
    { topic: "Tropics", emoji: "🌴" },
    { topic: "Beach", emoji: "🏖️" },
    { topic: "Water & Waves", emoji: "🌊" },
  ],
  suggestion: [
    { name: "Popular", active: true },
    { name: "New", active: false },
    { name: "Recommended", active: false },
    { name: "Picked by Other", active: false },
  ],
  popular: [
    {
      image: require("./Assets/waves.jpg"),
      title: "Chasing Waves",
      subtitle:
        "Learn surfing and discover true freedom on the Pacific Ocean. Once in a lifetime experience. ",
    },
    {
      image: require("./Assets/hiking.jpg"),
      title: "Find Your Soul",
      subtitle:
        "Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you are climbing it",
    },
    {
      image: require("./Assets/mountain.jpg"),
      title: "Feel Most Alive",
      subtitle:
        "Only those who will risk going too far can possibly find out how far they can go.",
    },
  ],
};
