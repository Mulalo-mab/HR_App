<template>
  <div class="home">
    <div class="content-container">
      <h1>Welcome to HR System!</h1>
      <p>Your HR System is ready to manage your team efficiently.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url('@/assets/Backgrnd.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px; /* Ensures content doesn’t touch the edges on small screens */
}

.content-container {
  background-color: rgba(0, 0, 0, 0.5); /* Add slight transparency for text visibility */
  padding: 5%; /* Adjust padding relatively for better scaling */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 90%; /* Prevents content from becoming too wide on large screens */
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Responsive Design */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .content-container {
    padding: 40px; /* Increase padding for larger screens */
    max-width: 60%; /* Restrict width for better readability */
  }
}

@media (min-width: 1200px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .content-container {
    padding: 60px;
    max-width: 50%;
  }
}
</style>