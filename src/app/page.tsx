"use server";

import { redirect } from "next/navigation";
import ProjectView from "./components/ProjectView";
import { validateRequest } from "./lib/auth";

export default async function Chat() {
  const {user} = await validateRequest();
  if (!user) {
      redirect("/login");
  }

  return (
    <div className="relative min-h-screen">
      <h1 className="text-center">User Story Generator</h1>
      <div className="flex justify-center p-4 overflow-y-auto h-screen pb-5">
        <ProjectView stories={[]} username={user.username} projects={JSON.parse(JSON.stringify(user.projects))}/>
      </div>
    </div>
  );
}
