<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40" />
        Vue
      </a>

      <div class="navbar-nav me-auto" v-if="isAdmin">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin" active-class="active">
            Admin
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/home" active-class="active">
            Home
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="!currentUser">
        <li class="nav-item">
          <router-link class="nav-link" to="/register" active-class="active">
            Sign up
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/login" active-class="active">
            Sign In
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="currentUser">
        <li class="nav-item">
          <router-link class="nav-link" to="/profile" active-class="active">
            {{currentUser.name}}
          </router-link>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link" @click ="logOut">
            Sign out
          </a>
        </li>
      </div>

    </nav>
    <div class="container">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Role from "./model/role";

export default {
  computed: {
    ...vuex.mapGetters(["currentUser"]),
    isAdmin() {
      return this.currentUser?.role === Role.ADMIN;
    },
  },
  methods: {
    ...vuex.mapActions(["clearUser"]),
    logOut() {
      this.clearUser();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
