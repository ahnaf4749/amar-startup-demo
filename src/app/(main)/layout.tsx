import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Fragment, ReactNode } from "react";

interface Metadata {
  title: string;
  description: string;
}

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
