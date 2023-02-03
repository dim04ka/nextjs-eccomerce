import Img1 from '../public/images/1.webp'
import Img2 from '../public/images/2.webp'
import Img3 from '../public/images/3.webp'
import Img4 from '../public/images/4.webp'
import Img5 from '../public/images/5.webp'
import Img6 from '../public/images/6.webp'
import Img7 from '../public/images/7.webp'
import Img8 from '../public/images/8.webp'
import Img9 from '../public/images/9.webp'
import Imgk2 from '../public/images/k2.webp'
import Imgm2 from '../public/images/m2.webp'
import Img11 from '../public/images/11.webp'
import Img11_1 from '../public/images/11.1.webp'
import Img12 from '../public/images/12.webp'
import Img12_1 from '../public/images/12.1.webp'

export const productsListLocale = {
  'en': [
    {
      id: 1,
      title: 'new candles',
      price: '35',
      description: `
     Good year with new candles🎄.
  
     Price: 35
      `,
      photo: [Img12, Img12_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
    {
      id: 2,
      title: 'dear',
      price: '15',
      description: `the first )))
     🔥price`,
      photo: [Img11, Img11_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
  ],
  'ru': [
    {
      id: 1,
      title: 'Новогодний набор свечей',
      price: '35',
      description: `
      Потрясающий новогодний набор свечей 🎄.
  Он станет отличным и оригинальным элементом новогоднего и рождественского декора интерьера.
  В набор входит: свеча "Олененок", свеча "Пряничный человек", свеча "Елочка", открытка и крафтовая упаковка.
  
  🔥Цена набора: 35 ₾
      `,
      photo: [Img12, Img12_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
    {
      id: 2,
      title: 'Олененок',
      price: '15',
      description: `Первое поступление новогодних свечей🎄- новогодний олененок!
      Милый малыш станет отличным дополнением интерьера и подарит новогоднее настроение.
      🎄🎁✨🎄🎁✨🎄🎁✨🎄🎁✨🎄
       Высота: 9,5 см
       Вес: 70 гр.
      Фитиль: хлопок
      Состав: 100% соевый воск
     🔥Цена одной свечи`,
      photo: [Img11, Img11_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
  ],
  'ge': [
    {
      id: 1,
      title: 'ge',
      price: '35',
      description: `
      Потрясающий новогодний набор свечей 🎄.
  gegege
  
  🔥gege: 35 ₾
      `,
      photo: [Img12, Img12_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
    {
      id: 2,
      title: 'gegeg2',
      price: '15',
      description: `gegege)))
     🔥price`,
      photo: [Img11, Img11_1],
      tooltip: { title: 'NEW', color: '#5b995e', active: true }
    },
  ]
}

export const productsList = [
  {
    id: 12,
    title: 'Новогодний набор свечей',
    price: '35',
    description: `
    Потрясающий новогодний набор свечей 🎄.
Он станет отличным и оригинальным элементом новогоднего и рождественского декора интерьера.
В набор входит: свеча "Олененок", свеча "Пряничный человек", свеча "Елочка", открытка и крафтовая упаковка.

🔥Цена набора: 35 ₾
    `,
    photo: [Img12, Img12_1],
    tooltip: { title: 'NEW', color: '#5b995e', active: true }
  },
  {
    id: 11,
    title: 'Олененок',
    price: '15',
    description: `Первое поступление новогодних свечей🎄- новогодний олененок!
    Милый малыш станет отличным дополнением интерьера и подарит новогоднее настроение.
    🎄🎁✨🎄🎁✨🎄🎁✨🎄🎁✨🎄
     Высота: 9,5 см
     Вес: 70 гр.
    Фитиль: хлопок
    Состав: 100% соевый воск
   🔥Цена одной свечи`,
    photo: [Img11, Img11_1],
    tooltip: { title: 'NEW', color: '#5b995e', active: true }
  },

  { id: 1, title: 'Интерьерные свечи в виде женского силуэта "Eva"', price: '15', description: `Свеча, которая сможет идеально вписаться в любой интерьер.
  Высота: 9 см
  Вес: 100 гр.
  Фитиль: хлопок
  Состав: 100% соевый воск`, photo: [Img1, Img2], 
  tooltip: { title: 'BEST', color: '#55c359', active: false }
},
  { id: 4, title: 'Скульптурная свеча David ', price: '20', description: `Скульптурные свечи являются вечной классикой и никогда не выйдут из моды!
  Высота: 9,5 см
  Вес: 105 гр.
  Фитиль: хлопок
  Состав: 100% соевый воск`, photo: [Img3, Imgm2] },
  { id: 5, title: 'Набор номер 1', price: '25', description: '', photo: [Img4] },
  { id: 6, title: 'Скульптурные свечи Eva и David', price: '35', description: '', photo: [Img5] },
  { id: 7, title: 'Скульптурные свечи Набор номер 2', price: '40', description: '', photo: [Img6], tooltip: { title: 'SALE', color: '#e31010', active: true }  },
  { id: 8, title: 'Booble', price: '15', description: 'Стильная, романтичная, воздушная - станет отличным украшением для Вашего интерьера!', photo: [Img7, Imgk2] },
  { id: 9, title: 'Солнце и Луна', price: '15', description: `Солнце и Луна 🌓 - бесконечная гармонию.
  Очень уютная, домашняя и минималистичная свеча.`, photo: [Img8] },
  { id: 10, title: 'Крафтовые спички', price: '5', description: `Крафтовые спички для самых нежных соевых свечей 🔥🔥🔥`, photo: [Img9] },


]
