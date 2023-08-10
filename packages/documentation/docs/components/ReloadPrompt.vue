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
      class="fixed right-0 bottom-0 m-4 p-3 border rounded z-100 text-left shadow-md bg-white dark:bg-[#313136]"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-2 dark:text-white text-[#313136]">
        {{ offlineReady ? 'App ready to work offline' : 'New content available, click the reload button to update.' }}
      </div>
      <button
        v-if="needRefresh"
        type="button"
        id="pwa-refresh"
        class="dark:text-white text-[#313136]"
        @click="updateServiceWorker?.()"
      >
        Reload
      </button>
      <button
        type="button"
        class="border outline-none mr-5 rounded-sm py-1 px-2.5 dark:text-white text-[#313136]"
        @click="close"
      >
        Close
      </button>
    </div>
  </template>
</template>