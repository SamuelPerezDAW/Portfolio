<template>
  <Card class="mb-6 border-0 bg-slate-50/50 dark:bg-slate-900/50 shadow-sm hover:bg-white dark:hover:bg-slate-900 transition-colors duration-300 ring-1 ring-slate-200 dark:ring-slate-800">
    <template #title>
      <span class="text-xl font-extrabold text-slate-800 dark:text-slate-100">{{ exp.role }}</span>
    </template>
    <template #subtitle>
      <div class="flex items-center justify-between mt-1">
        <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm font-bold">
          {{ exp.company }}
        </span>
        <span class="text-xs font-mono text-slate-500 uppercase tracking-widest">{{ exp.period }}</span>
      </div>
    </template>
    <template #content>
      <div class="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-inner text-slate-600 dark:text-slate-300 text-sm">
        {{ exp.details }}
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
defineProps<{ exp: any }>();
</script>