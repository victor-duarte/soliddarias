import styles from "@/app/page.module.css";
import { ChevronLeftIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Avatar from "@/app/components/avatar/Avatar";

const groups = [
  {
    avatar: "/assets/misc/dance.png",
    description:
      "La danza es un movimiento puesto en forma rítmica y espacial, una sucesión de movimientos que comienza, se desarrolla y finaliza",
    name: "Danza",
    slug: "danza",
  },
  {
    avatar: "/assets/misc/cook.png",
    description:
      "Colección de recetas de cocina y cultura antioqueña esperando fortalecer los patrimonios culturales",
    name: "Cocina Tradicional Paisa",
    slug: "cocina-tradicional-paisa",
  },
];

const Groups = () => {
  return (
    <main className={styles.main}>
      <Link href="/" className="mb-6 flex w-full items-center">
        <ChevronLeftIcon width="24" height="24" /> Escritorio
      </Link>
      <h1 className="mb-3 flex w-full items-center gap-2 text-xl">Grupos</h1>
      <div className="flex w-full flex-wrap text-center">
        {groups.map((group, index) => (
          <a
            className="w-1/2 p-3"
            href={`groups/${group.slug}`}
            key={`group-${index}`}
          >
            <Avatar className="mx-auto mb-3" src={group.avatar} />
            {group.name}
          </a>
        ))}
        <a href="#" className="w-1/2 p-3">
          <PlusCircleIcon width={96} height={96} className="mx-auto mb-3" />
          Crear Grupo
        </a>
      </div>
    </main>
  );
};

export default Groups;
