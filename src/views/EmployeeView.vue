<template>
  <div class="container">
    <h1 class="text-center">Employee Data Management</h1>

    <!-- Search Bar -->
    <div class="mt-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search by name"
        v-model="searchQuery"
      />
    </div>

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
        <tr v-for="(employee, index) in filteredEmployees" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.salary }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="showEmployeeDetails(index)">
              Show More
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteEmployee(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Employee Details Modal -->
    <div
      v-if="showModal"
      class="modal fade show"
      style="display: block; background: rgba(0, 0, 0, 0.5);"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Employee Details</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p><strong>ID:</strong> {{ selectedEmployee.employeeId }}</p>
            <p><strong>Name:</strong> {{ selectedEmployee.name }}</p>
            <p><strong>Position:</strong> {{ selectedEmployee.position }}</p>
            <p><strong>Department:</strong> {{ selectedEmployee.department }}</p>
            <p><strong>Salary:</strong> {{ selectedEmployee.salary }}</p>
            <p><strong>Employment History:</strong> {{ selectedEmployee.employmentHistory }}</p>
            <p><strong>Contact:</strong> {{ selectedEmployee.contact }}</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
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
          employmentHistory: "Joined in 2015, promoted to Senior in 2018",
          contact: "sibongile.nkosi@moderntech.com",
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          salary: 80000,
          employmentHistory: "Joined in 2013, promoted to Manager in 2017",
          contact: "lungile.moyo@moderntech.com",
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          position: "Quality Analyst",
          department: "QA",
          salary: 55000,
          employmentHistory: "Joined in 2018",
          contact: "thabo.molefe@moderntech.com",
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          position: "Sales Representative",
          department: "Sales",
          salary: 60000,
          employmentHistory: "Joined in 2020",
          contact: "keshav.naidoo@moderntech.com",
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          position: "Marketing Specialist",
          department: "Marketing",
          salary: 58000,
          employmentHistory: "Joined in 2019",
          contact: "zanele.khumalo@moderntech.com",
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          position: "UI/UX Designer",
          department: "Design",
          salary: 65000,
          employmentHistory: "Joined in 2016",
          contact: "sipho.zulu@moderntech.com",
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          position: "DevOps Engineer",
          department: "IT",
          salary: 72000,
          employmentHistory: "Joined in 2017",
          contact: "naledi.moeketsi@moderntech.com",
        },
        {
          employeeId: 8,
          name: "Farai Gumbo",
          position: "Content Strategist",
          department: "Marketing",
          salary: 56000,
          employmentHistory: "Joined in 2021",
          contact: "farai.gumbo@moderntech.com",
        },
        {
          employeeId: 9,
          name: "Karabo Dlamini",
          position: "Accountant",
          department: "Finance",
          salary: 62000,
          employmentHistory: "Joined in 2018",
          contact: "karabo.dlamini@moderntech.com",
        },
        {
          employeeId: 10,
          name: "Fatima Patel",
          position: "Customer Support Lead",
          department: "Support",
          salary: 58000,
          employmentHistory: "Joined in 2016",
          contact: "fatima.patel@moderntech.com",
        },
      ],
      searchQuery: "",
      showModal: false,
      selectedEmployee: null,
    };
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    },
    showEmployeeDetails(index) {
      this.selectedEmployee = { ...this.filteredEmployees[index] };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedEmployee = null;
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
.modal-content {
  padding: 20px;
  border-radius: 5px;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
