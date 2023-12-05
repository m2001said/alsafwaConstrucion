<template>
  <div class="hero flex flex-col">
    <p class="title">
      {{ $t("HERO.TITLE") }} <br class="br" />
      <span> {{ $t("HERO.TITLE_REST") }}</span>
    </p>

    <p class="description">
      {{ $t("HERO.DESCRIPTION") }}
    </p>

    <button>{{ $t("HERO.SERVICES") }}</button>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  background: linear-gradient(to left, rgba(255, 255, 255, 0.185), rgba(0, 0, 0, 0.911)),
    url("../assets/images/hero-background.jpg");
  width: 100%;
  min-height: 640px;
  background-size: cover;
  background-position: center;
  gap: 2rem;
  text-align: center;
  padding: 1.5rem;
}
.title {
  color: white;
  font-size: 3.5rem;
  font-weight: 800;
}
.title span {
  font-weight: 700;
  color: var(--color-orange);
}

.description {
  color: var(--color-white);
  max-width: 780px;
  font-weight: 600;
  text-align: center;
}

button {
  background: var(--color-white);
  color: var(--color-orange);
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 600;
  border: none;
  padding: 0.5rem 2.3rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
}

button:hover {
  background: var(--color-orange);
  color: var(--color-white);
}
.br {
  display: none;
}

@media (max-width: 900px) {
  .hero {
    gap: 1rem;
    min-height: 100vh;
  }
  .title {
    line-height: 1.3;
    font-size: 2rem;
  }

  .br {
    display: block;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
  }
}
</style>
