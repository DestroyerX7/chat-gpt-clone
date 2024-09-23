import { FaRobot } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

interface Message {
  role: String;
  content: String;
}

export default function Message({ role, content }: Message) {
  const isUser = role == "user" ? true : false;
  const backgroundColor = isUser ? "bg-green-400" : "bg-neutral-200";
  const image = isUser ? (
    <FaUserCircle className="mr-2 text-2xl" />
  ) : (
    <FaRobot className="mr-2 text-2xl" />
  );
  const messager = isUser ? "You" : "ChatGPT Clone";

  return (
    <div className="flex my-4">
      {image}
      <div className="flex-1">
        <p className="font-medium">{messager}</p>
        <pre
          className={backgroundColor + " p-4 rounded-lg  whitespace-pre-line"}
        >
          {content}
        </pre>
      </div>
    </div>
  );
}
