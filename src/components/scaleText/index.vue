<template>
  <div :class="['relative', ellipsis ? width : '']" 
    :style="{
      width: txtWidth ? `${txtWidth*scaleBase}px` : 'auto',
      height: lineHeight ? `${lineHeight*scaleBase*line}px` : 'auto'
    }">
    
    <div ref="dom" 
      :class="['absolute top-0 left-0 flex items-center justify-center',  ellipsis ? width : '']" 
      :style="{
        width: txtWidth ? `${txtWidth*scaleBase}px` : 'auto',
        height: lineHeight ? `${lineHeight*scaleBase*line}px` : 'auto'
      }">

      <div :class="[line === 1 ? 'whitespace-nowrap' : 'whitespace-pre-wrap break-all', ellipsis ? 'w-full overflow-hidden' : '']"
        :style="{ transform: `scale(${scaleBase})` }">

        <div id="txt" 
          ref="txt" 
          :class="[className, ellipsis ? 'w-full overflow-hidden text-ellipsis' : '', line !== 1 ? 'line-clamp-1' : '']"
          :style="line !== 1 ? `-webkit-line-clamp: ${line} !important` : ''" 
          :text="textContent">
          {{textContent ? '' : text}}
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

interface Props {
  className?: string,
  text?: string,
  textContent?: string,
  ellipsis?: boolean,
  line?: number,
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  className: '',
  text: '',
  textContent: '',
  ellipsis: false,
  line: 1,
  width: ''
});

const store = useStore();
const winWidth = computed(() => store.getters['base/winWidth']);
const dom = ref<any>(null);
const txt = ref<any>(null);
const txtWidth = ref<number>();
const lineHeight = ref<number>();
const fontSize = ref<number>(0);
const scaleBase = ref<number>(1);

watch(winWidth, (newV, oldV) => {
  scaleFunc();
});

onMounted(() => {
  nextTick(() => {
    scaleFunc();
  });
});

const scaleFunc = () => {
  fontSize.value = parseFloat(window.getComputedStyle(txt.value).fontSize);
  const classArr = (document.getElementById('txt') as HTMLElement).className.split(' ');
  let classTxt = '';
  classArr.forEach(element => {
    if (element.indexOf('text-[') !== -1 && element.indexOf('px]') !== -1) {
      classTxt = element;
    }
  });
  const vwTxt = parseFloat(classTxt.replace('text-[', '').replace('px]', ''))/19.2;
  scaleBase.value = (winWidth.value/100 * vwTxt)/fontSize.value;
  txtWidth.value = parseFloat(window.getComputedStyle(txt.value).width);
  lineHeight.value = parseFloat(window.getComputedStyle(txt.value).lineHeight);
}

</script>