import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTabStore = defineStore('tab', () => {
  const openTabs = ref([])
  const currentTab = ref('')
  const add_tab = (data) => {
    openTabs.value.push(data)
  }
  const delete_tab = (route) => {
    const index = openTabs.value.findIndex((item) => item.route === route)
    openTabs.value.splice(index, 1)
    return index
  }
  const setCurrentTab = (index) => {
    currentTab.value = index
  }

  const clearTab = () => {
    openTabs.value = []
  }

  return {
    openTabs,
    currentTab,
    add_tab,
    delete_tab,
    setCurrentTab,
    clearTab
  }
})
