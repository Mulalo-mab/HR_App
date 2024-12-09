<template>
    <div class="container">
      <h1 class="text-center">Payroll Automation</h1>
  
      <!-- Payroll Table -->
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Base Salary</th>
            <th>Bonuses</th>
            <th>Deductions</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.baseSalary }}</td>
            <td>{{ employee.bonuses }}</td>
            <td>{{ employee.deductions }}</td>
            <td>{{ calculateNetPay(employee) }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Generate Payslips Button -->
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="generateAllPayslips">Generate Payslips</button>
      </div>
    </div>
  </template>
  
  <script>
  //import jsPDF from "jspdf";
  
  export default {
    data() {
      return {
        employees: [
          { id: 1, name: "John Doe", baseSalary: 5000, bonuses: 500, deductions: 300 },
          { id: 2, name: "Jane Smith", baseSalary: 4500, bonuses: 400, deductions: 200 },
          { id: 3, name: "Alice Johnson", baseSalary: 6000, bonuses: 600, deductions: 400 },
        ],
      };
    },
    methods: {
      calculateNetPay(employee) {
        return employee.baseSalary + employee.bonuses - employee.deductions;
      },
      generatePayslip(employee) {
        const doc = new jsPDF();
        const netPay = this.calculateNetPay(employee);
  
        doc.text(`Payslip for ${employee.name}`, 10, 10);
        doc.text(`Employee ID: ${employee.id}`, 10, 20);
        doc.text(`Base Salary: $${employee.baseSalary}`, 10, 30);
        doc.text(`Bonuses: $${employee.bonuses}`, 10, 40);
        doc.text(`Deductions: $${employee.deductions}`, 10, 50);
        doc.text(`Net Pay: $${netPay}`, 10, 60);
  
        doc.save(`${employee.name}_Payslip.pdf`);
      },
      generateAllPayslips() {
        this.employees.forEach((employee) => {
          this.generatePayslip(employee);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  