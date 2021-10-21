<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Minha lista de tarefas</h1>
    <v-form>
      <v-text-field
        label="Nova tarefa"
        v-model="novaTarefa"
        @keydown.enter="adicionar"
      >
        <v-icon @click="adicionar" slot="append">mdi-send</v-icon>
      </v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="tarefa of tarefas" :key="tarefa.id">{{
          tarefa.title
        }}</v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";

export default {
  name: "Home",
  data() {
    return {
      uid: "",
      novaTarefa: "",
      // tarefas: [{ titulo: "Tarefa 1" }, { titulo: "Tarefa 2" }],
      tarefas: [],
    };
  },
  mounted() {
    this.uid = fb.auth.currentUser.uid;
    this.readTasks();
  },
  methods: {
    async readTasks() {
      this.tarefas = [];
      const logTasks = await fb.tasksCollection
        .where("owner", "==", this.uid)
        .get();
      for (const doc of logTasks.docs) {
        this.tarefas.push({
          id: doc.id,
          title: doc.data().title,
        });
      }
    },
    async adicionar() {
      await fb.tasksCollection.add({
        title: this.novaTarefa,
        date: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novaTarefa = "";
      this.readTasks();
    },
  },
};
</script>
