<template>
  <div class="hero flex flex-col">
    <a id="hero" name="anchor-section" class="anchor-section"></a>
    <p class="title">
      {{ $t("HERO.TITLE") }} <br class="br" />
      <span> {{ $t("HERO.TITLE_REST") }}</span>
    </p>

    <p class="description">
      {{ $t("HERO.DESCRIPTION") }}
    </p>

    <a class="hero-button" href="#services">{{ $t("HERO.SERVICES") }}</a>
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

.hero-button {
  background: var(--color-white);
  color: var(--color-orange);
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  padding: 0.5rem 2.3rem;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: var(--color-orange) 0px 0px 7px;
  transition: all 0.3s;
}

.hero-button:hover {
  background: var(--color-orange);
  color: var(--color-white);
  box-shadow: var(--color-orange) 0px 0px 17px;
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
    line-height: 1.3;
    font-size: 2rem;
  }

  .br {
    display: block;
  }

  .hero-button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
  }
}

@media (max-width: 400px) {
}
</style>
