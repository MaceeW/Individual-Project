import About from '../components/About.jsx';
import Geese from '../components/Geese.jsx';
import PreOrders from '../components/PreOrders.jsx';
import '../styles/Home.css';
import MusicSub from '../components/MusicSub.jsx';
import KickingJams from '../components/KickingJams.jsx';
import PromoSection from '../components/PromoSection.jsx';
import Hip from '../components/Hip.jsx';

const HomePage = () => {
  return (
    <div className="homePage">
      <About />
      <Geese />
      <PreOrders />
      <MusicSub />
      <KickingJams />
      <PromoSection />
      <Hip />
    </div>
  );
};

export default HomePage;