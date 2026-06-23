export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  sales: number;
  category: string;
  description: string;
}

export const categories = [
  { id: '1', name: '手机数码', icon: '📱' },
  { id: '2', name: '电脑办公', icon: '💻' },
  { id: '3', name: '服装鞋包', icon: '👗' },
  { id: '4', name: '食品生鲜', icon: '🍎' },
  { id: '5', name: '美妆护肤', icon: '💄' },
  { id: '6', name: '家用电器', icon: '🔌' },
  { id: '7', name: '家居家纺', icon: '🏠' },
  { id: '8', name: '母婴用品', icon: '🍼' },
  { id: '9', name: '更多', icon: '···' },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max 256GB 深空黑色',
    price: 8999,
    originalPrice: 9999,
    image: 'https://picsum.photos/id/1/400/400',
    images: ['https://picsum.photos/id/1/400/400', 'https://picsum.photos/id/2/400/400', 'https://picsum.photos/id/3/400/400'],
    sales: 25800,
    category: '手机数码',
    description: 'iPhone 15 Pro Max 采用钛金属设计，A17 Pro 芯片，5倍光学变焦，钛金属边框超耐用。'
  },
  {
    id: '2',
    title: '华为 Mate 60 Pro 12GB+512GB',
    price: 6999,
    originalPrice: 7999,
    image: 'https://picsum.photos/id/2/400/400',
    images: ['https://picsum.photos/id/2/400/400', 'https://picsum.photos/id/4/400/400'],
    sales: 18600,
    category: '手机数码',
    description: '华为Mate 60 Pro，麒麟9000S芯片，支持卫星通话，全焦段超清影像。'
  },
  {
    id: '3',
    title: 'MacBook Pro 14英寸 M3 Pro芯片',
    price: 16999,
    originalPrice: 18999,
    image: 'https://picsum.photos/id/3/400/400',
    images: ['https://picsum.photos/id/3/400/400', 'https://picsum.photos/id/5/400/400'],
    sales: 5200,
    category: '电脑办公',
    description: 'Apple M3 Pro芯片，18小时电池续航，Liquid视网膜XDR显示屏。'
  },
  {
    id: '4',
    title: '联想拯救者Y9000P 2024款',
    price: 10999,
    originalPrice: 12999,
    image: 'https://picsum.photos/id/4/400/400',
    images: ['https://picsum.photos/id/4/400/400', 'https://picsum.photos/id/6/400/400'],
    sales: 8900,
    category: '电脑办公',
    description: '14代酷睿i9处理器，RTX 4060显卡，240Hz高刷新率电竞屏。'
  },
  {
    id: '5',
    title: 'Nike Air Jordan 1 复古篮球鞋',
    price: 899,
    originalPrice: 1199,
    image: 'https://picsum.photos/id/5/400/400',
    images: ['https://picsum.photos/id/5/400/400', 'https://picsum.photos/id/7/400/400'],
    sales: 35600,
    category: '服装鞋包',
    description: '经典复古设计，优质皮革材质，舒适缓震中底。'
  },
  {
    id: '6',
    title: 'Adidas 三叶草 Superstar 系列',
    price: 599,
    originalPrice: 799,
    image: 'https://picsum.photos/id/6/400/400',
    images: ['https://picsum.photos/id/6/400/400', 'https://picsum.photos/id/8/400/400'],
    sales: 28900,
    category: '服装鞋包',
    description: '贝壳头经典设计，百搭时尚，街头潮流必备。'
  },
  {
    id: '7',
    title: '阳澄湖大闸蟹 公4两母3两 8只装',
    price: 388,
    originalPrice: 488,
    image: 'https://picsum.photos/id/7/400/400',
    images: ['https://picsum.photos/id/7/400/400', 'https://picsum.photos/id/9/400/400'],
    sales: 12500,
    category: '食品生鲜',
    description: '正宗阳澄湖大闸蟹，膏满黄肥，鲜活直达。'
  },
  {
    id: '8',
    title: '智利进口车厘子 2斤装 JJ级',
    price: 128,
    originalPrice: 168,
    image: 'https://picsum.photos/id/8/400/400',
    images: ['https://picsum.photos/id/8/400/400', 'https://picsum.photos/id/10/400/400'],
    sales: 45800,
    category: '食品生鲜',
    description: '智利进口优质车厘子，个大饱满，甘甜多汁，新鲜冷链配送。'
  },
  {
    id: '9',
    title: 'SK-II 神仙水 230ml',
    price: 899,
    originalPrice: 1199,
    image: 'https://picsum.photos/id/9/400/400',
    images: ['https://picsum.photos/id/9/400/400', 'https://picsum.photos/id/11/400/400'],
    sales: 32600,
    category: '美妆护肤',
    description: 'SK-II经典护肤精华露，蕴含90%以上PITERA™，焕亮肌肤。'
  },
  {
    id: '10',
    title: '兰蔻小黑瓶 50ml',
    price: 799,
    originalPrice: 999,
    image: 'https://picsum.photos/id/10/400/400',
    images: ['https://picsum.photos/id/10/400/400', 'https://picsum.photos/id/12/400/400'],
    sales: 21800,
    category: '美妆护肤',
    description: '兰蔻小黑瓶精华，修护肌肤屏障，细腻嫩滑。'
  },
  {
    id: '11',
    title: '戴森吹风机 HD15',
    price: 2699,
    originalPrice: 2999,
    image: 'https://picsum.photos/id/11/400/400',
    images: ['https://picsum.photos/id/11/400/400', 'https://picsum.photos/id/13/400/400'],
    sales: 15600,
    category: '家用电器',
    description: '戴森智能吹风机，快速干发，减少热损伤，呵护秀发。'
  },
  {
    id: '12',
    title: '小米扫地机器人 扫拖一体',
    price: 1599,
    originalPrice: 1999,
    image: 'https://picsum.photos/id/12/400/400',
    images: ['https://picsum.photos/id/12/400/400', 'https://picsum.photos/id/14/400/400'],
    sales: 28500,
    category: '家用电器',
    description: '激光导航，智能路径规划，扫拖一体，彻底解放双手。'
  },
  {
    id: '13',
    title: '水星家纺 全棉四件套',
    price: 299,
    originalPrice: 399,
    image: 'https://picsum.photos/id/13/400/400',
    images: ['https://picsum.photos/id/13/400/400', 'https://picsum.photos/id/15/400/400'],
    sales: 8900,
    category: '家居家纺',
    description: '100%全棉面料，柔软舒适，透气性好，高支高密工艺。'
  },
  {
    id: '14',
    title: '顾家家居 布艺沙发',
    price: 3999,
    originalPrice: 4999,
    image: 'https://picsum.photos/id/14/400/400',
    images: ['https://picsum.photos/id/14/400/400', 'https://picsum.photos/id/16/400/400'],
    sales: 4200,
    category: '家居家纺',
    description: '现代简约布艺沙发，舒适坐感，可拆洗设计。'
  },
  {
    id: '15',
    title: '爱他美 幼儿配方奶粉 3段',
    price: 268,
    originalPrice: 328,
    image: 'https://picsum.photos/id/15/400/400',
    images: ['https://picsum.photos/id/15/400/400', 'https://picsum.photos/id/17/400/400'],
    sales: 15600,
    category: '母婴用品',
    description: '德国原装进口，含有DHA和益生元，科学配方。'
  },
  {
    id: '16',
    title: '贝亲宽口径奶瓶 240ml',
    price: 89,
    originalPrice: 119,
    image: 'https://picsum.photos/id/16/400/400',
    images: ['https://picsum.photos/id/16/400/400', 'https://picsum.photos/id/18/400/400'],
    sales: 23800,
    category: '母婴用品',
    description: '日本进口，仿母乳设计，防胀气，宽口径易清洗。'
  },
];

export const banners = [
  { id: '1', image: 'https://picsum.photos/750/400?random=1', link: '/product/1' },
  { id: '2', image: 'https://picsum.photos/750/400?random=2', link: '/product/5' },
  { id: '3', image: 'https://picsum.photos/750/400?random=3', link: '/product/9' },
];
