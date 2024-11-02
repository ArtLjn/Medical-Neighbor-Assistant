import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const userInfo = ref({})

    const setToken = (newToken) => {
      token.value = newToken
    }

    const removeToken = () => {
      token.value = ''
    }

    return {
      token,
      userInfo,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
