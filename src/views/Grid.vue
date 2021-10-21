.<template>
  <v-container fluid grid-list-lg text-lg-left mt-5>
    <v-row align-center justify-start>
      <v-col>
        <v-card>
          <v-date-picker
            v-model="date"
            full-width
            locale="es-ar"
            :min="minDate"
            :max="maxDate"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            ${{value}} - {{ date }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import  axios  from "axios";

export default {
  data() {
    return {
      date: "",
      minDate: "1984",
      maxDate: new Date().toISOString().substr(0, 10),
      value: null
    };
  },
  methods:{
      async getDollar(day){
         const data = await axios.get(`https://mindicador.cl/api/dolar/${day}`)
         console.log(data.data.serie[0].valor)
         this.value = await data.data.serie[0].valor
      }
  },
  created(){
     this.getDollar('20-10-2021')
  }
};
</script>

<style>
</style>