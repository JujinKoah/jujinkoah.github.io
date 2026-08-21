console.log("script loaded");
const logos = [
  "img/AdaLogo.png",
  "img/AliceLogo.png",
  "img/ArtoriaLogo.png",
  "img/AshleyGravesLogo.png",
  "img/BlackfireLogo.png",
  "img/ChelLogo.png",
  "img/ChikaLogo.png",
  "img/DarknessLogo.png",
  "img/EmilyLogo.png",
  "img/EnaLogo.png",
  "img/ErzaLogo.png",
  "img/FernLogo.png",
  "img/FrierenLogo.png",
  "img/GoogleChanLogo.png",
  "img/GwenLogo.png",
  "img/HagakureTooruLogo.png",
  "img/HayasakaLogo.png",
  "img/HestiaLogo.png",
  "img/HinataKahoLogo.png",
  "img/HinataLogo.png",
  "img/KugisakiLogo.png",
  "img/LoonaLogo.png",
  "img/LucyHeartfiliaLogo.png",
  "img/LucyLogo.png",
  "img/MafuyuLogo.png",
  "img/MaiLogo.png",
  "img/MakimaLogo.png",
  "img/MeguminLogo.png",
  "img/MikuBrazilianLogo.png",
  "img/MikuLogo.png",
  "img/MinaLogo.png",
  "img/MirukoLogo.png",
  "img/NazunaLogo.png",
  "img/PomniLogo.png",
  "img/RaftaliaLogo.png",
  "img/RainbowDashLogo.png",
  "img/RavenLogo.png",
  "img/RebeccaLogo.png",
  "img/RemLogo.png",
  "img/RezeLogo.png",
  "img/RikkaLogo.png",
  "img/RinLogo.png",
  "img/RukoLogo.png",
  "img/RyuLionLogo.png",
  "img/SaberLogo.png",
  "img/SakurasoLogo.png",
  "img/SentoLogo.png",
  "img/ShegoLogo.png",
  "img/ShinobuLogo.png",
  "img/SnowLogo.png",
  "img/TamakiLogo.png",
  "img/TogaLogo.png",
  "img/TooruLogo.png",
  "img/WidowmakerLogo.png",
  "img/YokoLogo.png",
  "img/YorLogo.png",
  "img/YoruichiLogo.png",
  "img/ZeroTwoLogo.png",
];

const randomLogo = logos[Math.floor(Math.random() * logos.length)];

document.getElementById("logo").src = randomLogo;  

const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
  }
});


