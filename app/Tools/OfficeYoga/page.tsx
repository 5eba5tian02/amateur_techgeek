"use client";
import { useState, useEffect } from "react";
import {Play} from "lucide-react";

function YogaTimer() {

  // useState -> merkt sich Wert
  // setState -> ändert den Wert



  return (
    <div className = "container">
      <h1>Office Yoga Timer</h1>
      
      <button
      style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-20%, -20%)",
      }}
      className="w-36 h-36 rounded-full bg-[#4B3621] text-white flex items-center justify-center hover:bg-[#3A2919] transition-colors"
      >
      <Play size={64} fill="currentColor" />
    </button>

      <input
        type="number"
        min="1"
      />

     
    </div>
  );
}




export default function LandingPage() {
  return (
    <div>
      
      <YogaTimer />

    </div>
  )
}