import { Route, Switch, Router as WouterRouter } from 'wouter';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

import { Home } from '@/pages/Home';
import { Shop } from '@/pages/Shop';
import { Collections } from '@/pages/Collections';
import { ProductDetail } from '@/pages/ProductDetail';
import { Customize } from '@/pages/Customize';
import { Journal } from '@/pages/Journal';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { FAQ } from '@/pages/FAQ';
import { Account } from '@/pages/Account';
import { Wishlist } from '@/pages/Wishlist';

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F8F8F8] text-center px-6">
      <h1 className="text-4xl font-medium tracking-wide mb-4">404</h1>
      <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest">Page Not Found</p>
      <a href="/" className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors">
        Return Home
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/collections" component={Collections} />
      <Route path="/product/:slug" component={ProductDetail} />
      <Route path="/customize" component={Customize} />
      <Route path="/journal" component={Journal} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/account" component={Account} />
      <Route path="/wishlist" component={Wishlist} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
