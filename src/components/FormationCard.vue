<template>
  <div class="group flex items-center justify-between p-5 mb-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
    <div class="flex items-center gap-4">
      <div class="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
        <i class="pi pi-bookmark-fill"></i>
      </div>
      <h3 class="font-bold text-slate-800 dark:text-slate-100 tracking-tight">{{ edu.title }}</h3>
    </div>
    <Tag :value="edu.status" :severity="edu.status === 'En curso' ? 'info' : 'success'" class="shadow-sm" />
  </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag';
defineProps<{ edu: any }>();
</script>