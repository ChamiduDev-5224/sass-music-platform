"use client";

import React from "react";

export default function Card() {
     const buttons = [
      
        {
          name: "Shimmer",
          description: "Shimmer button for your website",
          showDot: false,
          component: (
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Shimmer
            </button>
          ),
        
        } ];
 
      return (
        <div className="pb-40 px-4 w-full">
          <div />
          <div>
            
          </div>
        </div>
      );
    }
