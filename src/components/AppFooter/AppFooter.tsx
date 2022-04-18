import Footer from "../UI/Footer/Footer";

const AppFooter = ({ children }: { children: React.ReactNode }) => (
  <Footer className="bg-emerald-500 h-60 relative max-w-full p-2 lg:p-4 w-full">
    {children}
  </Footer>
);

export default AppFooter;
