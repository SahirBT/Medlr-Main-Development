import Navbar from './Navbar';
import styles from '@/styles/Layout.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="bg-[#ffffff] w-full p-8 overflow-hidden">
        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
