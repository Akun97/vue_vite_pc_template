<template>
  <div class="w-full">
    <el-button type="primary" @click="changeLang('zhCN', (lang) => locale = lang)">简体</el-button>
    <el-button type="primary" @click="changeLang('zhTW', (lang) => locale = lang)">繁体</el-button>
    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>

    <scale-text :ellipsis="true" width="w-[150px]" className="text-[33px]" text="二二二二二二二二312312312312312312312312321312312312312"></scale-text>

    <scale-text :ellipsis="true" width="w-[300px]" :line="2" className="text-[33px]" text="二二二二二二二二312312312312312312312312321312312312312"></scale-text>

    <scale-text :ellipsis="true" width="w-[450px]" :line="3" className="text-[33px]" text="12312312321321321312312312312312312312312312312312312312312312312312312312312312321312312312312"></scale-text>

    <scale-text :ellipsis="true" width="w-[150px]" :line="4" className="text-[33px]" text="12312312321321321312312312312312312312312312312312312312312312312312312312312312321312312312312"></scale-text>

    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>

    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>

    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>

    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>

    <div class="flex items-center justify-center w-[300px] h-[300px] text-center bg-blue-600 iconfont icon-more">
      <scale-text className="text-[33px]" :text="$t('test.test')"></scale-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { changeLang } from '@/hooks/useLang';
import { ElMessage } from 'element-plus/es';

const { locale } = useI18n();

ElMessage({
  message: '123'
});
api.banner.selectShowList({}).then((res:ResultData<bannerData>) => {
  const result = new BannerResultModel(res)
  console.log(result)
}).catch(err => {
  console.log(err)
});
api.alumnus.detail().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

</script>