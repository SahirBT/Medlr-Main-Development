import Layout from '@/components/Layout';

import toast, { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
      
    </Layout>
  );
}


