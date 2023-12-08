<template>
  <div>
    <header class="navbar-container">
      <!-- logo -->

      <a class="logo" href="#hero">
        <img src="../assets/images/logo.svg" alt="logo" />
      </a>

      <nav class="navbar-links-desktop">
        <a class="navbar-link" href="#hero">{{ $t("NAVBAR.MAIN") }}</a>
        <a class="navbar-link" href="#services">{{ $t("NAVBAR.SERVICES") }}</a>
        <a class="navbar-link" href="#about">{{ $t("NAVBAR.WHO_US") }}</a>
        <a class="navbar-link" href="#contact">{{ $t("NAVBAR.CONTACT") }}</a>
      </nav>

      <!-- lang icon -->
      <div class="nav-icons flex">
        <button @click="changeLanguage">
          <img
            v-if="$i18n.locale === 'ar'"
            src="../assets/images/arabic.svg"
            class="translation-icon"
            alt="arabic to english icon"
          />
          <img v-else src="../assets/images/english.svg" class="translation-icon" alt="english to arabic icon" />
        </button>
        <!-- toggle-menu mobile -->
        <div class="toggle-menu" @click="toggleExpandNav" :class="{ active: expandNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- nav links of mobile-->
    </header>

    <transition name="slide" appear>
      <div v-show="expandNav" class="mobile-nav">
        <nav class="navbar-links-mobile flex flex-col">
          <button class="navbar-link">الرئيسية</button>
          <button class="navbar-link">خدماتنا</button>
          <button class="navbar-link">عن الشركة</button>
          <button class="navbar-link">تواصل</button>
        </nav>

        <!-- email , whatsapp -->
        <div class=""></div></div
    ></transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const expandNav = ref(false);

const toggleExpandNav = () => {
  expandNav.value = !expandNav.value;
  document.body.classList.toggle("overflow-hidden");
};

const changeLanguage = () => {
  // Toggle between 'ar' and 'en'
  const newLocale = i18n.locale.value === "ar" ? "en" : "ar";
  i18n.locale.value = newLocale;
  localStorage.setItem("userLocale", newLocale);
  //   document.querySelector("html").setAttribute("lang", newLocale);
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navbar-container");
    navbar?.classList.toggle("navbar-scrolled", window.scrollY > 0);
  });
});
</script>

<style scoped>
.navbar-container {
  position: absolute;
  max-width: 1800px;
  width: 100%;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  z-index: 30;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-scrolled {
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-out;
}
.logo {
  max-width: 90px;
  width: 100%;
}
.navbar-links-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 460px;
  width: 100%;
  gap: 10px;
}

.navbar-link {
  font-size: 24px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;
}
.navbar-link:hover {
  color: var(--color-orange);
}
.mobile-nav {
  display: none;
}

.translation-icon {
  max-width: 60px;
  width: 100%;
}

.toggle-menu {
  position: relative;
  width: 30px;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  display: none;
}

.toggle-menu span {
  position: absolute;
  height: 2.1px;
  width: 20px;
  border-radius: 10px;
  background: #111010;
  transition: 0.5s;
}

.toggle-menu span:nth-child(2) {
  transform: translateY(-10px);
  width: 100%;
  left: 0px;
}

.toggle-menu span:nth-child(3) {
  transform: translateY(10px);
  width: 25%;
  left: 0px;
}
.toggle-menu.active span:nth-child(1) {
  transform: translateX(30px);
}

.toggle-menu.active span:nth-child(2) {
  width: 30px;
  transform: translateX(0) rotate(45deg);
  transition-delay: 0.2s;
}

.toggle-menu.active span:nth-child(3) {
  width: 30px;
  transform: translateX(0) rotate(-45deg);
  transition-delay: 0.2s;
}

@media only screen and (max-width: 900px) {
}
@media only screen and (max-width: 768px) {
  .logo {
    max-width: 75px;
  }
  .navbar-links-desktop {
    display: none;
  }
  .toggle-menu {
    display: flex;
  }
  .nav-icons {
    gap: 15px;
  }
  .translation-icon {
    max-width: 40px;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 60vw;
    top: 100px;
    left: 0;
    background-color: var(--color-white);
    text-align: center;
    padding: 10vh 0px;
    box-shadow: 0 18px 34px -10px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 72px);
    overflow-y: auto;
    z-index: 1;
  }
  .navbar-links-mobile {
    gap: 30px;
  }
  .navbar-links-mobile button {
    font-size: 22px;
    font-weight: 600;
  }
  .translation-icon {
    margin-bottom: -8px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
