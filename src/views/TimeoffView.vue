<template>
  <div class="time">
  <!-- Main container for the application -->
  <div class="container">
    <!-- Header for the application -->
    <h1>Employee Attendance & Time Off Requests</h1>

    <!-- List of employees -->
    <div class="employee-list">
      <div v-for="employee in employees" :key="employee.employeeId" class="employee">
        <!-- Employee name -->
        <h2>{{ employee.name }}</h2>

        <!-- Attendance records for the employee -->
        <div v-for="day in employee.attendance" :key="day.date">
          <span>{{ day.date }}: </span>
          <!-- Status of attendance with dynamic class based on status -->
          <span :class="getStatusClass(day.status)">{{ day.status }}</span>
        </div>

        <!-- Leave requests section (only shown if there are leave requests) -->
        <div v-if="employee.leaveRequests.length">
          <h3>Leave Requests</h3>
          <ul class="leave-requests-list">
            <!-- List of leave requests for the employee -->
            <li v-for="request in employee.leaveRequests" :key="request.date">
              <!-- Leave request details -->
              {{ request.date }} - {{ request.reason }} ({{ request.status }})

              <!-- Approve button (shown only for pending requests) -->
              <button v-if="request.status === 'Pending'" @click="approveLeave(employee, request)">Approve</button>

              <!-- Deny button (shown only for pending requests) -->
              <button v-if="request.status === 'Pending'" @click="denyLeave(employee, request)">Deny</button>
            </li>
          </ul>
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
      // Array of employees with their attendance and leave requests
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
      // Find the attendance record for the leave date
      const attendanceRecord = employee.attendance.find(day => day.date === request.date);

      // Update the attendance status if a record exists
      if (attendanceRecord) {
        attendanceRecord.status = "On Leave";
      }

      // Update the request status to approved
      request.status = "Approved";
    },

    // Method to deny a leave request
    denyLeave(employee, request) {
      // Update the request status to denied
      request.status = "Denied";
    },

    // Method to determine the CSS class for attendance status
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
/* General styles */
.time {
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(156, 233, 228);
  background-position: center;
}
.leave-requests-list {
  list-style-type: none; /* Remove list item points */
  padding-left: 0; /* Remove the default left padding */
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
  margin-bottom: 30px; /* Spacing between employee sections */
}
button {
  margin-left: 10px; /* Spacing between buttons */
  padding: 5px 10px; /* Padding for buttons */
  cursor: pointer; /* Pointer cursor for buttons */
}

/* Responsive styles for medium screens */
@media (max-width: 768px) {
  .container {
    padding: 10px; /* Reduce padding for smaller screens */
  }
  h1 {
    font-size: 20px; /* Adjust font size for the header */
    text-align: center; /* Center-align the header */
  }
  .employee {
    margin-bottom: 20px; /* Adjust spacing */
    border: 1px solid #ddd; /* Add border around employee sections */
    padding: 10px; /* Add padding */
    border-radius: 5px; /* Rounded corners */
  }
  button {
    font-size: 12px; /* Smaller font size for buttons */
    padding: 5px; /* Adjust padding */
  }
}

/* Responsive styles for small screens */
@media (max-width: 480px) {
  h1 {
    font-size: 18px; /* Further reduce header font size */
  }
  .employee h2 {
    font-size: 16px; /* Adjust font size for employee names */
  }
  button {
    font-size: 10px; /* Smaller font size for buttons */
    padding: 3px; /* Adjust padding */
  }
}
</style>
