import "../styles/base.css";
import "../styles/style.css";
import "../styles/flexboxgrid.min.css";
import "../styles/animate.min.css";
import "../styles/projects.css";
import Navbar from "../src/components/NavBar";

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
