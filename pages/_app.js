import "../styles/base.css";
import "../styles/style.css";
import "../styles/flexboxgrid.min.css";
import "../styles/animate.min.css";
import "../styles/projects.css";
import Navbar from "../src/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
