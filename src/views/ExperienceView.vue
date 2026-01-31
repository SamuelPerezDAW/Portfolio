<template>
  <div class="text-left w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
      <i class="pi pi-briefcase text-blue-500 text-2xl"></i> Experiencia Laboral
    </h1>
    <ExperienceCard 
      v-for="item in data.experience" 
      :key="item.id" 
      :exp="item" 
    />
  </div>
</template>

<script setup lang="ts">
import data from '../data/portfolio.json';
import ExperienceCard from '../components/ExperienceCard.vue';
</script>