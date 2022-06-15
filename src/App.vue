
<template>
  <el-config-provider :locale="currentLocale">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" :appear="true">

        <template v-if="route.meta.keepAlive">
          <keep-alive>
            <component :key="route.name" :is="Component"></component>
          </keep-alive>
        </template>

        <template v-else>
          <component v-if="!route.meta.keepAlive" :key="route.name" :is="Component"></component>
        </template>

      </transition>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { initLang, changeLang } from '@/hooks/useLang';

const store = useStore();
const { locale } = useI18n();
const { currentLocale } = initLang();

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const onResize = ():void => {
  store.commit('base/winWidthUpdate', { width: document.body.clientWidth });
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
html, body {
  margin: 0;
  -webkit-text-size-adjust:none;
}
</style>
