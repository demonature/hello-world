import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { TabBar } from './components/TabBar';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { CartPage } from './pages/CartPage';
import { MinePage } from './pages/MinePage';
import { ProductPage } from './pages/ProductPage';
import { SearchPage } from './pages/SearchPage';

setupIonicReact({
  mode: 'ios'
});

function App() {
  return (
    <IonApp>
      <CartProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/mine" component={MinePage} />
            <Route exact path="/product/:id" component={ProductPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/order" render={() => (
              <div className="p-4 text-center">订单页面开发中...</div>
            )} />
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
          </IonRouterOutlet>
          <TabBar />
        </IonReactRouter>
      </CartProvider>
    </IonApp>
  );
}

export default App;
