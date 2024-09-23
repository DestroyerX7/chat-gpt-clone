import { FormEvent } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

interface ChatInput {
  onChange: (text: string) => void;
  currentMessage: string;
  onSubmit: (event: FormEvent) => void;
}

export default function ChatInput({
  onChange: onChange,
  currentMessage,
  onSubmit,
}: ChatInput) {
  const buttonColor =
    currentMessage.length > 0 ? "bg-neutral-500" : "bg-neutral-300";

  return (
    <form
      className="bottom-0 left-0 right-0 w-1/2 bg-white mx-auto fixed rounded-t-2xl"
      onSubmit={onSubmit}
    >
      <div className="p-3 rounded-2xl border border-neutral-300 flex focus-within:border-neutral-400 focus-within:shadow-md">
        <input
          className="focus:outline-none flex-1 placeholder-neutral-500"
          type="text"
          placeholder="Message ChatGPT Clone..."
          onChange={(e) => onChange(e.target.value)}
          value={currentMessage}
        />

        <button
          className={
            buttonColor + " rounded-md w-8 h-8 flex justify-center items-center"
          }
          disabled={currentMessage.length < 1}
        >
          <FaArrowUpLong className="text-white" />
        </button>
      </div>

      <p className="text-center py-2 text-xs text-neutral-800">
        ChatGPT Clone can make mistakes. Consider checking important
        information.
      </p>
    </form>
  );
}
