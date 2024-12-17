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
/* Base styles */
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url('@/assets/Backgrnd.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
}

/* Content container with heartbeat animation and color change */
.content-container {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  animation: heartbeat 1.5s ease-in-out infinite; /* Heartbeat animation */
}

/* Keyframes for heartbeat animation with color change */
@keyframes heartbeat {
  0% {
    transform: scale(1);
    background-color: rgba(0, 0, 0, 0.5); /* Default color */
  }
  30% {
    transform: scale(1.1);
    background-color: rgba(0, 128, 128, 0.7); /* Teal color */
  }
  60% {
    transform: scale(1);
    background-color: rgba(128, 0, 128, 0.7); /* Purple color */
  }
  100% {
    transform: scale(1);
    background-color: rgba(0, 0, 0, 0.5); /* Back to default color */
  }
}

/* Heading and paragraph styles */
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
    padding: 40px;
    max-width: 60%;
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
