<template>
    <div class="container">
      <h1 class="text-center">Time-Off Requests</h1>
  
      <!-- Time-Off Request Form -->
      <form @submit.prevent="submitRequest" class="mt-4">
        <div class="row">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Employee Name" v-model="newRequest.name" required />
          </div>
          <div class="col-md-6">
            <input type="date" class="form-control" v-model="newRequest.date" required />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <textarea class="form-control" placeholder="Reason for Time-Off" v-model="newRequest.reason" rows="3" required></textarea>
          </div>
        </div>
        <button class="btn btn-primary mt-3 w-100">Submit Request</button>
      </form>
  
      <!-- Pending Requests Table -->
      <h2 class="mt-5">Pending Requests</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.id">
            <td>{{ request.id }}</td>
            <td>{{ request.name }}</td>
            <td>{{ request.date }}</td>
            <td>{{ request.reason }}</td>
            <td>
              <button class="btn btn-success btn-sm" @click="approveRequest(request.id)">Approve</button>
              <button class="btn btn-danger btn-sm" @click="denyRequest(request.id)">Deny</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newRequest: {
          name: "",
          date: "",
          reason: "",
        },
        requests: [],
        nextId: 1,
      };
    },
    methods: {
      submitRequest() {
        if (this.newRequest.name && this.newRequest.date && this.newRequest.reason) {
          this.requests.push({
            id: this.nextId++,
            ...this.newRequest,
          });
          this.newRequest = { name: "", date: "", reason: "" };
        }
      },
      approveRequest(id) {
        alert(`Request ID ${id} approved.`);
        this.requests = this.requests.filter(request => request.id !== id);
      },
      denyRequest(id) {
        alert(`Request ID ${id} denied.`);
        this.requests = this.requests.filter(request => request.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  