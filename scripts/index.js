const Converter = {
    template: '#converter-template',
    data() {
        return {
            amount: 1.00,
            base: "EUR",
            target: "USD",
            result: {
                input: "X",
                base: "EUR",
                target: "USD",
                output: "Y",
            },
            currencies: ["EUR", "USD", "CHF"]
        }
    },
    mounted() {
        this.contractBackground();
    },
    methods: {
        setTarget: function(event){
            this.target = event.target.value;
        },
        setBase: function(event){
            this.base = event.target.value;
        },
        swapCurrencies: function(){
            temp = this.base;
            this.base = this.target;
            this.target = temp;
        },
        convertClick: function(){
            path = '/convert?amount='+ this.amount + '&base=' + this.base + '&target=' + this.target;
            Vue.http.get(path).then(response => {
                this.result.output = response.body;
                this.result.input = this.amount;
                this.result.base = this.base;
                this.result.target = this.target;
            })
        },
        contractBackground: function(){
            document.getElementById("background-upper-half").className = "background-upper-half-main";
        }
    }
}

const History = {
    template: '#history-template',
    data() {
        return {
            history: []
    }}
    ,
    mounted() {
        this.expandBackground();
        this.getHistory();
    },
    methods: {
        expandBackground: function(){
            document.getElementById("background-upper-half").className = "background-upper-half-history";
        },
        getHistory: function(){
            Vue.http.get('/history').then(response => {
                this.history = response.body.reverse();
            })
        },
    },
    filters: {
        formatDate: function (value) {
        return new Date(value).toLocaleDateString("en-US",{	day : 'numeric',
        month : 'short',
        year : 'numeric'});
    },
        decimal2: function (value) {
        return parseFloat(value).toFixed(2);
    },
        decimal5: function (value) {
        return parseFloat(value).toFixed(5);
    }
}
}

const routes = [
  { path: '/', component: Converter },
  { path: '/history', component: History }
]

const router = new VueRouter({
    routes
  })

  const app = new Vue({
    router
  }).$mount('#app')