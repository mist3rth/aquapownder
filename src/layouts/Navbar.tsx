import React, { useState, useEffect } from 'react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  // Scrollspy: detect active section on scroll
  useEffect(() => {
    const sections = ['accueil', 'probleme', 'utilisation', 'science', 'offres', 'faq'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // detects when section center crosses viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Cart: Listen to external add-to-cart events
  useEffect(() => {
    const handleAddToCart = (e: Event) => {
      const item = (e as CustomEvent).detail;
      setCart((prev) => {
        const existing = prev.find((i) => i.name === item.name);
        if (existing) {
          return prev.map((i) => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
        }
        return [...prev, { name: item.name, price: item.price, quantity: 1 }];
      });
      
      // Trigger a subtle bounce animation on the cart icon
      setAnimateCart(true);
      setTimeout(() => setAnimateCart(false), 300);
    };

    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert(
      "Erreur 402 : Solde de monnaie liquide insuffisant.\n\n" +
      "Votre banque genevoise n'autorise pas les transactions sèches pour de la poudre d'eau. " +
      "Veuillez ré-introduire du liquide (vrai argent de poche) pour finaliser l'achat."
    );
  };

  return (
    <nav className="global-nav select-none" aria-label="Navigation principale">
      {/* Brand Text Logo */}
      <a 
        className="text-white text-sm font-semibold tracking-[1.5px] uppercase no-underline hover:opacity-90 transition-opacity" 
        href="#accueil" 
        onClick={() => setIsOpen(false)}
      >
        AQUAPOWDER™
      </a>
      
      {/* Hamburger mobile toggle */}
      <button 
        className="flex md:hidden flex-col justify-around w-[18px] h-[14px] bg-transparent border-none cursor-pointer p-0" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir le menu" 
        aria-expanded={isOpen}
      >
        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`}></span>
        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? '-translate-y-[5px] -rotate-45' : ''}`}></span>
      </button>
      
      {/* Nav Links centered on desktop */}
      <div className={`nav-links flex gap-6 md:absolute md:left-1/2 md:-translate-x-1/2 ${isOpen ? 'active flex' : ''}`}>
        <a 
          className={`nav-link ${activeSection === 'probleme' ? 'active' : ''}`} 
          href="#probleme"
          onClick={() => setIsOpen(false)}
        >
          Le Problème
        </a>
        <a 
          className={`nav-link ${activeSection === 'utilisation' ? 'active' : ''}`} 
          href="#utilisation"
          onClick={() => setIsOpen(false)}
        >
          Mode d'emploi
        </a>
        <a 
          className={`nav-link ${activeSection === 'science' ? 'active' : ''}`} 
          href="#science"
          onClick={() => setIsOpen(false)}
        >
          Science & Innovation
        </a>
        <a 
          className={`nav-link ${activeSection === 'offres' ? 'active' : ''}`} 
          href="#offres"
          onClick={() => setIsOpen(false)}
        >
          Abonnements
        </a>
        <a 
          className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`} 
          href="#faq"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </a>
      </div>
      
      {/* Action panel (Cart button & popover) */}
      <div className="relative flex items-center">
        <button 
          className={`text-white text-[15px] opacity-85 hover:opacity-100 cursor-pointer bg-none border-none flex items-center gap-1.5 transition-transform duration-200 ${animateCart ? 'scale-125 text-[#0066cc]' : ''}`} 
          onClick={() => setIsCartOpen(!isCartOpen)}
          aria-label="Panier d'achat"
        >
          <span>🛒</span>
          {totalQuantity > 0 && (
            <span className="bg-[#0066cc] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
              {totalQuantity}
            </span>
          )}
        </button>

        {/* Cart Popover */}
        {isCartOpen && (
          <div className="cart-popover">
            <div className="cart-header">
              <h3 className="cart-title">Votre Panier Sec</h3>
              <button 
                className="cart-clear-btn"
                onClick={() => setCart([])}
              >
                Vider
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <span className="cart-empty-emoji">🏜️</span>
                <p className="cart-empty-text">
                  Votre panier est désespérément sec. Diluez cette aridité en ajoutant nos sachets d'eau.
                </p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-details">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-price">{item.price.toFixed(2)} € / unité</div>
                      </div>
                      <div className="cart-item-quantity">
                        x{item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-total-section">
                  <div className="cart-total-row">
                    <span>Total (Déshydraté)</span>
                    <span className="cart-total-price">{totalPrice.toFixed(2)} €</span>
                  </div>

                  <div className="cart-warning">
                    ⚠️ <strong>Charte moléculaire :</strong> En validant ce panier sec, vous vous engagez à ne pas le secouer près d'une source d'humidité ou de vos larmes en cas de regret.
                  </div>

                  <button 
                    className="cart-checkout-btn"
                    onClick={handleCheckout}
                  >
                    Valider la commande (Humide)
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
