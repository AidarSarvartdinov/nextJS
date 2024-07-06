import NavBar from "./NavBar/NavBar";
import Head from "next/head";


export default function Layout({children, title}: Readonly<{
    children: React.ReactNode;
    title: string
}>) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <NavBar></NavBar>
    <div>
        {children}
    </div>
    </>
  );
}
