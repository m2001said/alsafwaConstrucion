<template>
  <div class="about-card add-animation" animation-class="come-up">
    <img class="about-card-img" :src="icon" alt="icon for design" />
    <div>
      <h2 class="description">{{ title }}</h2>
      <h3 class="card-description">{{ description }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "description", "icon"]);
</script>

<style scoped>
.about-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}
.about-card-img {
  max-width: 60px;
  padding-top: 0.8rem;
}
.description {
  font-weight: 600;
}

.card-description {
  line-height: 1.35;
  color: var(--color-dark);
}

@media (max-width: 500px) {
  .about-card-img {
    max-width: 40px;
    padding-top: 0.2rem;
  }
}
</style>
