<template>
  <div class="log-in">
  <div class="auth-container">
    <h1>{{ isLogin ? 'Login' : 'Sign Up' }}</h1>

    <form @submit.prevent="submitForm" class="auth-form">
      <!-- Username Field -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          id="username"
          required
          placeholder="Enter your username"
        />
      </div>

      <!-- Email Field (Sign-Up only) -->
      <div class="form-group" v-if="!isLogin">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          required
          placeholder="Enter your password"
        />
      </div>

      <!-- Confirm Password Field (Sign-Up only) -->
      <div class="form-group" v-if="!isLogin">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          id="confirmPassword"
          required
          placeholder="Confirm your password"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="auth-btn">
        {{ isLogin ? 'Sign In' : 'Sign Up' }}
      </button>
    </form>

    <!-- Toggle Button -->
    <p class="toggle-link">
      <span v-if="isLogin">
        Don't have an account? <button @click="toggleForm">Sign Up here</button>
      </span>
      <span v-else>
        Already have an account? <button @click="toggleForm">Login here</button>
      </span>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true, // Controls form toggle
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      if (this.isLogin) {
        this.loginUser();
      } else {
        this.registerUser();
      }
    },
    loginUser() {
      if (this.username === "User1" && this.password === "12345678") {
        console.log("Login successful!");
        this.$router.push("/"); // Replace with your home route
      } else {
        alert("Invalid username or password. Please try again.");
      }
    },
    registerUser() {
      if (!this.email || this.password !== this.confirmPassword) {
        alert("Passwords do not match or fields are empty.");
        return;
      }
      console.log("Registering with:", this.username, this.email, this.password);
      this.$router.push("/");
    },
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.resetForm();
    },
    resetForm() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.log-in {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url('@/assets/GR.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
}
.auth-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.auth-btn {
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.auth-btn:hover {
  background: #0056b3;
}

.toggle-link {
  margin-top: 20px;
  font-size: 14px;
  color: #007bff;
}

.toggle-link button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
}
.toggle-link button:hover {
  color: #0056b3;
}
</style>
