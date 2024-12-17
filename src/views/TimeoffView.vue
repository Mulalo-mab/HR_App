<template>
  <div class="time">
    <!-- Main container for the application -->
    <div class="container">
      <!-- Header for the application -->
      <h1>Employee Attendance & Time Off Requests</h1>

      <!-- Employee List -->
      <div class="employee-list">
        <div v-for="employee in employees" :key="employee.employeeId" class="employee">
          <h2>{{ employee.name }}</h2>

          <!-- Employee Attendance Records -->
          <div v-for="day in employee.attendance" :key="day.date">
            <span>{{ day.date }}: </span>
            <span :class="getStatusClass(day.status)">{{ day.status }}</span>
          </div>

          <!-- Leave Requests Section -->
          <div v-if="employee.leaveRequests.length">
            <h3>Leave Requests</h3>
            <ul class="leave-requests-list">
              <li v-for="request in employee.leaveRequests" :key="request.date">
                {{ request.date }} - {{ request.reason }} ({{ request.status }})
                <button v-if="request.status === 'Pending'" @click="approveLeave(employee, request)">Approve</button>
                <button v-if="request.status === 'Pending'" @click="denyLeave(employee, request)">Deny</button>
              </li>
            </ul>
          </div>

          <!-- Request Time Off Form (Visible to employee) -->
          <div v-if="employee.isEmployee">
            <h3>Submit Time Off Request</h3>
            <form @submit.prevent="submitLeaveRequest(employee)">
              <label for="date">Date:</label>
              <input type="date" v-model="newRequestDate" required />

              <label for="reason">Reason:</label>
              <input type="text" v-model="newRequestReason" required />

              <button type="submit">Submit Request</button>
            </form>
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
      // New leave request data
      newRequestDate: "",
      newRequestReason: "",
      // Employees data
      employees: [
      {
          employeeId: 1,
          name: "Sibongile Nkosi",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Absent" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-22", reason: "Sick Leave", status: "Approved" },
            { date: "2024-12-01", reason: "Personal", status: "Pending" },
          ],
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-15", reason: "Family Responsibility", status: "Denied" },
            { date: "2024-12-02", reason: "Vacation", status: "Approved" },
          ],
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Absent" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-10", reason: "Medical Appointment", status: "Approved" },
            { date: "2024-12-05", reason: "Personal", status: "Pending" },
          ],
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Absent" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-20", reason: "Bereavement", status: "Approved" },
          ],
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-12-01", reason: "Childcare", status: "Pending" },
          ],
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-18", reason: "Sick Leave", status: "Approved" },
          ],
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Absent" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-22", reason: "Vacation", status: "Pending" },
          ],
        },
        {
          employeeId: 8,
          name: "Farai Gumbo",
          isEmployee: true, // This flag can be used to show the time off request form to employees
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Absent" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-12-02", reason: "Medical Appointment", status: "Approved" }
            ],
        },
        {
            employeeId: 9,
            name: "Karabo Dlamini",
            isEmployee: true, // This flag can be used to show the time off request form to employees
            attendance: [
                {date: "2024-11-25", status: "Present"},
                {date: "2024-11-26", status: "Present"},
                {date: "2024-11-27", status: "Present"},
                {date: "2024-11-28", status: "Absent" },
                {date: "2024-11-29",  status: "Present" }
            ],
            leaveRequests: [
                {date: "2024-11-19", reason: "Childcare", status: "Denied"}
            ]
        },
        {
            employeeId: 10,
            name: "Fatima Patel",
            isEmployee: true, // This flag can be used to show the time off request form to employees
            attendance: [
                {date: "2024-11-25", status: "Present"},
                {date: "2024-11-26", status: "Present"},
                {date: "2024-11-27", status: "Absent"},
                {date: "2024-11-28", status: "Present"},
                {date: "2024-11-29", status: "Present" }
            ],
            leaveRequests: [
                {date: "2024-12-03", reason: "Vacation", status: "Pending"
                }
            ]
        }
      ],
    };
  },
  methods: {
    // Submit a leave request
    submitLeaveRequest(employee) {
      // Create the new leave request object
      const newRequest = {
        date: this.newRequestDate,
        reason: this.newRequestReason,
        status: "Pending",
      };

      // Add the request to the employee's leaveRequests array
      employee.leaveRequests.push(newRequest);

      // Reset form fields
      this.newRequestDate = "";
      this.newRequestReason = "";
    },

    // Approve a leave request
    approveLeave(employee, request) {
      const attendanceRecord = employee.attendance.find(
        (day) => day.date === request.date
      );

      if (attendanceRecord) {
        attendanceRecord.status = "On Leave";
      }

      request.status = "Approved";
    },

    // Deny a leave request
    denyLeave(employee, request) {
      request.status = "Denied";
    },

    // Get CSS class based on status
    getStatusClass(status) {
      switch (status) {
        case "Present":
          return "text-success";
        case "Absent":
          return "text-danger";
        case "On Leave":
          return "text-warning";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
/* General styles */
.time {
  background-image: url("@/assets/Blue.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
}

.leave-requests-list {
  list-style-type: none;
  padding-left: 0;
}

.text-success {
  color: green; /* Green for Present status */
}

.text-danger {
  color: red; /* Red for Absent status */
}

.text-warning {
  color: orange; /* Orange for On Leave status */
}

.employee-list {
  margin-top: 20px;
}

.employee {
  margin-bottom: 30px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  h1 {
    font-size: 20px;
    text-align: center;
  }
  .employee {
    margin-bottom: 20px;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
  button {
    font-size: 12px;
    padding: 5px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 18px;
  }
  .employee h2 {
    font-size: 16px;
  }
  button {
    font-size: 10px;
    padding: 3px;
  }
}
</style>
