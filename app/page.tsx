import Image from "next/image";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-16 max-w-7xl">
      <div className="max-w-5xl">
        <h1 className="text-7xl">
          <b>Eetu</b> is a software developer excited about solving human problems using technology.
        </h1>
      </div>
    </main>
  );
}
