import { useEffect, useState } from "react";

const frases = [
  "Preparando tu próxima aventura... 🧭",
  "Enfocando la imagen... 📷",
  "Despertando a los gatos... 🐾",
  "Cargando tus recuerdos... ✈️",
  "Aflojando el lente... un segundo 📸",
  "Sincronizando con el universo... 🌌",
  "Tu historia está por comenzar...",
  "Encendiendo motores... 🏍️",
  "Conectando los pixeles... 🔲🔳",
  "Ajustando la exposición...",
  "Respira profundo... ya casi está listo 🌬️",
  "Un momento... estamos preparando todo para ti",
  "Despertando los gatos... 🐱"
];

const LoadingScreen = () => {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(randomFrase);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-white border-dashed rounded-full animate-spin mx-auto mb-4" />
        <p className="text-lg font-semibold">{frase}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
