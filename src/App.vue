<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="container">
    <header>
      <h1>DTP・Web技術科生活チェックシート</h1>
      <nav id="nav">
        <ul class="nav-list">
          <li>
            <RouterLink :to="{name: 'AppTop'}">
              ホーム
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'FormMorning'}">
              朝礼時
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'FormEvening'}">
              夕礼時
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style>
  #container {
      width: 960px;
      margin: 0 auto;
      padding: 4%;
      background-color: #dfe9ff;
  }
  #nav .nav-list {
    display: flex;
    column-gap: 50px;
    list-style: none;
    font-size: 1.2rem;
  }
  .nav-list li {
    background-color: #0078D7;
    border-radius: 10%;
  }
  .nav-list li a{
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 8px 16px;
  }
  input, select, textarea, button {
    font-size: 1rem;
    font-family: inherit;
  }
  .required::after {
    content: "*";
    color: red;
  }
  .red {
    color: red;
  }
</style>