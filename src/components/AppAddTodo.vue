<template>
  <section class="add-todo">
    <form v-if="isFormVisible" class="add-todo__form" @submit.prevent="addTodo">
      <button class="close-button" type="button" @click="toggleForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input class="input" v-model="todoTitle" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
    <button v-else class="add-todo__show-form-button" @click="toggleForm">
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Todo } from "@/types";

interface State {
  isFormVisible: boolean;
  todoTitle: string;
}

export default defineComponent({
  data(): State {
    return {
      isFormVisible: false,
      todoTitle: "",
    };
  },
  methods: {
    toggleForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    addTodo() {
      this.$emit("add-todo", {
        id: Date.now(),
        title: this.todoTitle,
        isComplete: false,
      });

      this.todoTitle = '';
    },
  },
  emits: {
    "add-todo": (todo: Todo) => todo,
  },
});
</script>

<style scoped></style>
