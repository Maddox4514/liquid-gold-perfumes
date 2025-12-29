import React, {useState} from "react";

const perfumes = [
  {id: 1, name: 'liquidgold', price:'NGN5000', image:'/risca2.jpeg', description:'Na shafawa'},
  {id: 2, name: 'Rey', price:'NGN5000', image:'/risca4.jpeg', description:'Na shafawa'},
  {id: 3, name: 'oud', price:'NGN5000', image:'/r.jpeg',description:'Na shafawa'},
  {id: 4, name: 'Raihan', price:'NGN5000', image:'/risca3.jpeg', description:'Na shafawa'},
];

const ceoProfile = {
  name: 'Abdussamad Mustapha Bashir',
  title:'CEO & Founder',
  image:'/ceo.jpeg?text=CEO+Image',
  bio:'An entrepreneur with a vision to revolutionize the perfume industry by blending traditional scents with modern elegance.'
}

const partners = [
  {id:1, name:'Kainuwa Logistics', logo:'https://i.postimg.cc/3x3QzSGq/liquidgold.png?text=Kainuwa'},
  {id:2, name:'Maddox tech', logo:'https://i.postimg.cc/3x3QzSGq/liquidgold.png?text=Maddox tech'},
  {id:3, name:'AA Bashir Ventures', logo:'https://i.postimg.cc/3x3QzSGq/liquidgold.png?text=AA Bashir Ventures'},
];

const PerfumeCard = ({turare}) => {
  const phoneNumber = '2348034910389'
  const message = `Hello, I am interested in purchasing the perfume: ${turare.name}. Please provide more details.`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={styles.card}>
      <img src={turare.image} alt={turare.name} style={styles.image}/>
      <h3 style={styles.name}>{turare.name}</h3>
      <p style={styles.price}>{turare.price}</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.button}>Order via WhatsApp</a>
    </div>
  );
};


const AboutPage = () => {
  return (
<div style={{width: '100%', margin: 0, padding: 0, textAlign: 'center'}}>
    <div style={styles.aboutContainer}>
      <div style={styles.ceoSection}>
        <h2 style={{color: '#987654'}}>About Our CEO</h2>
        
        <img 
          src={ceoProfile.image} 
          alt={ceoProfile.name} 
          style={styles.ceoImage} 
        />
        
        <h3 style={styles.name}>{ceoProfile.name}</h3>
        <p style={{color: '#666', fontStyle: 'italic'}}>{ceoProfile.title}</p>
        <p style={{marginTop: '10px', lineHeight: '1.5'}}>{ceoProfile.bio}</p>
      </div>
      <hr style={{margin: '40px 0', border: '1px solid #eee'}} />
      <div>
        <h2 style={{color: '#333'}}>Our Partners</h2>
        <div style={styles.partnersGrid}>
          {partners.map(partner => (
            <div key={partner.id} style={{textAlign: 'center'}}>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                style={styles.partnerLogo} 
              />
              <p style={{fontSize: '12px', marginTop: '5px'}}>{partner.name}</p>
            </div>
          ))}
        </div>
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
      
      <div style={styles.footerLinks}>
        <a href="#" style={styles.footerLinkItem}>Instagram</a>
        <a href="#" style={styles.footerLinkItem}>Facebook</a>
        <a href="#" style={styles.footerLinkItem}>Twitter (X)</a>
      </div>

      <hr style={{borderColor: '#333', margin: '20px 0'}} />

      <p style={{fontSize: '12px', color: '#888'}}>
        &copy; 2025 Liquid Gold Perfumes. All rights reserved. <br/>
        Made in Kano, Nigeria.
      </p>
    </footer>
  );
};


function App() {
  const [activePage, setActivePage] = useState('shop')
  return(
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={{margin:0, color:'maroon'}}><i>LGold</i></h2>
        <div>
          <button 
            onClick={() => {setActivePage('about');}} 
            style={activePage === 'about' ? styles.activeBtn : styles.btn}>About Us</button>
        </div>
      </nav>

      <div style={styles.content}>
        {activePage === 'shop'?(<div style={styles.grid}>
          {perfumes.map((item) => (
            <PerfumeCard key={item.id} turare={item}/>
          ))}
        </div>
        ) : (
          <AboutPage/>
        )}
      </div>
      <Footer/>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    backgroundColor: '#d9bf29ff',
    minHeight: '100vh',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#f8f402ff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  content: {padding: '40px 20px' },
  grid: {display:'flex', flexWrap:'wrap', gap:'20px', justification:'center'},
  card: {
    border:'1px solid #e0e0e0', borderRadius:'10px', padding:'15px',
    width:'220px', backgroundColor:'white', textAlign:'center', boxShadow:'0 4px 6px rgba(0,0,0,0.05)'
  },
  name: { 
    color: '#B8860B',
    fontSize: '20px', 
    fontWeight: 'bold',
    margin: '10px 0'
  },
  price: {color:'#27ae60', fontsize:'18px', fontWeigh:'bold', marginBottom:'15px'},
  button: { display:'inline-block', backgroundColor:'#25D366', color:'white',
    padding:'8px 16px', textDecoration:'none', borderRadius:'5px',fontSize:'14px'
  },

  navBtn:{
    background:'none', border:'none', cursor:'pointer', fontSize:'16px', padding:"8px 15px", color:"white", borderRadius:'20px'
  },
  ceoSection:{backgroundColor:'white', padding:'30px',borderRadius:'10px', boxShadow:'0 4px 6px rgba(0,0,0,0.05)'},
  image:{width:'150px',borderRadius:'50%', objectFit:'cover', margin:'20px 0'},
  partnersGrid:{display:'flex', justifyContent:'center', gap:'40px', flexWrap:'wrap', marginTop:'20px'},
  partnerCard:{textAlign:'center'},
  aboutContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center'
  },
  ceoImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #B8860B',
    marginBottom: '15px'
  },
  partnerLogo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    borderRadius: '50%',
    border: '1px solid #eee',
    padding: '5px'
  },
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    marginTop: '50px', 
    borderTop: '5px solid #B8860B'
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  footerLinkItem: {
    color: '#ccc',
    textDecoration: 'none',
    cursor: 'pointer'
  },

};

export default App;