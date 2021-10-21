<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col
          class="primary--text text-center mx-auto pb-4"
          cols="1"
          sm="4"
          offset="4"
        >
          <h1 class="h1">Login</h1>
        </v-col>
      </v-row>
      <v-row class="elevation-3 mx-auto">
        <v-container fill-height>
          <v-col cols="auto">
            <v-img
              max-height="150"
              max-width="250"
              src="@/assets/images/firebase_logo.png"
            ></v-img>
          </v-col>
          <v-col>
            <v-form>
              <v-text-field label="Email" v-model="user.email"> </v-text-field>
              <v-text-field
                label="Senha"
                :type="show ? 'text' : 'password'"
                v-model="user.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
              >
              </v-text-field>
              <v-btn color="primary" @click="login">Login</v-btn>
              <v-btn class="ml-2" color="warning" @click="reset"
                >Cancelar</v-btn
              >
            </v-form>
          </v-col>
        </v-container>
      </v-row>
    </v-container>
    <v-snackbar color="red" v-model="erroLogin" danger multiLine timeout="2000">
      Usuário ou senha inválidos

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="erroLogin = false"> Fechar </v-btn>
      </template>
    </v-snackbar>

    <v-dialog v-model="novaConta" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Deseja criar uma nova conta?
        </v-card-title>
        <v-card-text>A conta informada não existe. Deseja criar?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="criarNovaConta">
            Sim
          </v-btn>
          <v-btn color="red darken-1" text @click="novaConta = false">
            Não
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {},
      show: false,
      erroLogin: false,
      novaConta: false,
    };
  },
  async mounted() {
    await fb.auth.signOut();
  },
  methods: {
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "Home" });
      } catch (error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        switch (errorCode) {
          case "auth/wrong-password":
            this.erroLogin = true;
            break;
          case "auth/invalid-email":
            this.erroLogin = true;
            break;
          case "auth/user-not-found":
            this.novaConta = true;
            break;
          default:
            this.erroLogin = true;
            break;
        }
      }
    },
    async criarNovaConta() {
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.login();
    },
    reset() {
      this.user = {};
    },
  },
};
</script>

<style>
</style>