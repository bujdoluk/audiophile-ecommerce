import { createStore } from 'vuex';

export default createStore({
  state: {
    cartModal: null,
    thankyouModal: null,
    currentProduct: {},
    cart: [],
    earphones: [
      {
        name: 'yx1',
        title: 'YX1 WIRELLESS EARPHONES',
        id: 1,
        price: 599,
        image: require('../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'),
        text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        total: 0,
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
        name: 'xx59',
        title: 'XX59 HEADPHONES',
        id: 2,
        price: 899,
        image: require('../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'),
        text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        total: 0,
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
        name: 'xx59-mark-I',
        title: 'XX99 MARK I HEADPHONES',
        id: 3,
        price: 1750,
        image: require('../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'),
        text: 'As the gold standart for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and musix adicionados alike in studios and on the go.',
        total: 0,
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
        name: 'xx99-mark-II',
        title: 'XX99 MARK II HEADPHONES',
        id: 4,
        price: 2999,
        image: require('../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'),
        text: ' The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium heaphone experience by repdocusing the balanced depth and precision of studio-quality sound.',
        total: 0,
        boxname1: 'Headphone Unit',
        boxname2: 'Replacement Earcups',
        boxname3: 'User Manual',
        boxname4: '3.5mm 5m Audio Cable',
        boxqty1: 1,
        boxqty2: 2,
        features1: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
        features2: 'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
      },
    ],
    speakers: [
      {
        name: 'zx7',
        title: 'ZX7 SPEAKER',
        id: 5,
        price: 3500,
        image: require('../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'),
        text: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        total: 0,
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
        name: 'zx9',
        title: 'ZX9 SPEAKER',
        id: 6,
        price: 4500,
        image: require('../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'),
        text: 'Upgrade your sound system with the all new ZX9 active speaker. It is a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.',
        total: 0,
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
    TOGGLE_CART_MODAL(state) {
      state.cartModal = !state.cartModal;
    },
    TOGGLE_THANKYOU_MODAL(state) {
      state.thankyouModal = !state.thankyouModal;
    },
    ADD_PRODUCT: (state, product) => {
      state.cart.push(product);
    },
    DELETE_PRODUCT: (state, index) => {
      state.cart.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    }
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
    toggleCartModal: (context) => {
      context.commit('TOGGLE_CART_MODAL');
    },
    toggleThankYouModal: (context) => {
      context.commit('TOGGLE_THANKYOU_MODAL');
    }
  },
})
