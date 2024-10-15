import Header from "./header.tsx";
import Footer from "./footer.tsx";

interface LayoutProperties {
  children?: React.ReactNode;
  isNecessaryToDisplayProfileIcon?: boolean;
}

function Layout({ children, isNecessaryToDisplayProfileIcon = false }: LayoutProperties) {
  return (
    <div
      className="
        flex
        flex-col
        min-h-screen
      "
    >
      <div className="flex-grow">
        <Header isNecessaryToDisplayProfileIcon={isNecessaryToDisplayProfileIcon} />
        
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;