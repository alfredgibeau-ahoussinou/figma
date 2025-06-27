"use client";
import * as React from "react";
import { Mood } from "./types";

interface MoodSelectorProps {
  selectedMood: string;
  onMoodChange: (mood: string) => void;
}

export function MoodSelector({
  selectedMood,
  onMoodChange,
}: MoodSelectorProps) {
  const moods: Mood[] = [
    {
      id: "focus",
      name: "Deep Focus",
      color: "#4A90E2",
      icon: "🎯",
    },
    {
      id: "study",
      name: "Study Session",
      color: "#7B68EE",
      icon: "📚",
    },
    {
      id: "relax",
      name: "Relaxation",
      color: "#50C878",
      icon: "🧘",
    },
    {
      id: "creative",
      name: "Creative Flow",
      color: "#FF6B6B",
      icon: "🎨",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-bold">Choose Your Mood</h2>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {moods.map((mood) => (
          <button
            className="p-6 text-white rounded-2xl transition-all cursor-pointer backdrop-blur-[10px] border-[none] duration-[0.3s] ease-[ease]"
            key={mood.id}
            aria-pressed={selectedMood === mood.id}
            aria-label={`Select ${mood.name} mood`}
            onClick={() => onMoodChange(mood.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onMoodChange(mood.id);
              }
            }}
            style={{
              background:
                selectedMood === mood.id
                  ? `linear-gradient(135deg, ${mood.color}, ${mood.color}dd)`
                  : "rgba(255,255,255,0.1)",
              transform: selectedMood === mood.id ? "scale(1.05)" : "scale(1)",
            }}
          >
            <div className="mb-2.5 text-3xl">{mood.icon}</div>
            <div className="text-lg font-semibold">{mood.name}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
