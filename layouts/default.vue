<template>
    <div class="bg-white min-h-screen flex flex-col">
        <div class="flex gap-4 justify-around py-6 bg-amber-100">
            <NuxtLink to="/" class="underline">Esimene</NuxtLink>
            <NuxtLink to="/second" class="underline">Teine</NuxtLink>
        </div>
        <div class="p-4 flex-1 flex flex-col">
            <slot></slot>
        </div>

    </div>
</template>

