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
  { id: 1, name: "Kainuwa Logistics", logo: "/kainuwa.jpeg" }, 
  { id: 2, name: "Maddox Tech", logo: "/maddox.jpeg" },       
  { id: 3, name: "AA Bashir Ventures", logo: "/bashir.jpeg" }  
];

// --- 2. COMPONENTS ---

const PerfumeCard = ({ turare }) => {
  const phoneNumber = "2348012345678"; 
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

const AboutPage = () => {
  return (
    <div style={{width: '100%', margin: 0, padding: 0}}>
      {/* CEO SECTION */}
      <div style={styles.ceoSection}>
        <h2 style={{color: 'white', fontSize: '30px'}}>About Our CEO</h2>
        <img src={ceoProfile.image} alt="CEO" style={styles.ceoImage} />
        <h3 style={{fontSize: '24px', margin: '10px 0', color: '#333'}}>{ceoProfile.name}</h3>
        <p style={{fontStyle: 'italic', opacity: 0.8, color: '#555'}}>{ceoProfile.title}</p>
        <div style={{maxWidth: '800px', margin: '20px auto', padding: '0 20px'}}>
           <p style={{lineHeight: '1.6', color: '#333'}}>{ceoProfile.bio}</p>
        </div>
      </div>
      
      {/* PARTNERS SECTION */}
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

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h3 style={{color: '#B8860B', marginBottom: '10px'}}>Liquid Gold Perfumes</h3>
      <p style={{marginBottom: '20px'}}>Kamshin da ke tabbatar da class dinka.</p>
      <p style={{fontSize: '12px', color: '#888'}}>&copy; 2025 Liquid Gold Perfumes.</p>
    </footer>
  );
};

// --- 3. MAIN APP ---
function App() {
  const [activePage, setActivePage] = useState('shop');

  return (
    <div style={styles.container}>
      
      {/* MENU NAVIGATION (NAVBAR) */}
      <nav style={styles.nav}>
        
        {/* HAGU: Logo da Suna (Clickable) */}
        <div 
          onClick={() => setActivePage('shop')} 
          style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}
        >
          {/* Tabbatar hoton logo yana 'public' folder mai suna 'logo.png' */}
          <img src="/logo.png" alt="LG" style={{height: '40px'}} /> 
          <h2 style={{margin: 0, color: '#B8860B', fontSize: '20px'}}>Liquid Gold</h2>
        </div>

        {/* DAMA: Buttons */}
        <div>
          <button 
            onClick={() => setActivePage('shop')} 
            style={activePage === 'shop' ? styles.activeBtn : styles.btn}>
            Kayan Mu
          </button>
          <button 
            onClick={() => setActivePage('about')} 
            style={activePage === 'about' ? styles.activeBtn : styles.btn}>
            Game da Mu
          </button>
        </div>
      </nav>

      {/* CONTENT AREA */}
      <div style={styles.content}>
        {activePage === 'shop' ? (
           <div style={styles.grid}>
             {perfumes.map(item => <PerfumeCard key={item.id} turare={item} />)}
           </div>
        ) : (
           <AboutPage />
        )}
      </div>

      <Footer />
    </div>
  );
}

// --- 4. STYLES (KWALLIYA) ---
const styles = {
  container: { fontFamily: 'Arial, sans-serif', background: '#f9f9f9', minHeight: '100vh', width: '100%', margin: 0, padding: 0 },
  
  // Navbar Styles - MUHIMMI
  nav: { 
    width: '100%', 
    padding: '15px 30px', // Dan space a gefe da gefe
    background: 'white', 
    display: 'flex', 
    justifyContent: 'space-between', // Hagu da Dama
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
    position: 'sticky', top: 0, zIndex: 1000 // Yana makalewa a sama
  },

  btn: { padding: '10px 20px', margin: '0 5px', border: 'none', background: 'transparent', fontSize: '16px', cursor: 'pointer', color: '#333' },
  activeBtn: { padding: '10px 20px', margin: '0 5px', border: 'none', background: '#B8860B', color: 'white', borderRadius: '20px', fontSize: '16px', cursor: 'pointer' },

  content: { width: '100%', padding: '40px 20px', boxSizing: 'border-box' },
  
  grid: { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%' },
  card: { background: 'white', padding: '15px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', textAlign: 'center' },
  img: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' },
  name: { color: '#B8860B', margin: '10px 0', fontSize: '18px', fontWeight: 'bold' },
  whatsappBtn: { display: 'inline-block', background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' },

  // About Styles
  ceoSection: { backgroundColor: '#D4AF37', width: '100%', padding: '60px 20px', color: 'white', textAlign: 'center' },
  ceoImage: { width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white', margin: '20px auto', display: 'block' },
  partnersSection: { padding: '50px 20px', backgroundColor: 'white', width: '100%', textAlign: 'center' },
  partnersGrid: { display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px', flexWrap: 'wrap' },
  partnerLogo: { width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #eee' },

  footer: { backgroundColor: '#1a1a1a', color: 'white', padding: '50px 20px', textAlign: 'center', width: '100%', marginTop: 'auto' }
};

export default App;