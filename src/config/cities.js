// SM.MS 图床地址
const SMMS_IMG_BED_BASE = 'https://i.loli.net/'

// 地铁logo
// http://mic-ro.com/metro/metrologos.html?metrolike=yes&clones=yes&size=lg&sort=country

/******************************************************************************************************************\

<img src="https://i.loli.net/2019/02/01/5c54065c323cf.jpg" alt="shanghai.jpg" title="shanghai.jpg" />
<img src="https://i.loli.net/2019/02/01/5c54065ebf07a.jpg" alt="shenzhen.jpg" title="shenzhen.jpg" />
<img src="https://i.loli.net/2019/02/01/5c54065f25892.jpg" alt="canton.jpg" title="canton.jpg" />
<img src="https://i.loli.net/2019/02/01/5c54066098040.jpg" alt="beijing.jpg" title="beijing.jpg" />
<img src="https://i.loli.net/2019/02/01/5c541675955a0.jpg" alt="hongkong.jpg" title="hongkong.jpg" />
<img src="https://i.loli.net/2019/02/01/5c541676c044b.jpg" alt="chongqing.jpg" title="chongqing.jpg" />
<img src="https://i.loli.net/2019/02/01/5c54167783864.jpg" alt="wuhan.jpg" title="wuhan.jpg" />
<img src="https://i.loli.net/2019/02/01/5c5419a56753c.jpg" alt="nanjing.jpg" title="nanjing.jpg" />


<img src="https://i.loli.net/2019/02/06/5c5a963f2b46f.png" alt="qingdao.png" title="qingdao.png" />
<img src="https://i.loli.net/2019/02/06/5c5a963f6ecea.jpg" alt="tianjin.jpg" title="tianjin.jpg" />
<img src="https://i.loli.net/2019/02/06/5c5a963f83cf9.jpg" alt="taipei.jpg" title="taipei.jpg" />
<img src="https://i.loli.net/2019/02/06/5c5a964110a3e.jpg" alt=" chengdu.jpg" title=" chengdu.jpg" />
<img src="https://i.loli.net/2019/02/06/5c5a964112ef2.png" alt="dalian.png" title="dalian.png" />
<img src="https://i.loli.net/2019/02/06/5c5a98d9d3046.png" alt="suzhou.png" title="suzhou.png" />

<img src="https://i.loli.net/2019/02/13/5c6395c76f07a.png" alt="hangzhou.png" title="hangzhou.png" />
<img src="https://i.loli.net/2019/02/13/5c639a400017d.jpg" alt="hangzhou1.jpg" title="hangzhou1.jpg" />
https://www.dir126.com
<img src="https://i.loli.net/2019/02/13/5c63988067c1c.jpg" alt="zhengzhou.jpg" title="zhengzhou.jpg" />
http://www.izuoche.com/ditie/

<img src="https://i.loli.net/2019/02/13/5c63dafb9fc7c.jpg" alt="tokyo.jpg" title="tokyo.jpg" />
<img src="https://i.loli.net/2019/02/13/5c63dc04ab500.gif" alt="london.gif" title="london.gif" />
<img src="https://i.loli.net/2019/02/13/5c63ddb5bb5ab.gif" alt="newyork.gif" title="newyork.gif" />
<img src="https://i.loli.net/2019/02/13/5c63e082cc891.jpg" alt="seoul.jpg" title="seoul.jpg" />
<img src="https://i.loli.net/2019/02/13/5c63efc606a41.jpg" alt="Singapore.jpg" title="Singapore.jpg" />
https://www.visitsingapore.com.cn/travel-guide-tips/getting-around/tourist-guide-maps-apps/
<img src="https://i.loli.net/2019/02/13/5c643c57925fc.jpeg" alt="bangkok.jpeg" title="bangkok.jpeg" />
<img src="https://i.loli.net/2019/02/13/5c643e17c00d3.gif" alt="paris.gif" title="paris.gif" />
\******************************************************************************************************************/

export default [
  {
    id: 3001,
    name_zh: '东京',
    name_en: 'Tokyo',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63dafb9fc7c.jpg',
    subway_logo: require('../assets/images/logo/tokyo.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3002,
    name_zh: '伦敦',
    name_en: 'London',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63dc04ab500.gif',
    subway_logo: require('../assets/images/logo/london.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3003,
    name_zh: '巴黎',
    name_en: 'Paris',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c643e17c00d3.gif',
    subway_logo: require('../assets/images/logo/paris.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3004,
    name_zh: '纽约',
    name_en: 'NewYork',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63ddb5bb5ab.gif',
    subway_logo: require('../assets/images/logo/newyork.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3005,
    name_zh: '首尔',
    name_en: 'Seoul',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63e082cc891.jpg',
    subway_logo: require('../assets/images/logo/seoul.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3006,
    name_zh: '新加坡',
    name_en: 'Singapore',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63efc606a41.jpg',
    subway_logo: require('../assets/images/logo/singapore.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 3007,
    name_zh: '曼谷',
    name_en: 'Bangkok',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c643c57925fc.jpeg',
    subway_logo: require('../assets/images/logo/bangkok.png'),
    city_picture: '',
    isForeignCity: true
  },
  {
    id: 1,
    name_zh: '北京',
    name_en: 'Beijing',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54066098040.jpg',
    subway_logo: require('../assets/images/logo/beijing.png'),
    city_picture: ''
  },
  {
    id: 2,
    name_zh: '上海',
    name_en: 'Shanghai',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54065c323cf.jpg',
    subway_logo: require('../assets/images/logo/shanghai.png'),
    city_picture: ''
  },
  {
    id: 3,
    name_zh: '广州',
    name_en: 'Canton',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54065f25892.jpg',
    subway_logo: require('../assets/images/logo/canton.png'),
    city_picture: ''
  },
  {
    id: 4,
    name_zh: '深圳',
    name_en: 'Shenzhen',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54065ebf07a.jpg',
    subway_logo: require('../assets/images/logo/shenzhen.png'),
    city_picture: ''
  },
  {
    id: 5,
    name_zh: '香港',
    name_en: 'Hong Kong',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c541675955a0.jpg',
    subway_logo: require('../assets/images/logo/hongkong.png'),
    city_picture: ''
  },
  {
    id: 6,
    name_zh: '南京',
    name_en: 'Nanjing',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c5419a56753c.jpg',
    subway_logo: require('../assets/images/logo/nanjing.png'),
    city_picture: ''
  },
  {
    id: 7,
    name_zh: '重庆',
    name_en: 'Chongqing',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c541676c044b.jpg',
    subway_logo: require('../assets/images/logo/chongqing.png'),
    city_picture: ''
  },
  {
    id: 8,
    name_zh: '武汉',
    name_en: 'Wuhan',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54167783864.jpg',
    subway_logo: require('../assets/images/logo/wuhan.png'),
    city_picture: ''
  },
  {
    id: 9,
    name_zh: '成都',
    name_en: 'Chengdu',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a964110a3e.jpg',
    subway_logo: require('../assets/images/logo/chengdu.png'),
    city_picture: ''
  },
  {
    id: 10,
    name_zh: '天津',
    name_en: 'Tianjin',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a963f6ecea.jpg',
    subway_logo: require('../assets/images/logo/tianjin.png'),
    city_picture: ''
  },
  {
    id: 11,
    name_zh: '青岛',
    name_en: 'Qingdao',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a963f2b46f.png',
    subway_logo: require('../assets/images/logo/qingdao.png'),
    city_picture: ''
  },
  {
    id: 12,
    name_zh: '大连',
    name_en: 'Dalian',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a964112ef2.png',
    subway_logo: require('../assets/images/logo/dalian.png'),
    city_picture: ''
  },
  {
    id: 13,
    name_zh: '台北',
    name_en: 'Taipei',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a963f83cf9.jpg',
    subway_logo: require('../assets/images/logo/taipei.png'),
    city_picture: ''
  },
  {
    id: 14,
    name_zh: '苏州',
    name_en: 'Suzhou',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/06/5c5a98d9d3046.png',
    subway_logo: require('../assets/images/logo/suzhou.png'),
    city_picture: ''
  },
  // {
  //   id: 15,
  //   name_zh: '西安',
  //   name_en: 'Xi An',
  //   subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54065ebf07a.jpg',
  //   subway_logo: require('../assets/images/logo/xian.png'),
  //   city_picture: ''
  // },
  {
    id: 16,
    name_zh: '杭州',
    name_en: 'Hangzhou',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c639a400017d.jpg',
    subway_logo: require('../assets/images/logo/hangzhou.png'),
    city_picture: ''
  },
  // {
  //   id: 17,
  //   name_zh: '长春',
  //   name_en: 'Changchun',
  //   subway_img: SMMS_IMG_BED_BASE + '2019/02/01/5c54065ebf07a.jpg',
  //   subway_logo: require('../assets/images/logo/changchun.png'),
  //   city_picture: ''
  // },
  {
    id: 18,
    name_zh: '郑州',
    name_en: 'Zhengzhou',
    subway_img: SMMS_IMG_BED_BASE + '2019/02/13/5c63988067c1c.jpg',
    subway_logo: require('../assets/images/logo/zhengzhou.png'),
    city_picture: ''
  }
]