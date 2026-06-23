import { useHistory, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function TabBar() {
  const history = useHistory();
  const location = useLocation();
  const { state } = useCart();

  const tabs = [
    { path: '/', icon: '🏠', label: '首页' },
    { path: '/category', icon: '📂', label: '分类' },
    { path: '/cart', icon: '🛒', label: '购物车' },
    { path: '/mine', icon: '👤', label: '我的' },
  ];

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e5e5] z-[9999]">
      <div className="flex justify-around items-center h-14">
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path;
          return (
            <div
              key={tab.path}
              className="flex flex-col items-center justify-center flex-1 cursor-pointer"
              onClick={() => history.push(tab.path)}
            >
              <div className="relative">
                <span className="text-xl">{tab.icon}</span>
                {tab.path === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[16px] h-4 bg-[#FF6600] text-white text-xs rounded-full flex items-center justify-center px-1">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
              <span
                className={`text-xs mt-0.5 ${
                  isActive ? 'text-[#FF6600] font-bold' : 'text-[#666]'
                }`}
              >
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
