<template>
  <footer class="app-footer">
    {{ stats?.active }} more to do, {{ stats?.done }} done
  </footer>
</template>
<script lang="ts">
import { Stats } from "@/types";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    stats: {
      type: Object as PropType<Stats>,
    },
  },
});
</script>
<style scoped></style>
