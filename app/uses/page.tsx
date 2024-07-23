import type { Metadata } from "next";
import Title from "../components/Title";
import ExternalLink from "../components/ExternalLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uses",
  description: "My setup, tools, and software I use for work and hobbies.",
};

export default function Work() {
  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>/uses</Title>
      <p className="text-xl mb-24">
        Stuff I use for my work and hobbies. Inspired by <ExternalLink href="https://uses.tech/">/uses</ExternalLink>.
      </p>

      {/* <hr className="my-10 border-neutral-800" /> */}

      <div className="text-lg font-light flex flex-col gap-12 leading-normal">
        <div>
          <h2 className="text-2xl font-medium mb-2 ">Office & Computer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>16" MacBook Pro (2023, M2 Max)</li>
            <li>Custom built PC (2015)</li>
            <li>27" Acer Nitro VG270U WQHD monitor</li>
            <li>BenQ XL2411T 1080p monitor</li>
            <li>Apple Magic Keyboard</li>
            <li>Steelseries 6Gv2 mechanical keyboard</li>
            <li>Apple Magic Trackpad</li>
            <li>
              Logitech MX Master 3 mouse (I don't use this much since the magnetic scroll wheel is absolute garbage on
              Mac){" "}
            </li>
            <li>Logitech G403 mouse</li>
            <li>Ikea Bekant electric standing desk (160x80)</li>
            <li>Deltahub Minimalistic Desk Pad</li>
          </ul>
          <p className="text-lg mt-6">
            I use a mix of macOS, Windows and Linux for my work. I prefer macOS for development and design work, but
            often use my surprisingly well-aged PC for games and other tasks.
          </p>
          <p className="text-lg mt-4">
            I tend to use the gear I buy for as long as possible, which is why some of it is quite old at this point.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Tools & Software</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Firefox</li>
            <li>Visual Studio Code (theme: Dark Modern)</li>
            <li>Terminal.app with zsh & Oh My Zsh</li>
            <li>GitHub and Copilot</li>
            <li>Xcode</li>
            <li>Insomnia</li>
            <li>Postico</li>
            <li>Figma</li>
            <li>Spotify</li>
          </ul>
          <p className="text-lg mt-6">
            I use Firefox as my main browser, and Visual Studio Code as my editor. I use a mix of tools for development,
            design and productivity. I like to keep things pretty simple, but once I find tools I like, I tend to stick
            with them. Probably forgot a few things here, but I'll update this list as I remember them.
          </p>
          <p className="text-lg mt-4">
            I'm a big fan of using built-in tools, and really like using things like the Notes app on Mac, or Notepad on
            Windows. I also do a lot of stuff through the terminal.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2 ">Photography</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Leica M6
              <ul className="list-disc pl-6 space-y-1">
                <li>Leica Summicron-M 50mm f/2 V3</li>
                <li>Voigtländer Color-Skopar 50mm f/2.5</li>
                <li>Voigtländer Nokton Classic 35mm f/1.4</li>
                <li>Voigtländer Super Wide-Heliar Aspherical 15mm f4.5</li>
              </ul>
            </li>
            <li>
              Nikon F3
              <ul className="list-disc pl-6 space-y-1">
                <li>Nikon 50mm f/1.8 AI-S Pancake</li>
                <li>Nikon 85mm f/2 AI</li>
              </ul>
            </li>
            <li>
              Bronica ETRSi
              <ul className="list-disc pl-6 space-y-1">
                <li>Zenzanon 75mm f/2.8</li>
                <li>Zenzanon 150mm f/3.5</li>
                <li>Waist Level Finder</li>
                <li>AE-III Prism Finder</li>
                <li>Speed Grip-E</li>
              </ul>
            </li>
            <li>Contax TVS</li>
            <li>Olympus Mju-1</li>
            <li>Olympus Trip 35</li>
            <li>GoPro Hero 11</li>
          </ul>
          <p className="text-lg mt-6">
            I mainly tend to shoot on film these days. It's a nice hobby for getting away from screens. I'm a bit of a
            collector, so these are just some of the cameras I use the most.
          </p>
          <p className="text-lg mt-4">
            I use a Canon 70D and a Valoi film holder for scanning my negatives, but the majority of my digital
            photography is done on my iPhone now.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2 ">Other Tech</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Apple iPhone 14 Pro</li>
            <li>Apple Watch Series 7</li>
            <li>Apple AirPods Pro</li>
            <li>Apple iPad Air (M2)</li>
            <li>Apple Pencil Pro</li>
            <li>Bose QC35 II</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
