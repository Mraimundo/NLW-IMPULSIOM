import * as React from "react";
import { useState } from "react";
import { FeedbackTypeStap } from "./Staps/FeedbackTypeStap";

import bugImage from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

import { FeedbackContentStap } from "./Staps/FeedbackContentStap";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Problema",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w=[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStap onFeedbackTypeChangad={setFeedbackType} />
      ) : (
        <FeedbackContentStap />
      )}
      <footer className="text-xs text-neutral-400">
        Feito por horas pelo Mouzinho
      </footer>
    </div>
  );
}
