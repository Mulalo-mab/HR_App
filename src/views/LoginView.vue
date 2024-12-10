<template>
    <div class="login-container">
      <h2>HR System Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            autocomplete="off"
            :disabled="loading"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            autocomplete="off"
            :disabled="loading"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: null,
        loading: false,
      };
    },
    methods: {
      async handleSubmit() {
        // Reset error state
        this.error = null;
  
        // Client-side validation
        if (!this.username || !this.password) {
          this.error = "Both fields are required.";
          return;
        }
        if (this.password.length < 6) {
          this.error = "Password must be at least 6 characters long.";
          return;
        }
  
        // Simulate login logic
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
  
          // Simulate a successful login and redirect
          if (this.username === "admin" && this.password === "password123") {
            this.$router.push("/"); // Redirect to the home page
          } else {
            this.error = "Invalid username or password.";
          }
        }, 1000); // Simulate a delay for login
      },
    },
  };
  </script>
  
  <style>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #F9F9F9;
  }
  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
  .form-group {
    margin-bottom: 1em;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  button {
    width: 100%;
    padding: 0.7em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1em;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .error-message {
    color: red;
    margin-top: 1em;
    text-align: center;
  }
  </style>
  