"use client";

import Container from "./components/Container";

export default function Chat() {
  

  return (
    <div className="relative min-h-screen">
      <div className="flex justify-center p-4 overflow-y-auto h-[38rem]">
        <Container stories={[]} />
      </div>
    </div>
  );
}
