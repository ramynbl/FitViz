import Navbar from '@/components/Navbar/Navbar';
import TryOn from '@/components/TryOn/TryOn';
import styles from './page.module.css';

export const metadata = {
  title: 'Démo - FitViz Virtual Try-On',
  description: 'Testez le virtual try-on FitViz. Uploadez votre photo et un vêtement.',
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <div className={styles.demoPage}>
        <TryOn />
      </div>
    </>
  );
}
