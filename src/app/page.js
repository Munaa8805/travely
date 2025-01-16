import CarouselImage from "@/components/carousel/Carousel";
import css from "./page.module.css";
import Image from "next/image";
import cloudIcon from "@/icons/rain.svg"; 
import earthIcon from "@/icons/globe.svg";
import wifiIcon from "@/icons/wifi.svg";
import fireIcon from "@/icons/fire.svg";
import Card from "@/components/Card";

export default function Home() {

  const dataInfo = [
    {
      id: 1,
      title: "Weahter",
      description: "The weather is nice",
      icon: cloudIcon,
    },
    {
      id: 2,
      title: "Travel",
      description: "Travel to the future",
      icon: earthIcon,
    }
    ,
    {
      id: 3,
      title: "Wi Fi locations",
      description: "Wi Fi is everywhere",
      icon: wifiIcon,
    },
    {
      id: 4,
      title: "Travel tools",
      description: "Tools to help you travel",
      icon: fireIcon,
    }
  ];
  return (
    <>
      <header className={css.header} >
        <CarouselImage />
      </header>
      <main className={css.main}>
        <section className={css.headerWrapper}>
          <h1>Home</h1>
          <p>Welcome to the home</p>
        </section>
        <section className={css.wrapper}>
          {
            dataInfo.map((info) => (
              <Card key={info.id} title={info.title} description={info.description} image={info.icon} />
            ))  
 }
 
        </section>
      </main>
    </>
  );
}

