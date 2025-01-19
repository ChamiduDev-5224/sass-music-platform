import { BackgroundGradient } from "@/components/ui/background-gradient";
import Card from "./pages/Card";
import { LampDemo } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-word";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-grandient";
import { FiActivity, FiHeadphones } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
  const words = ["POP", "JAZZ", "REGEE", "ROCK"];
  const products = [
    {
      title: "Solo",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/handfree.jpg",
    },
    {
      title: "Feel",
      link: "https://cursor.so",
      thumbnail:
        "/headphone.jpg",
    },
    {
      title: "Cool",
      link: "https://userogue.com",
      thumbnail:
        "/girl-music.jpg",
    },
   
    {
      title: "Pop",
      link: "https://editorially.org",
      thumbnail:
        "/live.jpg",
    },
    {
      title: "Live",
      link: "https://editrix.ai",
      thumbnail:
        "/live.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "/lady-head.jpg",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "/live-dark.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "/head.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "/pioano.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "/lady-music.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  
  const packages = [
    {
      title: "Basic Groove",
      price: "$4.99/month",
      features: [
        "Access to pop, jazz, and reggae playlists",
        "Unlimited skips for curated playlists",
        "Ad-supported streaming",
        "Standard audio quality"
      ],
      buttonText: "Choose Basic",
      description: "Perfect for casual listeners who want access to a variety of genres without breaking the bank."
    },
    {
      title: "Premium Beat",
      price: "$9.99/month",
      features: [
        "Ad-free listening experience",
        "Access any type of genres",
        "High-quality audio streaming",
        "Offline downloads of favorite tracks"
      ],
      buttonText: "Go Premium",
      description: "Ideal for dedicated music lovers who want a seamless and immersive listening experience."
    },
    {
      title: "Ultimate Rhythm",
      price: "$14.99/month",
      features: [
        "All features from Basic and Premium plans",
        "Exclusive access to live concerts and artist sessions",
        "Customizable playlists with advanced AI recommendations",
        "Family sharing for up to 6 members"
      ],
      buttonText: "Get Ultimate",
      description: "For music enthusiasts who want it all, including exclusive perks and the best features."
    }
  ];
  
  return (
    <main className="text-white">
      <LampDemo />
      <CardSpotlight>
        <div className=" my-12 flex justify-center items-center px-4">
          <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            You have <FlipWords words={words} />
            <br />
            in this open platform
          </div>
        </div>
      </CardSpotlight>
   <div className="flex flex-col md:flex-row gap-3 justify-center my-12 mx-4">
    {packages.map((vl,index)=>{
    return(
      <CardSpotlight className="cursor-pointer" key={index}>
      <h1 className="text-center font-bold pb-4 text-2xl">{vl.title}</h1>
      <h2>{vl.description}</h2>
      <ul className="mt-4">
        {vl.features.map((val,key)=>{
          return(<li className="flex items-center gap-1" key={key}><FiHeadphones /> {val}</li>)
        })}
      </ul>
        
        <div className="my-auto mx-auto mt-8">
        <HoverBorderGradient>
          <div className="flex flex-row items-center gap-1">
          <GiShoppingCart />
          Purchase
          </div>
        </HoverBorderGradient>

        </div>
              
    </CardSpotlight>
    )
    })}

 
   </div>
      <ExpandableCardDemo />
      <HeroParallax products={products} />
    </main>
  );
}
