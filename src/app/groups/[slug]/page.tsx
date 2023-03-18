"use client";

import Avatar from "@/app/components/avatar/Avatar";
import styles from "@/app/page.module.css";
import {
  ChevronLeftIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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

// TODO: set proper type
const Group = (props: any) => {
  const { slug } = props.params;
  const group = groups.find((group) => group.slug === slug);

  if (!group) return null;

  return (
    <main className={styles.main}>
      <Link href="/groups" className="mb-6 flex w-full items-center gap-2">
        <ChevronLeftIcon width="24" height="24" /> Groups
      </Link>
      <h1 className="sr-only flex w-full items-center gap-2">Group</h1>
      <div className="w-full text-center">
        <Avatar className="mx-auto my-3" src={group.avatar} />
        <p className="my-3">{group.name}</p>
        <p className="my-3">{group.description}</p>
      </div>
      <div className="flex w-full flex-wrap text-center">
        <a href="#" className="w-1/2 p-3">
          <UsersIcon
            width={96}
            height={96}
            className="mx-auto mb-3 rounded-full border-4 p-2"
          />
          Miembros
        </a>
        <a href="#" className="w-1/2 p-3">
          <UserPlusIcon
            width={96}
            height={96}
            className="mx-auto mb-3 rounded-full border-4 p-2"
          />
          Invitar
        </a>
      </div>
    </main>
  );
};

export default Group;
