<template>
  <div>
    <nav class="navbar navbar-expand-lg custom-blue-navbar">
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
        <div class="collapse navbar-collapse" id="navbarNav">
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

<style>
/* Custom CSS for blue navbar */
.custom-blue-navbar {
  background-color: #4a90e2; /* Medium blue shade */
}

.nav-link {
  color: white !important; /* Ensure links are visible */
}

.nav-link.active {
  color: #ffdd57 !important; /* Highlight active link */
}

.navbar-brand {
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center; /* Align text and logo vertically */
}

.navbar-logo {
  height: 40px; /* Set the height of the logo */
  width: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between the logo and text */
}


</style>