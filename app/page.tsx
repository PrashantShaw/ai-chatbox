'use client';

import { useChat } from 'ai/react';
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  return (
    <div className="flex flex-col w-full max-w-2xl pb-24 pt-10 mx-auto stretch">

      <div className="flex flex-col gap-5 ">
        {messages.map(({ id, role, content }) => (
          <MessageWrapper key={id} fromUser={role === 'user'} message={content} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask Anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

const UserAvatar = () => {
  return <div className="border shrink-0 grid place-content-center h-10 w-10 rounded-full bg-purple-700 shadow-lg">
    <p className='font-semibold text-white'>U</p>
  </div>
}
const AiAvatar = () => {
  return <div className="border shrink-0 grid place-content-center h-10 w-10 rounded-full bg-cyan-700 shadow-lg">
    <p className='font-semibold text-white'>AI</p>
  </div>
}
type MessageWrapperProps = {
  fromUser: boolean,
  message: string
}

const MessageWrapper = ({ fromUser, message }: MessageWrapperProps) => {
  const wrapperClasses = fromUser ? "pl-[3.25rem] flex-row-reverse" : "pr-[3.25rem]"
  const bubbleClasses = fromUser ? "bg-purple-50" : "bg-cyan-50"
  return <div className={"whitespace-pre-wrap flex items-end gap-3 " + wrapperClasses}>
    {fromUser ? <UserAvatar /> : <AiAvatar />}
    <div className={"w-fit p-4 rounded-xl shadow " + bubbleClasses}>
      <p className=''>{message}</p>
    </div>
  </div>
}