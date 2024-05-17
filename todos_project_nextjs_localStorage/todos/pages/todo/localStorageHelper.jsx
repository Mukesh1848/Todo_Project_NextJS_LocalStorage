export const localStorageHelper = {
  setItem: function (key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  },

  getItem: function (key) {
    try {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue === null) return null;
      return JSON.parse(jsonValue);
    } catch (e) {
      console.error("Error reading from localStorage", e);
      return null;
    }
  },

  // removeItem: function(key) {
  //     try {
  //         localStorage.removeItem(key);
  //     } catch (e) {
  //         console.error('Error removing from localStorage', e);
  //     }
  // },
};

export default localStorageHelper;
