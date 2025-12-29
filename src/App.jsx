import React, { useState } from 'react';

// --- 1. DATA (BAYANAI) ---
const perfumes = [
  { id: 1, name: 'Liquid Gold', price: 'NGN5,000', image: '/r.jpeg', description: 'Na shafawa' },
  { id: 2, name: 'Rey', price: 'NGN5,000', image: '/risca2.jpeg', description: 'Na shafawa' },
  { id: 3, name: 'Oud', price: 'NGN5,000', image: '/risca3.jpeg', description: 'Na shafawa' },
  { id: 4, name: 'Raihan', price: 'NGN5,000', image: '/risca4.jpeg', description: 'Na shafawa' },
];

const ceoProfile = {
  name: "Abdussamad Mustapha Bashir",
  title: "CEO & Founder",
  image: "/ceo.jpeg", 
  bio: "An entrepreneur with a vision to revolutionize the perfume industry."
};

const partners = [
  { id: 1, name: "Maddox Logistics", logo: "/maddoxdel.jpg" }, 
  { id: 2, name: "Maddox Tech", logo: "maddoxtec.jpg" },       
  { id: 3, name: "AM Bashir Ventures", logo: "/ambash.jpg" }  
];

// --- 2. COMPONENTS ---

// A. LANDING PAGE (SABON FRONT PAGE)
const LandingPage = ({ onShopNow }) => {
  return (
    <div style={{width: '100%'}}>
      
      {/* 1. HERO SECTION (Babban Sashe) */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Unleash your inner gold.</h1>
          <p style={styles.heroSubtitle}>Experience the power of Authentic scents. <br /> Make a lasting impression wherever you go.</p>
          
          <button onClick={onShopNow} style={styles.heroBtn}>
            Shop now
          </button>
        </div>
      </div>

      {/* 2. FEATURES (Me yasa mu?) */}
      <div style={styles.featuresSection}>
        <div style={styles.featureCard}>
          <h3 style={{color: '#B8860B'}}>💯 Original Scents</h3>
          <p>Experience the purity of undiluted, original fragrances. We guarantee zero imitations.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={{color: '#B8860B'}}>🚚 Swift Delivery</h3>
          <p>Fast and reliable delivery to your doorstep in Kano and nationwide shipping across Nigeria.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={{color: '#555', lineHeight:'1.6'}}>💎 Premium Quality</h3>
          <p>Premium quality perfumes designed to last 24+ hours, giving you confidence all day long.</p>
        </div>
      </div>

    </div>
  );
};

// B. SHOP PAGE
const PerfumeCard = ({ turare }) => {
  const phoneNumber = "2348034910389"; 
  const message = `Hello, I want to buy ${turare.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={styles.card}>
      <img src={turare.image} alt={turare.name} style={styles.img} />
      <h3 style={styles.name}>{turare.name}</h3>
      <p style={{color: '#666', margin: '5px 0'}}>{turare.price}</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn}>
        Order via WhatsApp
      </a>
    </div>
  );
};

// C. ABOUT PAGE
const AboutPage = () => {
  return (
    <div style={{width: '100%', margin: 0, padding: 0}}>
      <div style={styles.ceoSection}>
        <h2 style={{color: 'white', fontSize: '30px'}}>About Our CEO</h2>
        <img src={ceoProfile.image} alt="CEO" style={styles.ceoImage} />
        <h3 style={{fontSize: '24px', margin: '10px 0', color: '#333'}}>{ceoProfile.name}</h3>
        <p style={{fontStyle: 'italic', opacity: 0.8, color: '#555'}}>{ceoProfile.title}</p>
        <div style={{maxWidth: '800px', margin: '20px auto', padding: '0 20px'}}>
           <p style={{lineHeight: '1.6', color: '#333'}}>{ceoProfile.bio}</p>
        </div>
      </div>
      <div style={styles.partnersSection}>
        <h2 style={{color: '#333'}}>Our Partners</h2>
        <div style={styles.partnersGrid}>
          {partners.map(p => (
            <div key={p.id} style={{textAlign: 'center'}}>
              <img src={p.logo} alt={p.name} style={styles.partnerLogo} />
              <p style={{marginTop: '10px', fontWeight: 'bold'}}>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// D. FOOTER
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h3 style={{color: '#B8860B', marginBottom: '10px'}}>Liquid Gold Perfumes</h3>
      <p style={{marginBottom: '20px'}}>The scent that defines your class.</p>
      
      {/* SOCIAL MEDIA LINKS */}
      <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
        
        {/* Instagram */}
        <a href="https://instagram.com/instagram page" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          📸 Instagram
        </a>

        {/* TikTok */}
        <a href="https://tiktok.com/@tiktok page" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          🎵 TikTok
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/2348034910389" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
          💬 WhatsApp
        </a>
        
      </div>

      <p style={{fontSize: '12px', color: '#888'}}>&copy; 2025 Liquid Gold Perfumes.</p>
    </footer>
  );
};

// --- 3. MAIN APP (UWAR DAKI) ---
function App() {
  // Mun canza default ya fara daga 'home' (Landing Page)
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={styles.container}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        {/* Logo yana mayar da kai Gida (Home) */}
        <div 
          onClick={() => setActivePage('home')} 
          style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}
        >
          <img src="/logo2.jpeg" alt="LG" style={{height: '40px'}} /> 
          <h2 style={{margin: 0, color: '#B8860B', fontSize: '20px'}}>Liquid Gold</h2>
        </div>

        <div>
          <button onClick={() => setActivePage('shop')} style={activePage === 'shop' ? styles.activeBtn : styles.btn}>Our products</button>
          <button onClick={() => setActivePage('about')} style={activePage === 'about' ? styles.activeBtn : styles.btn}>About Us</button>
        </div>
      </nav>

      {/* CONTENT AREA: Yana nuna shafi dangane da abin da aka zaba */}
      <div style={styles.content}>
        {activePage === 'home' && <LandingPage onShopNow={() => setActivePage('shop')} />}
        {activePage === 'shop' && (
           <div style={styles.grid}>
             {perfumes.map(item => <PerfumeCard key={item.id} turare={item} />)}
           </div>
        )}
        {activePage === 'about' && <AboutPage />}
      </div>

      <Footer />
    </div>
  );
}

// --- 4. STYLES (KWALLIYA) ---
const styles = {
  container: { fontFamily: 'Arial, sans-serif', background: '#D4AF37', minHeight: '100vh', width: '100%', margin: 0, padding: 0 },
  
  // Navbar
  nav: { 
    width: '100%', padding: '15px 30px', background: 'goldenrod', display: 'flex', 
    justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
    position: 'sticky', top: 0, zIndex: 1000 
  },
  btn: { padding: '10px 20px', margin: '0 5px', border: 'none', background: 'transparent', fontSize: '16px', cursor: 'pointer', color: '#333' },
  activeBtn: { padding: '10px 20px', margin: '0 5px', border: 'none', background: '#B8860B', color: 'white', borderRadius: '20px', fontSize: '16px', cursor: 'pointer' },

  content: { width: '100%', padding: '0', boxSizing: 'border-box' },

  // --- SABON STYLE NA LANDING PAGE ---
  heroSection: {
    height: '80vh', // Yana cika kusan duk screen din
    width: '100%',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("hero.jpeg")', // Hoto mai duhu a baya
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  },
  heroOverlay: { padding: '20px', maxWidth: '800px' },
  heroTitle: { fontSize: '48px', marginBottom: '20px', color: '#D4AF37' },
  heroSubtitle: { fontSize: '20px', marginBottom: '30px', lineHeight: '1.5' },
  heroBtn: {
    padding: '15px 40px', fontSize: '18px', backgroundColor: '#D4AF37', color: 'white', 
    border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s'
  },
  
  featuresSection: {
    display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', padding: '60px 20px', backgroundColor: 'blurywhite'
  },
  featureCard: {
    width: '300px', padding: '20px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },

  // Shop & About Styles
  grid: { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%', padding: '40px 20px' },
  card: { background: 'white', padding: '15px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', textAlign: 'center' },
  img: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' },
  name: { color: '#B8860B', margin: '10px 0', fontSize: '18px', fontWeight: 'bold' },
  whatsappBtn: { display: 'inline-block', background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' },
  
  ceoSection: { backgroundColor: '#D4AF37', width: '100%', padding: '60px 20px', color: 'white', textAlign: 'center' },
  ceoImage: { width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white', margin: '20px auto', display: 'block' },
  partnersSection: { padding: '50px 20px', backgroundColor: '#555', width: '100%', textAlign: 'center' },
  partnersGrid: { display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px', flexWrap: 'wrap' },
  partnerLogo: { width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #eee' },

  footer: { backgroundColor: '#1a1a1a', color: 'golden', padding: '50px 20px', textAlign: 'center', width: '100%', marginTop: 'auto' },
 
  socialLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    border: '1px solid #555',
    padding: '8px 15px',
    borderRadius: '20px',
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
};

export default App;