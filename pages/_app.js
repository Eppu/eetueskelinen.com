import "../styles/base.css";
import "../styles/style.css";
import "../styles/hamburgers.css";
import "../styles/flexboxgrid.min.css";
import "../styles/animate.min.css";
import "../styles/projects.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
