<template>
  <div class="container">
    <h1 class="text-center">Employee Data Management</h1>

    <!-- Add Employee Form -->
    <form @submit.prevent="addEmployee" class="mt-4">
      <div class="row">
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="newEmployee.name"
            required
          />
        </div>
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Position"
            v-model="newEmployee.position"
            required
          />
        </div>
        <div class="col-md-2">
          <input
            type="text"
            class="form-control"
            placeholder="Department"
            v-model="newEmployee.department"
            required
          />
        </div>
        <div class="col-md-2">
          <input
            type="number"
            class="form-control"
            placeholder="Salary"
            v-model="newEmployee.salary"
            required
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-success w-100">Add Employee</button>
        </div>
      </div>
    </form>

    <!-- Employee Table -->
    <table class="table table-striped mt-4" border="1" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.salary }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="editEmployee(index)">
              Edit
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteEmployee(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit Employee Form -->
    <div v-if="editing" class="mt-4">
      <h3>Edit Employee</h3>
      <form @submit.prevent="updateEmployee">
        <div class="row">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              v-model="currentEmployee.name"
              required
            />
          </div>
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              v-model="currentEmployee.position"
              required
            />
          </div>
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              v-model="currentEmployee.department"
              required
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              v-model="currentEmployee.salary"
              required
            />
          </div>
        </div>
        <button class="btn btn-success mt-2">Save Changes</button>
        <button class="btn btn-secondary mt-2" @click="cancelEdit">
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
          position: "Software Engineer",
          department: "Development",
          salary: 70000,
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          salary: 80000,
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "position": "Quality Analyst",
            "department": "QA",
            "salary": 55000,
            "employmentHistory": "Joined in 2018",
            "contact": "thabo.molefe@moderntech.com"
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "position": "Sales Representative",
            "department": "Sales",
            "salary": 60000,
            "employmentHistory": "Joined in 2020",
            "contact": "keshav.naidoo@moderntech.com"
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "position": "Marketing Specialist",
            "department": "Marketing",
            "salary": 58000,
            "employmentHistory": "Joined in 2019",
            "contact": "zanele.khumalo@moderntech.com"
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "position": "UI/UX Designer",
            "department": "Design",
            "salary": 65000,
            "employmentHistory": "Joined in 2016",
            "contact": "sipho.zulu@moderntech.com"
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "position": "DevOps Engineer",
            "department": "IT",
            "salary": 72000,
            "employmentHistory": "Joined in 2017",
            "contact": "naledi.moeketsi@moderntech.com"
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "position": "Content Strategist",
            "department": "Marketing",
            "salary": 56000,
            "employmentHistory": "Joined in 2021",
            "contact": "farai.gumbo@moderntech.com"
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "position": "Accountant",
            "department": "Finance",
            "salary": 62000,
            "employmentHistory": "Joined in 2018",
            "contact": "karabo.dlamini@moderntech.com"
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "position": "Customer Support Lead",
            "department": "Support",
            "salary": 58000,
            "employmentHistory": "Joined in 2016",
            "contact": "fatima.patel@moderntech.com"
        }
      ],
      newEmployee: {
        name: "",
        position: "",
        department: "",
        salary: "",
      },
      editing: false,
      editingIndex: null,
      currentEmployee: null,
    };
  },
  methods: {
    addEmployee() {
      const newId = this.employees.length
        ? this.employees[this.employees.length - 1].employeeId + 1
        : 1;
      const employee = {
        employeeId: newId,
        name: this.newEmployee.name,
        position: this.newEmployee.position,
        department: this.newEmployee.department,
        salary: parseInt(this.newEmployee.salary, 10),
      };
      this.employees.push(employee);
      this.newEmployee = { name: "", position: "", department: "", salary: "" };
    },
    editEmployee(index) {
      this.editing = true;
      this.editingIndex = index;
      this.currentEmployee = { ...this.employees[index] };
    },
    updateEmployee() {
      if (this.currentEmployee) {
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
