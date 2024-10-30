import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ content }) {
  return (
    <div className="chat-message">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}