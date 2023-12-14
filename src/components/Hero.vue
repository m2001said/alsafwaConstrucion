<template>
  <div class="hero flex flex-col">
    <a id="hero" name="anchor-section" class="anchor-section"></a>
    <p class="title add-animation" animation-class="come-up">
      {{ $t("HERO.TITLE") }} <br class="br" />
      <span> {{ $t("HERO.TITLE_REST") }}</span>
    </p>

    <p class="description add-animation" animation-class="come-up">
      {{ $t("HERO.DESCRIPTION") }}
    </p>

    <a class="hero-button add-animation" animation-class="fade-in" href="#services">{{ $t("HERO.SERVICES") }}</a>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  background: linear-gradient(to left, rgba(146, 146, 146, 0.185), rgba(0, 0, 0, 0.911)),
    url("../assets/images/hero-background.webp");
  width: 100%;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  gap: 2rem;
  text-align: center;
  padding: 1.5rem;
  margin-top: 100px;
}
.title {
  color: white;
  font-size: 55px;
  font-weight: 800;
  line-height: 1.2;
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

.br {
  display: none;
}

@media (max-width: 900px) {
  .hero {
    gap: 1rem;
    min-height: 90vh;
    padding: 1rem;
  }
  .title {
    line-height: 1.1;
    font-size: 2rem;
  }

  .br {
    display: block;
  }

  .hero-button {
    font-size: 1.5rem;
    padding: 0.2rem 1.2rem;
  }
}

@media (max-width: 400px) {
}
</style>
