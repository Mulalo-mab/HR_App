<template>
  <div class="payrol">
    <section class="payroll-calculator container mt-5">
      <h2 class="text-center text-light mb-4">Payroll Calculator</h2>

      <!-- Button to trigger modal -->
      <button class="btn btn-primary" @click="showModal = true">Select Employee & Calculate Pay</button>

      <!-- Modal Section -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h4 class="mb-3">Select Employee</h4>

          <!-- Employee List -->
          <ul class="list-group mb-3">
            <li 
              v-for="employee in payrollData" 
              :key="employee.employeeId" 
              class="list-group-item d-flex justify-content-between align-items-center">
              <span>Employee {{ employee.employeeId }} (Hours: {{ employee.hoursWorked }}, Leave: {{ employee.leaveDeductions }})</span>
              <button class="btn btn-success btn-sm" @click="selectEmployee(employee)">Select</button>
            </li>
          </ul>

          <!-- Close Modal Button -->
          <button class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>

      <!-- Result Section -->
      <div v-if="payResult !== null" class="result mt-4 p-3 border rounded shadow">
        <h5 class="text-success">Calculated Pay:</h5>
        <p>Employee ID: {{ selectedEmployeeData?.employeeId }}</p>
        <p>Hours Worked: {{ selectedEmployeeData?.hoursWorked }}</p>
        <p>Leave Deductions: {{ selectedEmployeeData?.leaveDeductions }}</p>
        <p>Final Salary: R{{ payResult }}</p>

        <!-- Close Result Button -->
        <button class="btn btn-secondary" @click="closeResult">Close</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample employee payroll data
      payrollData:  [
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
      this.closeModal(); // Close modal after selection
    },
    // Close the modal
    closeModal() {
      this.showModal = false;
    },
    // Close the result section
    closeResult() {
      this.payResult = null;
      this.selectedEmployeeData = null;
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
  max-width: 600px;
  margin: 0 auto;
}

/* Modal overlay styling */
.modal-overlay {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Slight transparency */
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
  margin-top: 20px;
}

/* Result section styling */
.result {
  background-color: #f8f9fa;
  font-size: 1.2rem;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .payrol {
    padding: 5px;
  }
  .payroll-calculator {
    width: 100%;
    margin: 0;
  }
  .modal-content {
    width: 90%;
    padding: 15px;
  }
  .result {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .payrol {
    flex-direction: column;
    align-items: stretch;
  }
  .payroll-calculator h2 {
    font-size: 1.5rem;
  }
  .modal-content {
    font-size: 0.9rem;
    width: 95%;
    padding: 10px;
  }
  .result {
    font-size: 0.9rem;
  }
}

/* Modal-specific responsiveness */
@media (max-width: 360px) {
  .modal-content {
    font-size: 0.8rem;
    width: 100%;
    padding: 5px;
  }
  .modal-content h4 {
    font-size: 1rem;
  }
  .list-group-item {
    font-size: 0.8rem;
  }
}
</style>
