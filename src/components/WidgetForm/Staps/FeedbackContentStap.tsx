import { feedbackTypes, FeedbackType } from "../index";
import { CloseButton } from "../../CloseButton";

export function FeedbackContentStap() {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
    </>
  );
}
