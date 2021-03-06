import { createStore } from 'vuex';

let cart = window.localStorage.getItem('cart');

export default createStore({
  state: {
    modal: null,
    cartModal: null,
    thankyouModal: null,
    currentProduct: {},
    cart: cart ? JSON.parse(cart) : [],
    earphones: [
      {
        name: 'YX1',
        title: 'YX1 WIRELLESS EARPHONES',
        category: 'Earphone',
        id: 1,
        price: 599,
        sold: 24,
        reviews: 92,
        stars: 4.2,
        image: require('../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-yx1-earphones.jpg'),
        imagedesktoplefttop: require('../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'),
        text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        quantity: 1,
        boxname1: 'Earphone Unit',
        boxname2: 'Multi-size Earplugs',
        boxname3: 'User Manual',
        boxname4: 'USB_C Charging Cable',
        boxname5: 'Travel Pouch',
        boxqty1: 1,
        boxqty2: 2,
        boxqty6: 6,
        features1: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
        features2: 'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
      },
    ],
    headphones: [
      {
        name: 'XX59',
        title: 'XX59 HEADPHONES',
        category: 'Headphone',
        id: 2,
        price: 899,
        sold: 52,
        reviews: 215,
        stars: 5,
        image: require('../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-xx59-headphones.jpg'),
        imagedesktoplefttop: require('../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-xx59-headphones/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-xx59-headphones/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-xx59-headphones/mobile/image-gallery-3.jpg'),
        text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        quantity: 1,
        boxname1: 'Headphone Unit',
        boxname2: 'Replacement Earcups',
        boxname3: 'User Manual',
        boxname4: '3.5mm 5m Audio Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
        features2: 'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
      },
      {
        name: 'XX99-mark-I',
        title: 'XX99 MARK I HEADPHONES',
        category: 'Headphone',
        id: 3,
        price: 1750,
        sold: 65,
        reviews: 125,
        stars: 3.4,
        image: require('../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-xx99-mark-one-headphones.jpg'),
        imagedesktoplefttop: require('../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'),
        text: 'As the gold standart for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and musix adicionados alike in studios and on the go.',
        quantity: 1,
        boxname1: 'Headphone Unit',
        boxname2: 'Replacement Earcups',
        boxname3: 'User Manual',
        boxname4: '3.5mm 5m Audio Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
        features2: 'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
      },
      {
        name: 'XX99-mark-II',
        title: 'XX99 MARK II HEADPHONES',
        category: 'Headphone',
        id: 4,
        price: 2999,
        sold: 12,
        reviews: 42,
        stars: 4.4,
        image: require('../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-xx99-mark-two-headphones.jpg'),
        imagedesktoplefttop: require('../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'),
        text: ' The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium heaphone experience by repdocusing the balanced depth and precision of studio-quality sound.',
        quantity: 1,
        boxname1: 'Headphone Unit',
        boxname2: 'Replacement Earcups',
        boxname3: 'User Manual',
        boxname4: '3.5mm 5m Audio Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you???re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you???ll never miss a beat.',
        features2: 'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
      },
    ],
    speakers: [
      {
        name: 'ZX7',
        title: 'ZX7 SPEAKER',
        category: 'Speaker',
        id: 5,
        price: 3500,
        sold: 8,
        reviews: 45,
        stars: 2,
        image: require('../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-zx7-speaker.jpg'),
        imagedesktoplefttop: require('../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-zx7-speaker/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-zx7-speaker/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-zx7-speaker/mobile/image-gallery-3.jpg'),
        text: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        quantity: 1,
        boxname1: 'Speaker Unit',
        boxname2: 'Speaker Cloth Panel',
        boxname3: 'User Manual',
        boxname4: '3.5mm 10m Audio Cable',
        boxname5: '10m Optical Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookschelf speakers cannot provide. The woofers are made from aluminium that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
        features2: 'The ZX7 speaker is the perfect blend of stylish deisgn and high perfomance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This verstile speaker is equipped to delvier an authentic listening experience.',
      },
      {
        name: 'ZX9',
        title: 'ZX9 SPEAKER',
        category: 'Speaker',
        id: 6,
        price: 4500,
        sold: 15,
        reviews: 35,
        stars: 3.8,
        image: require('../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'),
        imageCart: require('../assets/cart/image-zx9-speaker.jpg'),
        imagedesktoplefttop: require('../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'),
        imagedesktopleftbottom: require('../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'),
        imagedesktopright: require('../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'),
        imagemobilelefttop: require('../assets/product-zx9-speaker/mobile/image-gallery-1.jpg'),
        imagemobileleftbottom: require('../assets/product-zx9-speaker/mobile/image-gallery-2.jpg'),
        imagemobileright: require('../assets/product-zx9-speaker/mobile/image-gallery-3.jpg'),
        text: 'Upgrade your sound system with the all new ZX9 active speaker. It is a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.',
        quantity: 1,
        boxname1: 'Speaker Unit',
        boxname2: 'Speaker Cloth Panel',
        boxname3: 'User Manual',
        boxname4: '3.5mm 10m Audio Cable',
        boxname5: '10m Optical Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'Connect via BlueTooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100)m.',
        features2: 'Discover clear, more natural sounding hights than the competition with ZX9 is signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5" aluminium alloy bass unit. You will be able to enjoy equal sound quality wheather in a large room or small den.Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
      },
    ]
  },
  getters: {
    getEarphones: state => state.earphones,
    getSpeakers: state => state.speakers,
    getHeadphones: state => state.headphones,
    getAllProducts: state => state.earphones.concat(state.speakers).concat(state.headphones),
    getCart: state => state.cart,
    getCurrentProduct: state => state.currentProduct,
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.modal = !state.modal;
    },
    TOGGLE_CART_MODAL(state) {
      state.cartModal = !state.cartModal;
    },
    TOGGLE_THANKYOU_MODAL(state) {
      state.thankyouModal = !state.thankyouModal;
    },
    ADD_PRODUCT: (state, item) => {

      let foundDuplicateProduct = state.cart.find(product => product.id == item.id);

      if (foundDuplicateProduct) {
        foundDuplicateProduct.quantity++;
      } else {
        state.cart.push(item);
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    DELETE_PRODUCT: (state, index) => {
      state.cart.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    // EMPTY_CURRENT_PRODUCT: (state) => {
    //   state.currentProduct = null;
    // }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    deleteProduct: (context, index) => {
      context.commit('DELETE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    // emptyCurrentProduct: (context, product) => {
    //   context.commit('EMPTY_CURRENT_PRODUCT', product);
    // },
    toggleModal: (context) => {
      context.commit('TOGGLE_MODAL');
    },
    toggleCartModal: (context) => {
      context.commit('TOGGLE_CART_MODAL');
    },
    toggleThankYouModal: (context) => {
      context.commit('TOGGLE_THANKYOU_MODAL');
    },
  },
})
