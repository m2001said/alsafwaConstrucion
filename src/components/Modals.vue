<template>
  <div class="modals flex">
    <base-modal
      v-for="(item, index) in data"
      :key="index"
      :title="item.title"
      :description="item.description"
      :backgroundImage="item.backgroundImage"
      :image1="item.image1"
      :image2="item.image2"
      :image3="item.image3"
    ></base-modal>
  </div>
</template>

<script setup>
import BaseModal from "./ui/BaseModal.vue";

import concrete1 from "../assets/images/4-Concrete/1.webp";
import concrete2 from "../assets/images/4-Concrete/2.webp";
import concrete3 from "../assets/images/4-Concrete/3.webp";

import interlock1 from "../assets/images/5-Interlock/1.webp";
import interlock2 from "../assets/images/5-Interlock/2.webp";
import interlock3 from "../assets/images/5-Interlock/3.webp";

import isolation1 from "../assets/images/6-Isolation/1.webp";
import isolation2 from "../assets/images/6-Isolation/2.webp";
import isolation3 from "../assets/images/6-Isolation/3.webp";

import infra1 from "../assets/images/7-Infra/1.webp";
import infra2 from "../assets/images/7-Infra/2.webp";
import infra3 from "../assets/images/7-Infra/3.webp";

import walls1 from "../assets/images/8-Walls/1.webp";
import walls2 from "../assets/images/8-Walls/2.webp";
import walls3 from "../assets/images/8-Walls/3.webp";

import flooring1 from "../assets/images/9-Flooring/1.webp";
import flooring2 from "../assets/images/9-Flooring/2.webp";
import flooring3 from "../assets/images/9-Flooring/3.webp";

import ceiling1 from "../assets/images/10-Ceiling/1.webp";
import ceiling2 from "../assets/images/10-Ceiling/2.webp";
import ceiling3 from "../assets/images/10-Ceiling/3.webp";

import cladding1 from "../assets/images/11-Cladding/1.webp";
import cladding2 from "../assets/images/11-Cladding/2.webp";
import cladding3 from "../assets/images/11-Cladding/3.webp";

import glass1 from "../assets/images/12-Glass/1.webp";
import glass2 from "../assets/images/12-Glass/2.webp";
import glass3 from "../assets/images/12-Glass/3.webp";

import painting1 from "../assets/images/13-Painting/1.webp";
import painting2 from "../assets/images/13-Painting/2.webp";
import painting3 from "../assets/images/13-Painting/3.webp";

import doors1 from "../assets/images/14-Doors/1.webp";
import doors2 from "../assets/images/14-Doors/2.webp";
import doors3 from "../assets/images/14-Doors/3.webp";

import landscape1 from "../assets/images/15-Landscape/1.webp";
import landscape2 from "../assets/images/15-Landscape/2.webp";
import landscape3 from "../assets/images/15-Landscape/3.webp";

import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n({ useScope: "global" });
const data = reactive([
  {
    title: i18n.t("WORKS_4.TITLE"),
    description: i18n.t("WORKS_4.DESCRIPTION"),
    image1: concrete1,
    image2: concrete2,
    image3: concrete3,
  },

  {
    title: i18n.t("WORKS_5.TITLE"),
    description: i18n.t("WORKS_5.DESCRIPTION"),
    image1: interlock1,
    image2: interlock2,
    image3: interlock3,
  },

  {
    title: i18n.t("WORKS_6.TITLE"),
    description: i18n.t("WORKS_6.DESCRIPTION"),
    image1: isolation1,
    image2: isolation2,
    image3: isolation3,
  },
  {
    title: i18n.t("WORKS_7.TITLE"),
    description: i18n.t("WORKS_7.DESCRIPTION"),
    image1: infra1,
    image2: infra2,
    image3: infra3,
  },
  {
    title: i18n.t("WORKS_8.TITLE"),
    description: i18n.t("WORKS_8.DESCRIPTION"),
    image1: walls1,
    image2: walls2,
    image3: walls3,
  },
  {
    title: i18n.t("WORKS_9.TITLE"),
    description: i18n.t("WORKS_9.DESCRIPTION"),
    image1: flooring1,
    image2: flooring2,
    image3: flooring3,
  },
  {
    title: i18n.t("WORKS_10.TITLE"),
    description: i18n.t("WORKS_10.DESCRIPTION"),
    image1: ceiling1,
    image2: ceiling2,
    image3: ceiling3,
  },
  {
    title: i18n.t("WORKS_11.TITLE"),
    description: i18n.t("WORKS_11.DESCRIPTION"),
    image1: cladding1,
    image2: cladding2,
    image3: cladding3,
  },
  {
    title: i18n.t("WORKS_12.TITLE"),
    description: i18n.t("WORKS_12.DESCRIPTION"),
    image1: glass1,
    image2: glass2,
    image3: glass3,
  },
  {
    title: i18n.t("WORKS_13.TITLE"),
    description: i18n.t("WORKS_13.DESCRIPTION"),
    image1: painting1,
    image2: painting2,
    image3: painting3,
  },
  {
    title: i18n.t("WORKS_14.TITLE"),
    description: i18n.t("WORKS_14.DESCRIPTION"),
    image1: doors1,
    image2: doors2,
    image3: doors3,
  },
  {
    title: i18n.t("WORKS_15.TITLE"),
    description: i18n.t("WORKS_15.DESCRIPTION"),
    image1: landscape1,
    image2: landscape2,
    image3: landscape3,
  },
]);
</script>

<style scoped>
.modals {
  gap: 30px;
  max-width: 1300px;
  flex-wrap: wrap;
  margin: 80px auto;
  padding: 0 15px;
}

@media (max-width: 500px) {
  .modals {
    gap: 15px;
    margin: 40px auto;
  }
}
</style>
