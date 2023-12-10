<template>
  <div class="feature flex">
    <div class="polygon"></div>
    <div class="clip-box flex">
      <div class="clip-box-images flex flex-col">
        <img
          class="img-1 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/2-2D-3D/2.webp"
        />
        <img
          class="img-2 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/2-2D-3D/3.webp"
        />
      </div>
      <img
        class="img-3 add-animation"
        animation-class="come-up"
        alt="feature2 design"
        src="../assets/images/2-2D-3D/1.webp"
      />
    </div>

    <div class="gradient-box flex flex-col">
      <h1 class="sub-title add-animation" animation-class="fade-in">{{ $t("WORKS_2.TITLE") }}</h1>
      <p class="description add-animation" animation-class="come-up">{{ $t("WORKS_2.DESCRIPTION") }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.feature {
  position: relative;
  margin-top: -30px;
}
.clip-box {
  gap: 2rem;
  padding: 2rem;
}

.clip-box-images {
  gap: 2rem;
}
.polygon {
  clip-path: polygon(26% 11%, 100% 0, 100% 100%, 0 84%);
  background: var(--color-light-yellow);
  position: absolute;
  width: 50%;
  height: 110%;
  right: 0;
  z-index: 1;
}
[dir="ltr"] .polygon {
  right: auto;
  left: 0;
  transform: scaleX(-1);
}

img {
  max-width: 280px;
  z-index: 1;
  border-radius: 5px;
}

.gradient-box {
  background: linear-gradient(to right, var(--color-orange), var(--color-golden));
  padding: 6rem 10rem 6rem 2rem;
  position: relative;
  align-items: flex-start;
}
[dir="ltr"] .gradient-box {
  padding: 6rem 2rem 6rem 10rem;
}
.gradient-box::before {
  content: "";
  position: absolute;
  right: -50%;
  top: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, var(--color-orange), var(--color-golden));
}
[dir="ltr"] .gradient-box::before {
  left: -50%;
  right: auto;
}

@media (max-width: 1560px) {
  [dir="ltr"] .gradient-box,
  .gradient-box {
    padding: 4rem 2rem 4rem 2rem;
  }
}
@media (max-width: 1400px) {
  .gradient-box {
    padding: 4rem 0rem 4rem 2rem;
  }
  [dir="ltr"] .gradient-box {
    padding: 4rem 2rem 4rem 0rem;
  }
}
@media (max-width: 1200px) {
  .gradient-box {
    margin-right: 12rem;
  }
  [dir="ltr"] .gradient-box {
    margin-right: 0;
    margin-left: 12rem;
  }
  .img-3 {
    display: none;
  }
}
@media (max-width: 1000px) {
  .feature {
    margin-top: 0px;
  }
  .gradient-box {
    margin-right: 0rem;
  }
  [dir="ltr"] .gradient-box {
    margin-left: 0rem;
  }
  img {
    max-width: 180px;
  }
  .img-3 {
    display: block;
  }
}

@media (max-width: 900px) {
  .feature {
    flex-direction: column;
  }
  .polygon {
    display: none;
  }

  .clip-box {
    width: 100%;
    background: var(--color-light-yellow);
    flex-wrap: wrap;
    position: relative;
    padding: 2rem 1rem;
  }
  .clip-box::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
  [dir="ltr"] .clip-box::before {
    right: auto;
    left: 0;
    transform: scaleX(-1);
  }
  img {
    max-width: 200px;
    width: 100%;
  }

  [dir="ltr"] .gradient-box,
  .gradient-box {
    padding: 2rem 2rem 2.5rem 1rem;
    position: relative;
    z-index: 0;
  }

  .gradient-box::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 150px;
    background-color: var(--color-white);
    clip-path: polygon(100% 100%, 0 0, 0 100%);
    z-index: 2;
  }
  [dir="ltr"] .gradient-box::after {
    left: auto;
    right: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
}
@media (max-width: 500px) {
  .clip-box,
  .clip-box-images {
    gap: 1rem;
  }
  img {
    max-width: 42vw;
  }
}
</style>
