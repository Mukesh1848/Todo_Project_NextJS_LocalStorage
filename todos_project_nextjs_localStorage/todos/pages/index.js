import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import CreateTodos from "./todo/createTodos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <CreateTodos />
    </>
  );
}
