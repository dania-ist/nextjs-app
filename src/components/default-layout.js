import Footer from "./layout/Footer";
import Header from "./layout/Header";


export default function DefaultLayout({ children }) {
  return (
    <div className="position-relative overflow-x-hidden">
        <div className="position-relative overflow-hidden">
           <Header />
            {children}
            <Footer />
        </div>
    </div>
  )
}