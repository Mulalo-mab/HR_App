<template>
    <div class="container">
      <h1 class="text-center">Employee Data Management</h1>
  
      <!-- Add Employee Form -->
      <form @submit.prevent="addEmployee" class="mt-4">
        <div class="row">
          <div class="col-md-3">
            <input type="text" class="form-control" placeholder="Name" v-model="newEmployee.name" required />
          </div>
          <div class="col-md-3">
            <input type="text" class="form-control" placeholder="Role" v-model="newEmployee.role" required />
          </div>
          <div class="col-md-3">
            <input type="number" class="form-control" placeholder="Salary" v-model="newEmployee.salary" required />
          </div>
          <div class="col-md-3">
            <button class="btn btn-success w-100">Add Employee</button>
          </div>
        </div>
      </form>
  
      <!-- Employee Table -->
      <table class="table table-striped" border="1" cellspacing="0" cellpadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.role }}</td>
            <td>{{ employee.salary }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editEmployee(index)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteEmployee(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit Employee Form -->
      <div v-if="editing" class="mt-4">
        <h3>Edit Employee</h3>
        <form @submit.prevent="updateEmployee">
          <div class="row">
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="currentEmployee.name" required />
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="currentEmployee.role" required />
            </div>
            <div class="col-md-4">
              <input type="number" class="form-control" v-model="currentEmployee.salary" required />
            </div>
          </div>
          <button class="btn btn-success mt-2">Save Changes</button>
          <button class="btn btn-secondary mt-2" @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employees: [
          { id: 1, name: "Mulalo Mabuda", role: "Software Engineer", salary: 50000 },
          { id: 2, name: "Jane Smith", role: "QA Tester", salary: 45000 },
          { id: 3, name: "Alice Johnson", role: "HR Manager", salary: 60000 },
        ],
        newEmployee: { name: "", role: "", salary: "" },
        editing: false,
        currentEmployee: null,
        editingIndex: null,
      };
    },
    methods: {
      addEmployee() {
        if (this.newEmployee.name && this.newEmployee.role && this.newEmployee.salary) {
          this.employees.push({
            id: this.employees.length + 1,
            name: this.newEmployee.name,
            role: this.newEmployee.role,
            salary: parseInt(this.newEmployee.salary, 10),
          });
          this.newEmployee = { name: "", role: "", salary: "" };
        }
      },
      editEmployee(index) {
        this.editing = true;
        this.editingIndex = index;
        this.currentEmployee = { ...this.employees[index] };
      },
      updateEmployee() {
        if (this.currentEmployee.name && this.currentEmployee.role && this.currentEmployee.salary) {
          this.$set(this.employees, this.editingIndex, this.currentEmployee);
          this.cancelEdit();
        }
      },
      deleteEmployee(index) {
        this.employees.splice(index, 1);
      },
      cancelEdit() {
        this.editing = false;
        this.currentEmployee = null;
        this.editingIndex = null;
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }
  .container {
    margin-top: 20px;
  }
  table {
    margin-top: 20px;
  }
  </style>
  