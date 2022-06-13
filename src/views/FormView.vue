<template>
  <div class="vue-form">


    <FormKit type="form" :value="formData" :form-class="submitted ? 'hide' : 'show'" @submit="submitHandler"
      :actions="false">

      <h1>Welcome to Assisted V-UI Form!</h1>

      <pf-form>
        <FormKit type="text" label="Cluster name" @input="test" name="cluster_name" help="Enter the cluster name"
          validation="required" validation-visibility="live" />
        <FormKit ref="versionInput" label="Openshift version" @input="checkVersion" name="openshift_version"
          help="Enter the Openshift version" validation="required" validation-visibility="live" />
      </pf-form>

      <pf-action-group>
        <pf-button variant="primary">Submit</pf-button>
        <pf-button variant="link">Cancel</pf-button>
      </pf-action-group>
    </FormKit>
  </div>
</template>

<script lang="ts" setup>
import { createInput } from '@formkit/vue';
import TextField from '@/components/icons/form-inputs/TextField.vue';
import { ref } from 'vue'


const submitted = ref(false)
const formData = ref({
  cluster_name: 'My cluster',
  openshift_version: '4.10.3',
})

const versionInput = ref('4.10.6');
const pfTextField = createInput(TextField)
const checkVersion = () => {
  console.log('vers')
  versionInput.value.node.input('4.11.0');
}

const test = () => console.log('hey')

const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}


</script>

<script>

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

.pf-c-form__group.pf-m-action {
  --pf-c-form__group--m-action--MarginTop: 2rem;
}
</style>
