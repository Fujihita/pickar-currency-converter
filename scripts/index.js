new Vue({
    el: '#app',
    data: {
        amount: 1.00,
        base: "EUR",
        target: "USD",
        result: {
            input: 1.00,
            base: "EUR",
            target: "USD",
            output: 1.00,
        },
        currencies: ["EUR", "USD", "CHF"]
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
        }
    },
    mounted(){
        this.convertClick()
    }
})