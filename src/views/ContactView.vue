<template>
  <div class="text-left w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Contacto</h1>
    <div class="grid gap-4">
      <div class="flex flex-col gap-2">
        <label for="name" class="font-medium">Nombre</label>
        <InputText id="name" type="text" placeholder="Tu nombre" class="w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="font-medium">Email</label>
        <InputText id="email" type="email" placeholder="tu@email.com" class="w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="msg" class="font-medium">Mensaje</label>
        <Textarea id="msg" rows="5" placeholder="¿En qué puedo ayudarte?" class="w-full" />
      </div>
      <Button label="Enviar Mensaje" icon="pi pi-send" class="w-full md:w-fit mt-4 !bg-slate-900 dark:!bg-blue-600 !border-0 !rounded-xl px-8 py-3 !text-white font-bold shadow-md hover:!bg-blue-500 dark:hover:!bg-blue-500 transition-colors duration-300 ring-offset-2 focus:ring-2 ring-blue-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
</script>