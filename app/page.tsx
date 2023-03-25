import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      AEA
    </h1>
  );
}
