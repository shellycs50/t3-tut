

export default function HomePage() {
  const mockImages = ["https://utfs.io/f/d9f2e3cd-b990-42c9-8bdd-f6ab2422565d-bedfto.png", "https://utfs.io/f/3bbb8df6-68e5-42b5-be05-374e1619a1c8-ghco96.png", "https://utfs.io/f/8cec14d5-bab3-4df5-a582-048f1b805cfc-lx4un3.png" ]
  const bigImagesList = [];
  for (let i = 0; i < 100; i++) {
    bigImagesList.push(...mockImages);
  }
  return (
    <div className="flex flex-wrap gap-12 justify-center mx-64 overflow-y-auto">
      {bigImagesList.map((image, index) => (
        <img className="w-36" key={index} src={image
        } />
      ))}
    </div>
  );
}
