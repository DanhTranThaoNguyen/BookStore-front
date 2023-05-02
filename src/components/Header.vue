<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">BookStore</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Genres
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>
    </div>
  </nav>
</template>
