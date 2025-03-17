<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full transform transition-all hover:shadow-xl">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Wails + Nuxt + TypeScript</h1>

            <div class="space-y-6">
                <div class="space-y-2">
                    <label for="name" class="text-sm font-medium text-gray-700 block">Your Name</label>
                    <input id="name" v-model="name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Enter your name">
                </div>

                <button
                    class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
                    @click="greet">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd" />
                    </svg>
                    Greet
                </button>

                <div v-if="greeting" class="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
                    <p class="text-gray-800 font-medium">{{ greeting }}</p>
                </div>
            </div>

            <div class="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
                Built with Wails, Nuxt, TypeScript & Tailwind
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Greet } from 'wailsjs/go/main/App'

const name = ref('')
const greeting = ref('')

const greet = async () => {
    greeting.value = await Greet(name.value)
}
</script>