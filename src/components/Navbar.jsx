const Navbar = () => {
    return (
        <nav style = {{padding: '1rem', 
        display: 'flex',
        justifyContent: 'space-between',
        background: '#333',
        color: '#fff'}}>
            <h2>Liquidgold & Co.</h2>
            <div>
             <a href="#home" style={{margin: '0 10px', color: '#fff', textDecoration:'none' }}>Home</a>
             <a href="#home" style={{margin: '0 10px', color: '#fff', textDecoration:'none' }}>About</a>
             <a href="#home" style={{margin: '0 10px', color: '#fff', textDecoration:'none' }}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;