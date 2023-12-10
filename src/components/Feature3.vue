<template>
  <div class="feature flex">
    <div class="gradient-box flex flex-col">
      <h1 class="sub-title add-animation" animation-class="fade-in">{{ $t("WORKS_3.TITLE") }}</h1>
      <p class="description add-animation" animation-class="come-up">
        {{ $t("WORKS_3.DESCRIPTION") }}
      </p>
    </div>

    <div class="polygon"></div>
    <div class="clip-box flex">
      <div class="clip-box-images clip-box-images-1 flex flex-col">
        <img
          class="img-1 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/3-Roads/1.webp"
        />
        <img
          class="img-2 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/3-Roads/2.webp"
        />
      </div>
      <div class="clip-box-images clip-box-images-2 flex flex-col">
        <img
          class="img-1 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/3-Roads/3.webp"
        />
        <img
          class="img-2 add-animation"
          animation-class="come-up"
          alt="feature2 design"
          src="../assets/images/3-Roads/4.webp"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.feature {
  position: relative;
  margin-top: -70px;
  justify-content: space-between;
}
.clip-box {
  gap: 2rem;
  padding: 2rem;
}

.clip-box-images {
  gap: 2rem;
}
.polygon {
  clip-path: polygon(0 0, 74% 11%, 100% 84%, 0 100%);
  background: var(--color-light-yellow);
  position: absolute;
  width: 50%;
  height: 110%;
  left: 0;
  z-index: 1;
}
img {
  max-width: 300px;
  z-index: 1;
  border-radius: 5px;
}

.gradient-box {
  background: linear-gradient(to left, var(--color-orange), var(--color-golden));
  padding: 6rem 2rem 6rem 4rem;
  position: relative;
  align-items: flex-start;
  max-width: 50%;
}
.gradient-box::before {
  content: "";
  position: absolute;
  left: -70%;
  top: 0;
  width: 70%;
  height: 100%;
  background: linear-gradient(to right, var(--color-orange), var(--color-golden));
}

.clip-box-images-1 {
  margin-top: -40px;
}

@media (max-width: 1400px) {
  .gradient-box {
    padding: 4rem 2rem 4rem 0rem;
  }
}

@media (max-width: 1200px) {
  img {
    max-width: 250px;
  }
}
@media (max-width: 1000px) {
  .feature {
    margin-top: 40px;
  }
  .gradient-box {
    margin-right: 0rem;
  }
  img {
    max-width: 180px;
  }
}

@media (max-width: 900px) {
  .feature {
    margin-top: 0px;
    flex-direction: column-reverse;
    width: 100%;
  }
  .polygon {
    display: none;
  }

  .clip-box {
    width: 100%;
    background: var(--color-light-yellow);
    flex-wrap: wrap;
    position: relative;
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
  img {
    max-width: 200px;
    width: 100%;
  }

  .gradient-box {
    padding: 2rem 1.5rem 2.5rem 2rem;
    position: relative;
    z-index: 0;
    max-width: 100%;
  }
  .gradient-box::before {
    display: none;
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
}

@media (max-width: 500px) {
  .clip-box,
  .clip-box-images {
    gap: 1rem;
  }

  .clip-box {
    padding: 1rem;
  }

  img {
    max-width: 39vw;
  }
}
</style>
