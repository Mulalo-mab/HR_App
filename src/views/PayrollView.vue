<template>
  <section class="payroll-calculator container mt-5">
    <h2 class="text-center mb-4">Payroll Calculator</h2>
    <form @submit.prevent="calculatePay" class="p-4 border rounded shadow">
      <!-- Employee Selection -->
      <div class="mb-3">
        <label for="employee" class="form-label">Employee:</label>
        <select id="employee" v-model="selectedEmployee" class="form-select">
          <option value="" disabled>Select Employee</option>
          <option v-for="employee in employees" :key="employee.id" :value="employee.id">
            {{ employee.name }}
          </option>
        </select>
      </div>
      <!-- Hours Worked -->
      <div class="mb-3">
        <label for="hours-worked" class="form-label">Hours Worked:</label>
        <input
          type="number"
          id="hours-worked"
          v-model.number="hoursWorked"
          class="form-control"
          placeholder="Enter hours worked"
        />
      </div>
      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100">Calculate Pay</button>
    </form>
    <!-- Result Section -->
    <div v-if="payResult !== null" class="result mt-4 p-3 border rounded shadow">
      <h5 class="text-success">Calculated Pay:</h5>
      <p>R{{ payResult }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { id: 1, name: "Mulalo Mabuda" },
        { id: 2, name: "Lithemba Mlenze" },
        { id: 3, name: "Anele Mbombiya" },
        { id: 4, name: "Bukho Sean" },
        { id: 5, name: "Sinoyolo Ngavu"},
        
      ],
      selectedEmployee: "",
      hoursWorked: 0,
      hourlyRate: 300, // Example hourly rate
      payResult: null,
    };
  },
  methods: {
    calculatePay() {
      if (!this.selectedEmployee || this.hoursWorked <= 0) {
        alert("Please select an employee and enter valid hours worked.");
        return;
      }
      this.payResult = this.hoursWorked * this.hourlyRate;
    },
  },
};
</script>

<style scoped>
.payroll-calculator {
  max-width: 600px;
  margin: 0 auto;
}

.result {
  background-color: #f8f9fa; /* Light gray background */
  font-size: 1.2rem;
}
</style>
