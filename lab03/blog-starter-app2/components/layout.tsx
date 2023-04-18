import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { useAuth } from "../context/Session";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const { session } = useAuth();

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {!session?.token && <Alert /*preview={preview}*/ />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
