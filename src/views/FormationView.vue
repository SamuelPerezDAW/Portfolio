<template>
  <div class="text-left w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
      <i class="pi pi-graduation-cap text-blue-500 text-2xl"></i> Formación Académica
    </h1>
    <FormationCard 
      v-for="edu in data.formation" 
      :key="edu.id" 
      :edu="edu" 
    />
  </div>
</template>

<script setup lang="ts">
import data from '../data/portfolio.json';
import FormationCard from '../components/FormationCard.vue';
</script>