<template>
  <Card class="group mb-6 overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 ring-1 ring-slate-200 dark:ring-slate-800">
    <template #title>
      <div class="flex justify-between items-center mb-2">
        <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
          {{ project.title }}
        </span>
        <Tag :value="project.platform" severity="contrast" class="font-bold px-3 py-1" />
      </div>
    </template>
    <template #subtitle>
      <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-tight uppercase text-xs">
        <i class="pi pi-building text-[10px]"></i>
        {{ project.company }}
      </div>
    </template>
    <template #content>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed mt-2 italic border-l-2 border-blue-500 pl-4 mb-4">
        {{ project.description }}
      </p>
      
      <div v-if="project.route" class="mt-4">
        <a 
          :href="project.route" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white rounded-lg font-bold text-sm transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500"
        >
          <i class="pi pi-external-link text-xs"></i>
          Ver detalles del proyecto
        </a>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Tag from 'primevue/tag';
defineProps<{ project: any }>();
</script>