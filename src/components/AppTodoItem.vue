<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.isComplete }"
    @click="toggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.title }}</span>
    <button class="todo-item__remove-button" @click.stop="removeTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Todo } from "../types";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  methods: {
    toggleTodo() {
      this.$emit("toggle-todo", this.todo.id);
    },
    removeTodo() {
      this.$emit("remove-todo", this.todo.id);
    },
  },
  emits: {
    "toggle-todo": (id: number) => Number.isInteger(id),
    "remove-todo": (id: number) => Number.isInteger(id),
  },
});
</script>

<style scoped></style>
