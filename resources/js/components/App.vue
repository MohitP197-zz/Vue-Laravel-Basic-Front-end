<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-laravel">
        <a class="navbar-brand" href="#">Vue Frontend</a>
      <div class="container">
        <ul class="navbar-nav">
          <router-link :to="{ name: 'welcome' }" class="nav-link">Home</router-link>
          <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
          <router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link>
          <router-link :to="{ name: 'page' }" class="nav-link">Spa-Developer</router-link>
        </ul>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
    <script>
export default {};
</script>