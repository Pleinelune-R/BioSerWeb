<script setup>
import { defineProps, defineEmits } from 'vue';
import SvgIcon from './SvgIcon.vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
    modelValue: { type: String, default: '' },
    type: { type: String, default: 'text' },
    iconType: { type: String, required: true },
    required: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    pattern: { type: String, default: '' },
    minLength: { type: Number, default: null },
    maxLength: { type: Number, default: null },
    title: { type: String, default: '' }
});
</script>

<template>
    <label class="input validator">
        <SvgIcon :type="iconType" />
        <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" :type="type"
            :required="required" :placeholder="placeholder" :pattern="pattern" :minlength="minLength"
            :maxlength="maxLength" :title="title" />
    </label>
</template>