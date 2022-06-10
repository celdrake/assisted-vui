<template>
  <div class="vue-form">

    <FormKit type="form" v-model="formData" :form-class="submitted ? 'hide' : 'show'" submit-label="Register"
      @submit="submitHandler">
      <h1>Welcome to Assisted V-UI Form!</h1>
      <FormKit type="text" name="name" label="Your name" placeholder="Jane Doe" help="What do people call you?"
        validation="required" />
      <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com"
        help="What email should we use?" validation="required|email" />
      <div class="double">
        <FormKit type="password" name="password" label="Password" validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }" placeholder="Your password" help="Choose an account password" />
        <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password"
          validation="required|confirm" help="Choose an account password" />
      </div>
    </FormKit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const submitted = ref(false)
const formData = ref({})
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<style lang="scss">
.vue-form {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 2rem 0;
  }
}
</style>
