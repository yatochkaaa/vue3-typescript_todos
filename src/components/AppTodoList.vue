<template>
  <ul class="todo-list">
    <app-todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppTodoItem from "./AppTodoItem.vue";
import { Todo } from "@/types";

export default defineComponent({
  components: { AppTodoItem },
  props: {
    todos: {
      type: Array as PropType<Todo[]>
    }
  },
  methods: {
    toggleTodo(id: number) {
      this.$emit("toggle-todo", id);
    },
    removeTodo(id: number) {
      this.$emit("remove-todo", id);
    },
  },
  emits: {
    "toggle-todo": (id: number) => Number.isInteger(id),
    "remove-todo": (id: number) => Number.isInteger(id),
  },

});
</script>

<style scoped></style>
