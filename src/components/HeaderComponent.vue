<template>
  <header class="w-full pt-6 px-4">
    <div class="mx-auto max-w-4xl">
      <nav class="flex items-center justify-between p-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
        
        <div class="pl-4">
          <span class="text-sm font-black tracking-tighter uppercase dark:text-white">
            Samuel<span class="text-blue-500">.</span>Pérez<span class="text-blue-500">.</span>Dev
          </span>
        </div>

        <div class="flex gap-1">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            active-class="!bg-blue-500/10 !text-blue-600 dark:!text-blue-400 ring-1 ring-inset ring-blue-500/20"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <div class="pr-2">
          <Button icon="pi pi-moon" severity="secondary" text rounded size="small" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';

const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Formación', path: '/formation' },
    { name: 'Experiencia', path: '/experience' },
    { name: 'Contacto', path: '/contact' }
];
</script>