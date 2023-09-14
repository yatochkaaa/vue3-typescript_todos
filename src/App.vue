<template>
  <app-header />
  <app-filters :active-filter="activeFilter" @set-filter="setFilter" />

  <main class="app-main">
    <app-todo-list
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />
    <app-add-todo @add-todo="addTodo" />
  </main>

  <app-footer :stats="stats" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppTodoList from "./components/AppTodoList.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";
import { Filter, Stats, Todo } from "./types";

interface State {
  todos: Todo[];
  activeFilter: Filter;
}

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFilters,
    AppTodoList,
    AppAddTodo,
    AppFooter,
  },
  data(): State {
    return {
      todos: [
        { id: 1, title: "Learn the basics of Vue", isComplete: true },
        { id: 2, title: "Learn the basics of Typescript", isComplete: false },
        { id: 3, title: "Subscribe to the channel", isComplete: false },
      ],
      activeFilter: "All",
    };
  },
  methods: {
    toggleTodo(id: number) {
      const targetTodo = this.todos.find((todo) => todo.id === id);
      if (targetTodo) {
        targetTodo.isComplete = !targetTodo.isComplete;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    setFilter(filter: Filter) {
      this.activeFilter = filter;
    },
  },
  computed: {
    filteredTodos(): Todo[] {
      switch (this.activeFilter) {
        case "Active":
          return this.activeTodos;
        case "Done":
          return this.doneTodos;
        case "All":
        default:
          return this.todos;
      }
    },
    stats(): Stats {
      return {
        active: this.activeTodos.length,
        done: this.doneTodos.length,
      };
    },
    activeTodos(): Todo[] {
      return this.todos.filter((todo) => !todo.isComplete);
    },
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.isComplete);
    },
  },
});
</script>
