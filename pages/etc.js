import Layout from "../src/components/layout";
import EtcCard from "../src/components/EtcCard";
import { useEffect } from "react";

export default function Etc() {
  // Set up listeners for labels
  useEffect(() => {
    $(".project_item_container").hover(
      function () {
        $(this).find(".label").css({ left: "-8%", opacity: 1 });
      },
      function () {
        $(this).find(".label").css({ left: "-13%", opacity: 0 });
      }
    );
  });

  return (
    <Layout title="Etc">
      <div id="sandbox_header">
        <h1 className="about_title animate__animated fadeInUpSmall">Etc</h1>
        <h4 
          className="animate__animated fadeInUpSmall delay-100ms"
          // Override regular styles 
          style={{fontWeight: "400", fontSize: "1em", fontStyle: "normal", color: "#414141"}}
        >
          I love learning new things in and around the tech industry, and tend to do that by working on experimental
          projects. <br />
          <b>Here are a few of the latest ones.</b>
        </h4>
      </div>

      <div id="projects_container" style={{ padding: "0" }}>
        <div id="sandbox_container">
          <EtcCard url="https://github.com/eppu/threejs-globe" label="Three.js Globe" image="/images/experiments/globe.jpg" />
          <EtcCard url="https://github.com/eppu/shrtnr" label="Shrtnr" image="/images/experiments/eetume.jpg" />
          <EtcCard url="https://github.com/eppu/stoppi" label="Stoppi" image="/images/experiments/stoppi.jpg" />
        </div>
      </div>
    </Layout>
  );
}
