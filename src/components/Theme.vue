<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg" :class="isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="btn btn-primary ml-auto" @click="toggleTheme">
          Toggle {{ isDarkMode ? 'Light' : 'Dark' }} Mode
        </button>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.setAttribute(
          "data-theme",
          this.isDarkMode ? "dark" : "light"
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    padding: 15px;
  }

  
  </style>