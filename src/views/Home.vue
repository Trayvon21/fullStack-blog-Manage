<template>
  <div class="home">
    <el-container>
      <el-header style="background-color: rgb(84, 92, 100);">
        <a-header></a-header>
      </el-header>
      <el-container>
        <el-aside>
          <aAside></aAside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import aAside from "../components/common/AdminAside";
import aHeader from "../components/common/AdminHeader";
export default {
  name: "Home",
  components: { aAside, aHeader }
};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.el-container {
  height: 100%;
}
</style>
