export const secureStorage = {
  hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex); 
  },
  
  storeAuthData(token, user) {
    localStorage.setItem('jwtToken',  token);
    localStorage.setItem('user',  JSON.stringify(user)); 
  },
 
  clearAuthData() {
    localStorage.removeItem('jwtToken'); 
    localStorage.removeItem('user'); 
  }
};