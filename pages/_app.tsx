export default MyApp;

import { config } from "telefunc/client";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  config.telefuncUrl = "/api/_telefunc";
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
