<template>
  <div class="home">
    <div class="content-container">
      <h1>Welcome, to HR System!</h1>
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
}

.content-container {
  background-color: rgba(0, 0, 0, 0.5); /* Add slight transparency for text visibility */
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
