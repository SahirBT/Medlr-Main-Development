import Navbar from './Navbar';
import styles from '@/styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#E8E7E2] w-full p-18">
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
