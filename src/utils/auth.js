import CryptoJS from 'crypto-js';
 
export const secureStorage = {
  setItem(key, value) {
    const encrypted = CryptoJS.AES.encrypt( 
      value, 
      import.meta.env.VITE_CRYPTO_SECRET  
    ).toString();
    localStorage.setItem(key,  encrypted);
  },
  getItem(key) {
    //...解密逻辑 
  }
};