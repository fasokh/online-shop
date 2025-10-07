import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { Provider } from "react-redux";
import store, { RootDispatch } from "@/store/app";
import FetchData from "@/store/actionCenter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = AppProps;

const DataInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<RootDispatch>();
  const [query] = useState("");

  useEffect(() => {
    dispatch(FetchData({ query, category: "" }));
  }, [dispatch , query]);

  return <>{children}</>;
};

const App: NextPage<Props> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <DataInitializer>
        <Component {...pageProps} />
      </DataInitializer>
    </Provider>
  );
};

export default App;
