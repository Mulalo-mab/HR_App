<template>
    <div class="container">
      <h1 class="text-center">HR Dashboard</h1>
  
      <!-- Summary Cards -->
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Total Employees</h5>
              <p class="card-text">{{ totalEmployees }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Pending Requests</h5>
              <p class="card-text">{{ pendingRequests }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Payroll Overview</h5>
              <p class="card-text">${{ totalPayroll }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Approved Requests</h5>
              <p class="card-text">{{ approvedRequests }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Quick Links -->
      <div class="row mt-4 text-center">
        <div class="col-md-4">
          <button class="btn btn-primary w-100">Manage Employees</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100">View Payroll</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100">Approve Time-Off</button>
        </div>
      </div>
  
      <!-- Charts Section -->
      <div class="row mt-4">
        <div class="col-md-6">
          <h5>Attendance Overview</h5>
          <canvas id="attendanceChart"></canvas>
        </div>
        <div class="col-md-6">
          <h5>Payroll Breakdown</h5>
          <canvas id="payrollChart"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 // import Chart from "chart.js/auto";
  
  export default {
    data() {
      return {
        totalEmployees: 50,
        pendingRequests: 8,
        totalPayroll: 120000,
        approvedRequests: 42,
      };
    },
    mounted() {
      this.renderAttendanceChart();
      this.renderPayrollChart();
    },
    methods: {
      renderAttendanceChart() {
        const ctx = document.getElementById("attendanceChart").getContext("2d");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["John", "Jane", "Alice", "Mark", "Sara"],
            datasets: [
              {
                label: "Attendance (%)",
                data: [95, 90, 97, 85, 92],
                backgroundColor: "#007bff",
              },
            ],
          },
        });
      },
      renderPayrollChart() {
        const ctx = document.getElementById("payrollChart").getContext("2d");
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Base Salaries", "Bonuses", "Deductions"],
            datasets: [
              {
                data: [100000, 15000, 5000],
                backgroundColor: ["#007bff", "#28a745", "#dc3545"],
              },
            ],
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  .card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .card-title {
    font-weight: bold;
  }
  </style>
  