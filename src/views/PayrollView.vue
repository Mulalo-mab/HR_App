<template>
  <section class="payroll-calculator container mt-5">
    <h2 class="text-center mb-4">Payroll Calculator</h2>
    <form @submit.prevent="calculatePay" class="p-4 border rounded shadow">
      <!-- Employee Selection -->
      <div class="mb-3">
        <label for="employee" class="form-label">Employee:</label>
        <select id="employee" v-model="selectedEmployee" class="form-select">
          <option value="" disabled>Select Employee</option>
          <option v-for="employee in payrollData" :key="employee.employeeId" :value="employee.employeeId">
            Employee {{ employee.employeeId }}
          </option>
        </select>
      </div>
      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100">Calculate Pay</button>
    </form>
    <!-- Result Section -->
    <div v-if="payResult !== null" class="result mt-4 p-3 border rounded shadow">
      <h5 class="text-success">Calculated Pay:</h5>
      <p>Hours Worked: {{ selectedEmployeeData?.hoursWorked }}</p>
      <p>Leave Deductions: {{ selectedEmployeeData?.leaveDeductions }}</p>
      <p>Final Salary: R{{ payResult }}</p>
      <button class="btn btn-secondary" @click="closeResult">Close</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      payrollData: [
        {
          employeeId: 1,
          hoursWorked: 160,
          leaveDeductions: 8,
          finalSalary: 69500,
        },
        {
          employeeId: 2,
          hoursWorked: 150,
          leaveDeductions: 10,
          finalSalary: 79000,
        },
        {
          employeeId: 3,
          hoursWorked: 170,
          leaveDeductions: 4,
          finalSalary: 54800,
        },
        {
          employeeId: 4,
          hoursWorked: 165,
          leaveDeductions: 6,
          finalSalary: 59700,
        },
        {
          employeeId: 5,
          hoursWorked: 158,
          leaveDeductions: 5,
          finalSalary: 57850,
        },
        {
          employeeId: 6,
          hoursWorked: 168,
          leaveDeductions: 2,
          finalSalary: 64800,
        },
        {
          employeeId: 7,
          hoursWorked: 175,
          leaveDeductions: 3,
          finalSalary: 71800,
        },
        {
          employeeId: 8,
          hoursWorked: 160,
          leaveDeductions: 0,
          finalSalary: 56000,
        },
        {
          employeeId: 9,
          hoursWorked: 155,
          leaveDeductions: 5,
          finalSalary: 61500,
        },
        {
          employeeId: 10,
          hoursWorked: 162,
          leaveDeductions: 4,
          finalSalary: 57750,
        },
      ],
      selectedEmployee: "",
      payResult: null,
      selectedEmployeeData: null,
    };
  },
  methods: {
    calculatePay() {
      if (!this.selectedEmployee) {
        alert("Please select an employee.");
        return;
      }
      const employeeData = this.payrollData.find(
        (data) => data.employeeId === this.selectedEmployee
      );
      if (employeeData) {
        this.selectedEmployeeData = employeeData;
        this.payResult = employeeData.finalSalary;
      }
    },
    closeResult() {
      this.payResult = null;
      this.selectedEmployeeData = null;
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
