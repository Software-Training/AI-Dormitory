<template>
<div>
<van-nav-bar
  title="宿舍安防"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<p>menu</p>
</div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
  },
  }
};
</script>  
