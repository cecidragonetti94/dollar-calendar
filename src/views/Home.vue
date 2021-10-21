<template>
  <v-container >
    <h1 class="mb-5 text-center" >Calendario de cotización del dolar en Chile</h1>
    <v-row align-center justify-start>
      <v-col>
        <v-card>
          <v-date-picker
            color="accent"
            v-model="date"
            full-width
            locale="es-ar"
            :min="minDate"
            :max="maxDate"
            @change="getDollar(date)"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center"> ${{ value }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10), //para que comience con la fecha del dia actual
      minDate: "1984",
      maxDate: new Date().toISOString().substr(0, 10),
      value: null,
    };
  },
  methods: {
    async getDollar(day) {
      const arrayDate = day.split(["-"]); //funcion que separa un string y lo convierte en array
      const ddmmyy = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0];
      try {
        this.setShowLoading({
          title: "Accediendo a la informacion",
          color: "error",
        });

        const data = await axios.get(
          `https://mindicador.cl/api/dolar/${ddmmyy}`
        );
        if (data.data.serie.length > 0) {
          console.log(data.data.serie[0].valor);

          this.value = await data.data.serie[0].valor;
        } else {
          this.valor = "Sin resultados";
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setHideLoading();
      }
    },
    ...mapMutations(["setShowLoading", "setHideLoading"]),
  },
  created() {
    this.getDollar(this.date);
  },
};
</script>

<style>
</style>