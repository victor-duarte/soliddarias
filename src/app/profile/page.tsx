import styles from "@/app/page.module.css";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Avatar from "@/app/components/avatar/Avatar";

const user = {
  avatar: "/assets/misc/avatar.png",
  description:
    "No hablaré de los mejores, porque es muy subjetivo. Hay tantos libros mejores de poesías como personas en el mundo que gustan de la poesía.",
  name: "Xiomara Pérez",
};

const Profile = () => {
  return (
    <main className={styles.main}>
      <Link href="/" className="mb-6 flex w-full items-center gap-2">
        <ChevronLeftIcon width="24" height="24" /> Escritorio
      </Link>
      <h1 className="sr-only flex w-full items-center gap-2">Perfíl</h1>
      <div className="w-full text-center">
        <Avatar className="mx-auto my-3" src={user.avatar} />
        <p className="my-3">{user.name}</p>
        <p className="my-3">{user.description}</p>
      </div>
    </main>
  );
};

export default Profile;
