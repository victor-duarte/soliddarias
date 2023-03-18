import styles from "@/app/page.module.css";
import {
  CalendarDaysIcon,
  PhotoIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">Escritorio</h1>
      <div className="mt-10 flex max-w-sm flex-wrap gap-y-8">
        <Link href="/profile" className="flex w-1/2 flex-col items-center">
          <UserCircleIcon className="inline-block h-20 w-20" />
          Perfil
        </Link>
        <Link href="#" className="flex w-1/2 flex-col items-center">
          <CalendarDaysIcon className="inline-block h-20 w-20" />
          Eventos
        </Link>
        <Link href="/groups" className="flex w-1/2 flex-col items-center">
          <UserGroupIcon className="inline-block h-20 w-20" />
          Grupos
        </Link>
        <Link href="#" className="flex w-1/2 flex-col items-center">
          <PhotoIcon className="inline-block h-20 w-20" />
          Imágenes
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
