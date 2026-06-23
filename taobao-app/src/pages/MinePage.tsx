import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

export function MinePage() {
  const history = useHistory();

  const orders = [
    { status: '待付款', count: 0, icon: '💰' },
    { status: '待发货', count: 0, icon: '📦' },
    { status: '待收货', count: 1, icon: '🚚' },
    { status: '待评价', count: 0, icon: '⭐' },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5]">
          {/* 用户信息卡片 */}
          <div className="bg-gradient-to-r from-[#FF6600] to-[#FF8533] px-4 pt-8 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl">
                👤
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">游客用户</span>
                  <span className="px-2 py-0.5 bg-[#FFD700] text-[#8B4513] text-xs rounded-full">
                    超级会员
                  </span>
                </div>
                <div className="text-white/80 text-sm mt-1">138****8888</div>
              </div>
            </div>

            {/* 会员权益 */}
            <div className="mt-4 bg-white/20 rounded-lg p-3">
              <div className="flex justify-between text-white text-sm">
                <span>成长值</span>
                <span>888/1000</span>
              </div>
              <div className="h-1.5 bg-white/30 rounded-full mt-2">
                <div className="h-full bg-white rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>

          {/* 订单入口 */}
          <div className="bg-white mx-2 -mt-3 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-[#333]">我的订单</span>
              <span
                className="text-[#999] text-sm flex items-center"
                onClick={() => history.push('/order')}
              >
                全部订单 ›
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {orders.map((order, index) => (
                <div key={index} className="flex flex-col items-center gap-1 cursor-pointer">
                  <div className="relative">
                    <span className="text-2xl">{order.icon}</span>
                    {order.count > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6600] text-white text-xs rounded-full flex items-center justify-center">
                        {order.count}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#666]">{order.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 功能列表 */}
          <div className="bg-white mt-2">
            {[
              { icon: '📍', title: '收货地址', action: '管理收货地址' },
              { icon: '💳', title: '支付方式', action: '绑定支付宝/微信' },
              { icon: '🎫', title: '优惠券', action: '3张可用' },
              { icon: '🛍️', title: '收藏夹', action: '查看收藏' },
              { icon: '👀', title: '浏览历史', action: '查看足迹' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-3 border-b border-[#f5f5f5] cursor-pointer"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="flex-1 text-[#333]">{item.title}</span>
                <span className="text-[#999] text-sm">{item.action}</span>
                <span className="ml-2 text-[#ccc]">›</span>
              </div>
            ))}
          </div>

          {/* 其他功能 */}
          <div className="bg-white mt-2">
            {[
              { icon: '⚙️', title: '设置' },
              { icon: '📞', title: '客服中心' },
              { icon: '❓', title: '帮助与反馈' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-3 border-b border-[#f5f5f5] cursor-pointer"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="flex-1 text-[#333]">{item.title}</span>
                <span className="text-[#ccc]">›</span>
              </div>
            ))}
          </div>

          {/* 底部标签栏高度占位 */}
          <div className="h-14"></div>
        </div>
      </IonContent>
    </IonPage>
  );
}
