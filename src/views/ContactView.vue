<template>
  <div class="text-left w-full max-w-2xl mx-auto animate-fadein">
    <h1 class="text-3xl font-bold mb-6 flex items-center gap-2">
       <i class="pi pi-envelope text-blue-500"></i> Contacto
    </h1>
    
    <div class="grid gap-6 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm font-bold uppercase tracking-wider text-slate-500">Nombre</label>
        <InputText id="name" type="text" placeholder="Escribe tu nombre..." class="w-full !border-slate-200 dark:!border-slate-700 !rounded-xl !p-3 focus:!ring-2 focus:!ring-blue-500/50 focus:!border-blue-500 !transition-all" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm font-bold uppercase tracking-wider text-slate-500">Email</label>
        <InputText id="email" type="email" placeholder="tu@email.com" class="w-full !border-slate-200 dark:!border-slate-700 !rounded-xl !p-3 focus:!ring-2 focus:!ring-blue-500/50 focus:!border-blue-500 !transition-all" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="msg" class="text-sm font-bold uppercase tracking-wider text-slate-500">Mensaje</label>
        <Textarea id="msg" rows="5" placeholder="¿En qué puedo ayudarte?" class="w-full !border-slate-200 dark:!border-slate-700 !rounded-xl !p-3 focus:!ring-2 focus:!ring-blue-500/50 focus:!border-blue-500 !transition-all" />
      </div>

      <Button label="Enviar Mensaje" icon="pi pi-send" class="w-full md:w-fit mt-2 !bg-blue-600 !border-0 !rounded-xl px-8 py-4 !text-white font-bold shadow-lg shadow-blue-500/30 hover:!bg-blue-500 transform hover:scale-105 transition-all duration-300" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
</script>