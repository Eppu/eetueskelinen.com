import Layout from "../src/components/layout";
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
    <Layout>
      <div id="sandbox_header">
        <h1 className="about_title animate__animated fadeInUpSmall">Etc</h1>
        <h4 className="animate__animated fadeInUpSmall delay-100ms">
          I love learning new things in and around the tech industry, and tend to do that by working on experimental
          projects. <br />
          <b>Here are a few of the latest ones.</b>
        </h4>
      </div>

      <div id="projects_container" style={{ padding: "0" }}></div>
      <div id="sandbox_container">
        <div className="wow project_item_container animate__animated fadeInUpSmall delay-250ms">
          <a href="https://github.com/eppu/stoppi" target="_blank">
            <div className="label">Stoppi</div>
            <div className="old_project_item" id="stoppi"></div>
          </a>
        </div>
        <div className="wow project_item_container animate__animated fadeInUpSmall delay-250ms">
          <a href="https://github.com/eppu/shrtnr" target="_blank">
            <div className="label">eetu.me</div>
            <div className="old_project_item" id="eetume"></div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
