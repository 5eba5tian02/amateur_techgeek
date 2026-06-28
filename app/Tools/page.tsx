
"use client"
import {useState, useRef, useEffect} from 'react';
import {Play} from "lucide-react";

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

  const [flag, setFlag] = useState(false);
  // const audioRef = useRef(new Audio("/BirdNoises.mp3"));
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/BirdNoises.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.loop = true;

  }, []);

  function startBirdChirping() {
    
    console.log(audioRef.current);
    console.log(audioRef.current.paused);
    console.log(audioRef.current.currentTime);

    
    if( !flag ) {
      audioRef.current.play();
      setFlag(true);
    }

    else if(flag) {
      
      audioRef.current.pause();

      
      
      console.log("Nach Pause: ");
      console.log(audioRef.current.paused);
      console.log(audioRef.current.currentTime);


      setFlag(false);
    }

    else {
      alert("Error in startBirdChirping function");
    } 
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