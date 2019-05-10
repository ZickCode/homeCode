<template>
  <div>
    <i-panel>
        <i-input placeholder="请输入收货人姓名" />
    </i-panel>
    <!-- 底部导航 -->
    <i-tab-bar :fixed="true" current="index" @change="handleChange">
      <i-tab-bar-item key="index" icon="homepage" current-icon="homepage_fill" title="主页"></i-tab-bar-item>
      <i-tab-bar-item key="community" icon="enterinto" current-icon="enterinto_fill" title="社区"></i-tab-bar-item>
      <image class="icon-add" src="/static/tabs/add.png" />
      <i-tab-bar-item key="message" icon="message" current-icon="message_fill" title="消息"></i-tab-bar-item>
      <i-tab-bar-item key="user" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    handleChange (detail) {
      const url = '../'+ detail.mp.detail.key +'/main'
      wx.switchTab({url})
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.icon-add{
  width: 80rpx;
  height: 80rpx;
  border-radius: 25rpx;
}
</style>
