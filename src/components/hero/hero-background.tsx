export function HeroBackground({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const cx = 50 + mouseX;
  const cy = 50 + mouseY;
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(circle at ${cx}% ${cy}%, #1a1a1a 0%, #000 50%)`,
        transition: 'background 0.3s ease-out',
      }}
    />
  );
}
