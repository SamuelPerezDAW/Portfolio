<template>
  <div class="text-left w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
      <i class="pi pi-code text-blue-500 text-2xl"></i> Proyectos
    </h1>
    <ProjectCard 
      v-for="project in data.projects" 
      :key="project.id" 
      :project="project" 
      :route="project.route"
    />
  </div>
</template>

<script setup lang="ts">
import data from '../data/portfolio.json';
import ProjectCard from '../components/ProjectCard.vue';
</script>