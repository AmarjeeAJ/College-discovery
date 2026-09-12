import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CompareBar from '../components/comparison/CompareBar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-teal-light selection:text-brand-teal-dark">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <CompareBar />
      <Footer />
    </div>
  );
}
