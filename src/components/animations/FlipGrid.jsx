import { useEffect, useMemo, useRef } from "react";

const partners = [
  "./partners/partners-1.webp",
  "./partners/partners-2.webp",
  "./partners/partners-3.webp",
  "./partners/partners-4.webp",
  "./partners/partners-5.webp",
  "./partners/partners-6.webp",
  "./partners/partners-7.webp",
  "./partners/partners-8.webp",
  "./partners/partners-9.webp",
  "./partners/partners-10.webp",
  "./partners/partners-11.webp",
  "./partners/partners-12.webp",
  "./partners/partners-13.webp",
  "./partners/partners-14.webp",
  "./partners/partners-15.webp",
  "./partners/partners-16.webp",
  "./partners/partners-17.webp",
  "./partners/partners-18.webp",
];

export default function FlipGrid() {
  const cardRefs = useRef([]);
  const innerRefs = useRef([]);
  const floatDelays = useMemo(() => [0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5], []);
  const flipOffsets = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      const inner = innerRefs.current[i];
      if (!card || !inner) return;

      // Set floating animation with random delay
      const floatDelay =
        floatDelays[Math.floor(Math.random() * floatDelays.length)];
      card.style.animation = `float 3s ease-in-out infinite`;
      card.style.animationDelay = `${floatDelay}s`;
      card.style.animationPlayState = "running";

      let flipped = false;
      const baseFlipTime = 8000;
      const offset = Math.random() * 500; // one-time offset per card
      flipOffsets.current[i] = offset;

      const getNextFlipTime = () =>
        Date.now() + baseFlipTime + flipOffsets.current[i];
      let nextFlipTime = getNextFlipTime();

      const update = () => {
        const now = Date.now();

        if (now >= nextFlipTime) {
          flipped = !flipped;
          inner.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
          nextFlipTime = getNextFlipTime();
        }

        requestAnimationFrame(update);
      };

      update();
    });
  }, [floatDelays]);

  return (
    <div className="grid grid-cols-3 gap-5 justify-center items-center">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (cardRefs.current[i] = el)}
          className="w-28 h-28 relative [transform-style:preserve-3d] [perspective:1000px]"
        >
          <div
            ref={(el) => (innerRefs.current[i] = el)}
            className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] rounded-md shade"
          >
            <div className="absolute inset-0 front backface-hidden bg-white flex items-center justify-center rounded-md ">
              <img
                src={partners[i]}
                alt={`Partner ${i + 1}`}
                className="w-full h-full object-contain p-2 justify-self-center"
              />
            </div>
            <div className="absolute inset-0 back backface-hidden bg-white [transform:rotateY(180deg)] flex items-center justify-center rounded-md">
              <img
                src={partners[i + 9]}
                alt={`Partner ${i + 10}`}
                className="w-full h-full object-contain p-2 justify-self-center"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
