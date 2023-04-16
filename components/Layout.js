import Navbar from './Navbar';
import styles from '@/styles/Layout.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#ffffff] w-full p-8 overflow-hidden">
        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
