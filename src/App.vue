<template>
  <div>
    <!-- Conditionally render navbar only if we're not on the login page -->
    <nav v-if="!isLoginPage" class="navbar navbar-expand-lg custom-blue-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/G.png" alt="logo" class="navbar-logo"> GR Systems
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login" class="nav-link" active-class="active">Log-Out</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/employee" class="nav-link" active-class="active">Employee</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/payroll" class="nav-link" active-class="active">Payroll</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/timeoff" class="nav-link" active-class="active">Time-off</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoginPage() {
      // Check if the current route is the login page
      return this.$route.path === '/login';
    }
  }
}
</script>

<style scoped>
/* Custom CSS for blue navbar */
.custom-blue-navbar {
  background-color: #4a90e2; /* Medium blue shade */
  transition: background-color 0.3s ease-in-out; /* Smooth transition for background color */
}

.nav-link {
  color: white !important; /* Ensure links are visible */
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transition for hover effects */
  margin-left: 15px; /* Add spacing between nav links */
}

.nav-link.active {
  color: #57ff65 !important; /* Highlight active link */
}

/* Hover effect for nav links */
.nav-link:hover {
  color: #62ff57 !important; /* Change color on hover */
  transform: scale(1.1); /* Slightly enlarge the text */
}

/* Navbar brand (logo + text) */
.navbar-brand {
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center; /* Align text and logo vertically */
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth hover transition */
}

.navbar-logo {
  height: 40px; /* Set the height of the logo */
  width: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between the logo and text */
  transition: transform 0.3s ease-in-out; /* Smooth hover effect */
}

/* Hover effect for navbar brand */
.navbar-brand:hover {
  color: #8bf11f; /* Change text color */
  transform: scale(1.1); /* Slightly enlarge the brand on hover */
}

.navbar-logo:hover {
  transform: rotate(360deg); /* Add a fun spinning effect to the logo */
}

/* Media Queries for responsiveness */

/* For screens smaller than 768px (tablets and mobile) */
@media (max-width: 767px) {
  .navbar-logo {
    height: 30px; /* Adjust logo size for smaller screens */
  }
  
  .navbar-brand {
    font-size: 14px; /* Reduce font size for navbar text */
  }

  .nav-link {
    font-size: 14px; /* Adjust nav-link text size */
  }

  .navbar-collapse {
    background-color: #4a90e2; /* Ensure background stays the same when collapsed */
  }
}

/* For screens larger than 768px (tablets and above) */
@media (min-width: 768px) {
  .navbar-brand {
    font-size: 18px; /* Larger font size for better readability */
  }

  .nav-link {
    font-size: 16px; /* Ensure nav links are readable on larger screens */
  }
}
</style>
