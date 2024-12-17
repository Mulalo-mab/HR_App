<template>
  <div class="payrol">
    <section class="payroll-calculator container mt-5">
      <h2 class="text-center text-dark mb-4">Payroll Calculator</h2>

      <!-- Employee Data Table -->
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-dark">
          <tr >
            <th>Employee ID</th>
            <th>Hours Worked</th>
            <th>Leave Deductions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in payrollData" :key="employee.employeeId">
            <td>{{ employee.employeeId }}</td>
            <td>{{ employee.hoursWorked }}</td>
            <td>{{ employee.leaveDeductions }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="selectEmployee(employee)">
                Calculate Payslip
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal Section -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h4 class="mb-3">Payslip Details</h4>
          <p>Employee ID: {{ selectedEmployeeData?.employeeId }}</p>
          <p>Hours Worked: {{ selectedEmployeeData?.hoursWorked }}</p>
          <p>Leave Deductions: {{ selectedEmployeeData?.leaveDeductions }}</p>
          <p class="font-weight-bold text-success">Final Salary: R{{ payResult }}</p>

          <!-- Close Modal Button -->
          <button class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample employee payroll data
      payrollData: [
        { employeeId: 1, hoursWorked: 160, leaveDeductions: 8, finalSalary: 69500 },
        { employeeId: 2, hoursWorked: 150, leaveDeductions: 10, finalSalary: 79000 },
        { employeeId: 3, hoursWorked: 170, leaveDeductions: 4, finalSalary: 54800 },
        { employeeId: 4, hoursWorked: 165, leaveDeductions: 6, finalSalary: 59700 },
        { employeeId: 5, hoursWorked: 158, leaveDeductions: 5, finalSalary: 57850 },
        { employeeId: 6, hoursWorked: 168, leaveDeductions: 2, finalSalary: 64800 },
        { employeeId: 7, hoursWorked: 175, leaveDeductions: 3, finalSalary: 71800 },
        { employeeId: 8, hoursWorked: 160, leaveDeductions: 0, finalSalary: 56000 },
        { employeeId: 9, hoursWorked: 155, leaveDeductions: 5, finalSalary: 61500 },
        { employeeId: 10, hoursWorked: 162, leaveDeductions: 4, finalSalary: 57750 },
      ],
      showModal: false, // Controls modal visibility
      selectedEmployeeData: null, // Stores selected employee data
      payResult: null, // Stores calculated pay
    };
  },
  methods: {
    // Select an employee and calculate their pay
    selectEmployee(employee) {
      this.selectedEmployeeData = employee;
      this.payResult = employee.finalSalary;
      this.showModal = true; // Open modal after calculation
    },
    // Close the modal
    closeModal() {
      this.showModal = false;
      this.selectedEmployeeData = null;
      this.payResult = null;
    },
  },
};
</script>

<style scoped>
/* Payroll calculator container styles */
.payrol {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-image: url('@/assets/buildings.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
}

/* Styling for the calculator section */
.payroll-calculator {
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

/* Table styles */
table {
  width: 100%;
  background: white;
  margin-top: 20px;
  border-collapse: collapse;
}

thead {
  background-color: #00ff6e;
  color: rgb(59, 95, 223);
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  font-weight: bold;
}

td button {
  margin: 0;
  padding: 5px 10px;
}

/* Modal overlay styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content styling */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
}

/* Result section styling */
.result {
  background-color: #f8f9fa;
  font-size: 1.2rem;
  padding: 15px;
  border-radius: 5px;
}

/* MEDIA QUERIES */

/* Large screens (1200px and above) */
@media (min-width: 1200px) {
  .payroll-calculator {
    max-width: 1000px;
    padding: 40px;
  }
  table {
    font-size: 1rem;
  }
  .result {
    font-size: 1.5rem;
  }
}

/* Medium screens (768px - 1199px) */
@media (max-width: 1199px) and (min-width: 768px) {
  .payroll-calculator {
    max-width: 800px;
    padding: 30px;
  }
  table {
    font-size: 0.9rem;
  }
  .result {
    font-size: 1.2rem;
  }
}

/* Small screens (480px - 767px) */
@media (max-width: 767px) and (min-width: 480px) {
  .payroll-calculator {
    padding: 20px;
  }
  table {
    font-size: 0.85rem;
  }
  th,
  td {
    padding: 8px;
  }
  .modal-content {
    width: 95%;
    padding: 15px;
  }
  .result {
    font-size: 1rem;
  }
}

/* Extra-small screens (less than 480px) */
@media (max-width: 479px) {
  .payrol {
    flex-direction: column;
    padding: 5px;
  }
  .payroll-calculator {
    padding: 15px;
  }
  h2 {
    font-size: 1.5rem;
  }
  table {
    font-size: 0.8rem;
  }
  th,
  td {
    padding: 5px;
  }
  .modal-content {
    width: 100%;
    padding: 10px;
  }
  .modal-content h4 {
    font-size: 1rem;
  }
  .result {
    font-size: 0.9rem;
  }
}
</style>
