<script lang="ts" setup>
const props = defineProps({
    context: Object,
})
</script>

<template>
    <pf-text-input :id="context?.id" :value="context?._value" :name="context?._name"
        aria-describedby="simple-form-name-01-helper" required />

</template>