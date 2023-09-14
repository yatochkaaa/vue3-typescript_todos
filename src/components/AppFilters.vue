<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{ 'button--primary': activeFilter === filter }"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Filter } from "@/types";

interface State {
  filters: Filter[];
}

export default defineComponent({
  props: {
    activeFilter: {
      type: String as PropType<Filter>,
      required: true,
    },
  },
  data(): State {
    return {
      filters: ["All", "Active", "Done"],
    };
  },
  methods: {
    setFilter(filter: Filter) {
      this.$emit("set-filter", filter);
    },
  },
  emits: {
    "set-filter": (filter: Filter) => filter,
  },
});
</script>
<style scoped></style>
