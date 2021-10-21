<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Meu perfil</h1>
    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"> </v-text-field>
        <v-text-field label="Sobrenome" v-model="sobrenome"> </v-text-field>
        <v-btn color="primary" @click="salvarPerfil">Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      uid: "",
      hasProfile: false,
      profileId: "",
    };
  },
  async mounted() {
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    if (userProfile.docs.length > 0) {
      const perfil = userProfile.docs[0];
      this.profileId = perfil.id;
      this.nome = perfil.data().firstName;
      this.sobrenome = perfil.data().lastName;
      this.hasProfile = true;
    }
  },
  methods: {
    async salvarPerfil() {
      if (this.hasProfile) {
        await fb.profileCollection.doc(this.profileId).update({
          firstName: this.nome,
          lastName: this.sobrenome,
        });
      } else {
        await fb.profileCollection.add({
          uid: this.uid,
          firstName: this.nome,
          lastName: this.sobrenome,
        });
      }
    },
  },
};
</script>
