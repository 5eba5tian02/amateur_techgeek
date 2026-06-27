
"use client"
import { Play } from "lucide-react";

function Headline() {
  return (
    <section  style = {{position: 'absolute', top: '18%', left: '50%' , transform: 'translate(-50%, -50%)'}} className="hero">
       <h1> Start Calm Focus Now !</h1> 
       <h2 className="hero-sub">
    Play bird chirping to lower stress!
   </h2>
      
   </section>

  );
}

function PlayButton() {
  function startBirdChirping() {

    const audio = new Audio("\BirdNoises.mp3");
    audio.play();
    
  }

  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="w-36 h-36 rounded-full bg-[#4B3621] text-white flex items-center justify-center hover:bg-[#3A2919] transition-colors"
      onClick={startBirdChirping}>
      <Play size={64} fill="currentColor" />
    </button>
  );
}

export default function  Page() {
   
    return (
      <div>

        <Headline />
        <PlayButton />

      </div>
    )

}