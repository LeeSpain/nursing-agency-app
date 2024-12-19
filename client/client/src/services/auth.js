const Auth = {
    isAuthenticated: false, // Change to 'true' after login logic
    login(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // Simulate async login
    },
    logout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };
  
  export default Auth;
  