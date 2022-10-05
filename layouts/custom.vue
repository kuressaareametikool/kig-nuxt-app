<template>
    <div class="min-h-screen antialiased bg-gray-100 flex flex-col items-center">
        <div class="flex gap-4 pt-4">
            <button class="border p-2 rounded shadow-2xl active:scale-95" @click="setScreen('mobile')">
                <DevicePhoneMobileIcon class="h-6 text-gray-400" />
            </button>
            <button class="border p-2 rounded shadow-2xl active:scale-95" @click="setScreen('tablet')">
                <DeviceTabletIcon class="h-6 text-gray-400" />
            </button>
            <button class="border p-2 rounded shadow-2xl active:scale-95" @click="setScreen('desktop')">
                <ComputerDesktopIcon class="h-6 text-gray-400" />
            </button>
        </div>
        <div class="flex-1 flex justify-center items-center">
            <iframe src="/" :height="activeScreen.height" :width="activeScreen.width">
            </iframe>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'


interface Device {
    width: string,
    height: string
}

const screens: Record<string, Device> = {
    mobile: {
        width: '390px',
        height: '800px'
    },
    tablet: {
        width: '768px',
        height: '800px'
    },
    desktop: {
        width: '1280px',
        height: '800px'
    }
}

const active = ref('mobile');
const activeScreen = computed(() => screens[active.value]);
const setScreen = (screen: string) => active.value = screen;
</script>
