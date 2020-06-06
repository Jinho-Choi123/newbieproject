<template>
    <div>
        <h1>Register</h1>
        <input v-model="Name" placeholder="Name"><br><br>
        <input v-model="StudentId" placeholder="StudentId"><br><br>
        <button v-on:click="submit">Submit</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      Name: '',
      StudentId: ''}
  },
  methods: {
    async submit () {
      console.log('you entered submit method')
      axios.post('http://localhost:8080/register',
        {
          name: this.Name,
          studentId: this.StudentId
        })
    }
  }
}
</script>
