<template>
  <div class="container">
    <h1>Employee Attendance & Time Off Requests</h1>

    <!-- Employee List -->
    <div class="employee-list">
      <div v-for="employee in employees" :key="employee.employeeId" class="employee">
        <h2>{{ employee.name }}</h2>
        <div v-for="day in employee.attendance" :key="day.date">
          <span>{{ day.date }}: </span>
          <span :class="getStatusClass(day.status)">{{ day.status }}</span>
        </div>

        <!-- Leave Requests Section -->
        <div v-if="employee.leaveRequests.length">
          <h3>Leave Requests</h3>
          <ul>
            <li v-for="request in employee.leaveRequests" :key="request.date">
              {{ request.date }} - {{ request.reason }} ({{ request.status }})
              <button v-if="request.status === 'Pending'" @click="approveLeave(employee, request)">Approve</button>
              <button v-if="request.status === 'Pending'" @click="denyLeave(employee, request)">Deny</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample employee data
      employees: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
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
    // Method to approve a leave request
    approveLeave(employee, request) {
      // Find the corresponding attendance record and update the status
      const attendanceRecord = employee.attendance.find(day => day.date === request.date);
      if (attendanceRecord) {
        attendanceRecord.status = "On Leave";
      }
      // Update the leave request status
      request.status = "Approved";
    },

    // Method to deny a leave request
    denyLeave(employee, request) {
      // Leave request status updated to Denied
      request.status = "Denied";
    },

    // Helper method to return the CSS class for the attendance status
    getStatusClass(status) {
      switch (status) {
        case 'Present':
          return 'text-success';
        case 'Absent':
          return 'text-danger';
        case 'On Leave':
          return 'text-warning';
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>
.text-success {
  color: green;
}
.text-danger {
  color: red;
}
.text-warning {
  color: orange;
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
</style>
