<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

const onOfflineReady = () => {
  offlineReady.value = true
}
const onNeedRefresh = () => {
  needRefresh.value = true
}
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegistered() {

      console.info('Service Worker registered')
    },
    onRegisterError(e: any) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <template v-if="offlineReady || needRefresh">
    <div
      class="fixed right-0 bottom-0 m-4 px-6 py-4 border rounded z-100 text-left shadow-md bg-white dark:bg-[#1e1e20]"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-2 dark:text-white text-[#3c3c43] text-base">
        {{ offlineReady ? 'NenUI ready to work offline 🚀' : 'New content available, click the reload button to update. ✨' }}
      </div>
      <div flex items-center gap-4>
        <button
          v-if="needRefresh"
          type="button"
          id="pwa-refresh"
          class="text-white outline-none text-sm rounded py-1 px-2.5 bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59]"
          @click="updateServiceWorker?.()"
        >
          Reload
        </button>
        <button
          type="button"
          class="dark:bg-[#313136] bg-[#f6f6f7] outline-none text-sm rounded py-1 px-2.5 dark:text-white text-[#313136]"
          @click="close"
        >
          Close
        </button>
      </div>
    </div>
  </template>
</template>