import Image from "next/image";

interface CardItem {
  id: string;
  title: string;
  imageUrl: string;
  href: string;
}

const cardItems: CardItem[] = [
  {
    id: "1",
    title: "Hero 1",
    imageUrl: "/hero1.png?height=300&width=400",
    href: "/hero1",
  },
  {
    id: "2",
    title: "Hero 2",
    imageUrl: "/hero2.png?height=300&width=400",
    href: "/hero2",
  },
  {
    id: "3",
    title: "List",
    imageUrl: "/list.png?height=300&width=400",
    href: "/list",
  },

  {
    id: "4",
    title: "Footer",
    imageUrl: "/footer.png?height=300&width=400",
    href: "/footer",
  },
  {
    id: "5",
    title: "CTA 1",
    imageUrl: "/cta1.png?height=300&width=400",
    href: "/cta1",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {cardItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="border rounded-lg p-4 block hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </main>
    // <p>page</p>
  );
}
