import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import NotesProvider from "../context/NotesContext";

function MyApp({ Component, pageProps }) {
  return (
    <NotesProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </NotesProvider>
  );
}

export default MyApp;
