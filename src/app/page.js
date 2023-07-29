import Image from "next/image";
import Sidebar from "./sidebar";
import ProjectList from "./projects/projectList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="midbody flex flex-row">
        <Sidebar />
        <ProjectList />
      </div>
    </main>
  );
}
