<template>
  <div class="feature">
    <img class="feature1-img" alt="feature1 house" src="../assets/images/feature1.webp" />
    <img class="feature1-mobile-img" alt="feature1 house" src="../assets/images/feature1-mobile.webp" />

    <div class="gradient-box flex flex-col">
      <h1 class="sub-title">{{ $t("WORKS_1.TITLE") }}</h1>
      <p class="description">
        {{ $t("WORKS_1.DESCRIPTION") }}
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.feature {
  background: linear-gradient(to left, var(--color-orange), var(--color-golden));
  position: relative;
  margin: 4rem 0;
}
.gradient-box {
  max-width: 54%;
  align-items: flex-start;
  padding: 2rem 1.5rem 4rem 0;
}

.feature1-img {
  position: absolute;
  max-width: 700px;
  width: 100%;
  left: 0;
  top: -100px;
  height: 140%;
  /* object-fit: fill; */
}
.feature1-mobile-img {
  display: none;
}

@media (max-width: 1310px) {
  .gradient-box {
    max-width: 50%;
  }
  .feature1-img {
    max-width: 650px;
    height: 120%;
    left: 0;
    top: -60px;
  }
}

@media (max-width: 1150px) {
  .feature1-img {
    max-width: 450px;
    left: 0;
    top: -50px;
  }
}
@media (max-width: 900px) {
  .feature1-img {
    display: none;
  }
  .feature {
    background: none;
    margin: 0rem;
    display: flex;
    flex-direction: column;
  }
  .gradient-box {
    background: linear-gradient(to left, var(--color-orange), var(--color-golden));
    max-width: 100%;
    padding: 2rem 2rem 2.5rem 2rem;
  }
  .gradient-box::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 150px;
    background-color: white;
    clip-path: polygon(100% 100%, 0 0, 0 100%);
  }
  .feature1-mobile-img {
    display: block;
    height: 250px;
    width: 100%;
    object-fit: cover;
    background-size: cover;
    align-self: flex-end;
    width: 100%;
  }
}
</style>
