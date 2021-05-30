import { Navbar } from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}
