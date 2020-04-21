<template>
  <div style="background-color: rgb(84, 92, 100);height:100%">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="background-color: rgb(84, 92, 100);height:100%"
      @select="goto"
    >
      <el-menu-item v-for="item in navList" :key="item.path" :index="item.path">{{item.title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminAside",
  data() {
    return {
      navList: [
        { title: "首页", path: "/" },
        { title: "留言管理", path: "/msg" },
        { title: "文章管理", path: "/article" },
        { title: "发布文章", path: "/publish" },
        { title: "项目管理", path: "/project" },
        { title: "友情链接", path: "/link" }
      ]
    };
  },
  methods: {
    goto(url) {
      console.log(url);
      if (url !== this.$route.path) this.$router.push(url);
    }
  },
  computed: {
    active() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style lang="scss" scoped></style>
