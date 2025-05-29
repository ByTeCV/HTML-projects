import React, { useState } from "react";

const items = [
  {
    id: 1,
    name: "Elegant Leather Wallet",
    price: 499.99,
    image: "https://images.pexels.com/photos/5863645/pexels-photo-5863645.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premium quality leather wallet with multiple compartments.",
  },
  {
    id: 2,
    name: "Classic Wrist Watch",
    price: 749.99,
    image: "https://images.pexels.com/photos/3809175/pexels-photo-3809175.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Timeless wristwatch with stainless steel frame.",
  },
  {
    id: 3,
    name: "Comfort Cotton T-Shirt",
    price: 199.99,
    image: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soft, breathable cotton t-shirt available in multiple colors.",
  },
  {
    id: 4,
    name: "Wireless Bluetooth Headphones",
    price: 3999.99,
    image: "https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Noise-cancelling headphones with superior sound quality.",
  },
  {
    id: 5,
    name: "Stylish Backpack",
    price: 3999.99,
    image: "https://images.pexels.com/photos/7407112/pexels-photo-7407112.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Durable backpack with spacious compartments.",
  },
  {
    id: 6,
    name: "Elegant Sunglasses",
    price: 199.99,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "UV protection sunglasses with stylish frames.",
  },
  {
    id: 7,
    name: "Running Sneakers",
    price: 1499.99,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comfortable and lightweight running shoes.",
  },
  {
    id: 8,
    name: "Modern Desk Lamp",
    price: 299.99,
    image: "https://images.pexels.com/photos/1252807/pexels-photo-1252807.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "LED desk lamp with adjustable brightness.",
  },
  {
    id: 9,
    name: "Ceramic Coffee Mug",
    price: 144.99,
    image: "https://images.pexels.com/photos/593332/pexels-photo-593332.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted ceramic mug for your favorite coffee.",
  },
  {
    id: 10,
    name: "Scented Soy Candle",
    price: 94.99,
    image: "https://images.pexels.com/photos/6755743/pexels-photo-6755743.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Natural soy wax candle with calming scents.",
  },
  {
    id: 11,
    name: "Soft Wool Scarf",
    price: 354.99,
    image: "https://images.pexels.com/photos/883435/pexels-photo-883435.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Warm and soft wool scarf for chilly days.",
  },
  {
    id: 12,
    name: "Smartphone Case",
    price: 119.99,
    image: "https://images.pexels.com/photos/1670768/pexels-photo-1670768.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Durable protective case with a sleek design.",
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 599.99,
    image: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Portable speaker delivering rich, clear sound.",
  },
  {
    id: 14,
    name: "Yoga Mat",
    price: 339.99,
    image: "https://images.pexels.com/photos/2394051/pexels-photo-2394051.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Eco-friendly non-slip yoga mat for all levels.",
  },
  {
    id: 15,
    name: "Vintage Camera",
    price: 2949.99,
    image: "https://images.pexels.com/photos/37397/camera-old-antique-voigtlander.jpg?auto=compress&cs=tinysrgb&w=600",
    description: "Classic film camera with manual controls.",
  },
  {
    id: 16,
    name: "Desk Organizer",
    price: 224.99,
    image: "https://images.pexels.com/photos/1542096/pexels-photo-1542096.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Keep your desk tidy with multiple compartments.",
  },
  {
    id: 17,
    name: "Leather Journal",
    price: 2999.99,
    image: "https://images.pexels.com/photos/7979073/pexels-photo-7979073.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handmade leather journal for notes and sketches.",
  },
  {
    id: 18,
    name: "Classic Baseball Cap",
    price: 164.99,
    image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Adjustable cap with embroidered logo.",
  },
  {
    id: 19,
    name: "Stainless Steel Water Bottle",
    price: 299.99,
    image: "https://images.pexels.com/photos/7690201/pexels-photo-7690201.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Keep your beverages hot or cold all day.",
  },
  {
    id: 20,
    name: "Wireless Charger",
    price: 344.99,
    image: "https://images.pexels.com/photos/5083410/pexels-photo-5083410.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Fast wireless charging pad for compatible devices.",
  },
  {
    id: 21,
    name: "Minimalist Wall Clock",
    price: 444.99,
    image: "https://images.pexels.com/photos/3283142/pexels-photo-3283142.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Simple and elegant clock for any room.",
  },
  {
    id: 22,
    name: "Travel Duffel Bag",
    price: 3379.99,
    image: "https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Spacious and durable duffel for your trips.",
  },
  {
    id: 23,
    name: "Bluetooth Earbuds",
    price: 2799.99,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Compact earbuds with excellent sound quality.",
  },
  {
    id: 24,
    name: "Cotton Bed Sheets",
    price: 659.99,
    image: "https://imgs.search.brave.com/4Uim-GHjNN5lhIRyE9P6ZRxyZCDmp4clpfEoTWDSD1A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzcyLzk4LzA0/LzM2MF9GXzEyNzI5/ODA0MjVfZVYwcW9F/Vmh2aUdrM2JaUlE0/V25haWZBQXBGUDBh/OXIuanBn",
    description: "Soft and breathable sheets for a comfortable sleep.",
  },
  {
    id: 25,
    name: "Decorative Plant Pot",
    price: 199.99,
    image: "https://images.pexels.com/photos/834657/pexels-photo-834657.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Stylish pot for your indoor plants.",
  },
  // Additional 5 items
  {
    id: 26,
    name: "Portable Espresso Maker",
    price: 5999.99,
    image: "https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Brew rich espresso on the go with this compact, manual espresso maker.",
  },
  {
    id: 27,
    name: "Eco-Friendly Bamboo Cutlery Set",
    price: 199.99,
    image: "https://images.pexels.com/photos/4397812/pexels-photo-4397812.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sustainable and reusable bamboo cutlery set, perfect for eco-conscious individuals.",
  },
  {
    id: 28,
    name: "Smart LED Light Strip",
    price: 349.99,
    image: "https://images.pexels.com/photos/15680091/pexels-photo-15680091/free-photo-of-blue-light-neon-in-dark.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Illuminate your space with customizable colors and brightness.",
  },
  {
    id: 29,
    name: "Compact Drone with HD Camera",
    price: 129999.99,
    image: "https://imgs.search.brave.com/LkF5j_HzTcvc74mtS-8PykbXcPJ_LmqIy2QENGCOeLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzE2/MzAyMjMvRHJvbmVQ/aG90b2dyYXBoeTI2/LmpwZWc",
    description: "Capture stunning aerial footage with this lightweight drone.",
  },
  {
    id: 30,
    name: "Ergonomic Laptop Stand",
    price: 399.99,
    image: "https://images.pexels.com/photos/26891720/pexels-photo-26891720/free-photo-of-home-office-studio-equipment.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Enhance your workspace with this adjustable laptop stand.",
  },
  {
    id: 31,
    name: "Micro-cotten Towels",
    price: 299.99,
    image: "https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Softest cloth that could ever exist.",
  },
  {
    id: 32,
    name: "Cat Toys",
    price: 699.99,
    image: "https://images.pexels.com/photos/4755184/pexels-photo-4755184.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Easy to fit and Non-Toxic.",
  },
];

export default function App() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const count = prev[item.id]?.quantity || 0;
      return {
        ...prev,
        [item.id]: {
          item,
          quantity: count + 1,
        },
      };
    });
    setCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const incrementQuantity = (itemId) => {
    setCart((prev) => {
      const current = prev[itemId];
      if (!current) return prev;
      return {
        ...prev,
        [itemId]: { ...current, quantity: current.quantity + 1 },
      };
    });
  };

  const decrementQuantity = (itemId) => {
    setCart((prev) => {
      const current = prev[itemId];
      if (!current) return prev;
      if (current.quantity <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return {
        ...prev,
        [itemId]: { ...current, quantity: current.quantity - 1 },
      };
    });
  };

  const cartItemsArray = Object.values(cart);

  const totalAmount = cartItemsArray.reduce(
    (sum, { item, quantity }) => sum + item.price * quantity,
    0
  );

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          color: #343a40;
        }
        header {
          background-color: #e9ecef;
          padding: 1rem 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          color: #495057;
          letter-spacing: 1.5px;
          user-select: none;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        main {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 2rem;
        }
        .item-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .item-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .item-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .item-details {
          padding: 1rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .item-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #212529;
        }
        .item-desc {
          font-size: 0.9rem;
          color: #6c757d;
          flex-grow: 1;
          margin-bottom: 1rem;
        }
        .item-price {
          font-weight: 700;
          font-size: 1rem;
          color: #198754;
          user-select: none;
          margin-bottom: 1rem;
        }
        button.add-button {
          background: #198754;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        button.add-button:hover {
          background: #146c43;
        }
        footer {
          margin-top: 3rem;
          text-align: center;
          padding: 1rem 0;
          color: #868e96;
          font-size: 0.9rem;
          user-select: none;
        }

        /* Cart Styles */
        .cart-button {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background-color: #198754;
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          user-select: none;
          z-index: 1100;
          display: flex;
          align-items: center;
        }
        .cart-button:hover {
          background-color: #146c43;
        }
        .cart-count {
          background: #dc3545;
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
          font-weight: 700;
        }
        .cart-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          height: 100vh;
          background: #ffffff;
          box-shadow: -3px 0 12px rgba(0,0,0,0.15);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          z-index: 1050;
          transform: translateX(0);
          transition: transform 0.3s ease;
          user-select: none;
        }
        .cart-sidebar.closed {
          transform: translateX(100%);
        }
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 1.2rem;
          color: #212529;
        }
        .cart-items {
          flex-grow: 1;
          overflow-y: auto;
          margin-bottom: 1rem;
        }
        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid #dee2e6;
          padding-bottom: 0.5rem;
        }
        .cart-item img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }
        .cart-item-details {
          flex-grow: 1;
        }
        .cart-item-name {
          font-weight: 600;
          font-size: 1rem;
          margin: 0;
          color: #212529;
        }
        .cart-item-price {
          color: #198754;
          font-weight: 700;
          margin: 0.25rem 0;
          user-select: none;
        }
        .cart-item-qty-controls {
          display: flex;
          align-items: center;
        }
        .qty-button {
          background: #6c757d;
          border: none;
          color: white;
          padding: 4px 8px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          margin: 0 4px;
          user-select: none;
        }
        .qty-button:hover {
          background: #495057;
        }
        .remove-button {
          background: transparent;
          border: none;
          color: #dc3545;
          cursor: pointer;
          font-size: 1.2rem;
          user-select: none;
          margin-left: 8px;
        }
        .remove-button:hover {
          color: #a71d2a;
        }
        .cart-total {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #212529;
          user-select: none;
        }
        .empty-cart {
          color: #6c757d;
          text-align: center;
          margin-top: 3rem;
          user-select: none;
        }

        @media (max-width: 480px) {
          header {
            font-size: 1.5rem;
          }
          main {
            padding: 0 0.5rem;
            gap: 1rem;
          }
          .item-card {
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }
          .item-card:hover {
            transform: none;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }
          .cart-sidebar {
            width: 100vw;
          }
        }

      `}</style>
      <header>E-Commerce Store</header>

      <button
        aria-label="Toggle cart"
        className="cart-button"
        onClick={() => setCartOpen(!cartOpen)}
        type="button"
      >
        🛒 Cart
        {cartItemsArray.length > 0 && (
          <span aria-live="polite" className="cart-count">
            {cartItemsArray.length}
          </span>
        )}
      </button>

      <main>
        {items.map(({ id, name, price, image, description }) => (
          <article
            key={id}
            className="item-card"
            role="region"
            aria-labelledby={`item-title-${id}`}
          >
            <img className="item-img" src={image} alt={name} loading="lazy" />
            <div className="item-details">
              <h2 id={`item-title-${id}`} className="item-name">
                {name}
              </h2>
              <p className="item-desc">{description}</p>
              <p className="item-price">₹{price.toFixed(2)}</p>
              <button
                type="button"
                className="add-button"
                onClick={() => addToCart({ id, name, price, image })}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </main>

      <section
        aria-label="Shopping cart"
        className={`cart-sidebar ${cartOpen ? "" : "closed"}`}
      >
        <div className="cart-header">
          <span>Shopping Cart</span>
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="cart-items">
          {cartItemsArray.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItemsArray.map(({ item, quantity }) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ${(item.price * quantity).toFixed(2)}
                  </p>
                  <div className="cart-item-qty-controls">
                    <button
                      type="button"
                      className="qty-button"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => decrementQuantity(item.id)}
                    >
                      –
                    </button>
                    <span aria-live="polite" aria-atomic="true">{quantity}</span>
                    <button
                      type="button"
                      className="qty-button"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="remove-button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItemsArray.length > 0 && (
          <div className="cart-total" aria-live="polite" aria-atomic="true">
            Total: ${totalAmount.toFixed(2)}
          </div>
        )}
      </section>

      <footer>© 2025 Subtle E-Commerce Store. All rights reserved.</footer>
    </>
  );
}

