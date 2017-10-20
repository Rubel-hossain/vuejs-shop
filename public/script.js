 var PRICE = 9;
 new Vue({
 	el: "#app",
 	data: {
       total: 0 ,
       items: [
         {id:1, title: "Product One"},
         {id:2, title: "Product Two"},
         {id:3, title: "Product Three"}
       ],

       cart: [] 
 	},
 	methods: {

 		add_to_cart: function(index){

            var item = this.items[index];

            this.total += PRICE;

            var addInfo = false;

            for(var i=0; i < this.cart.length; i++ ){

                if(this.cart[i].id === item.id){

                   addInfo = true;
                   this.cart[i].qty++;

                }

            }

            if(!addInfo){

                this.cart.push({

            	title: item.title,

            	id: item.id,

            	qty: 1,

            	price: PRICE
            });

            }

 		},

 		increment(item){
             
             item.qty++;
             item.price += PRICE;
             this.total += PRICE;
 		},

 		decrement(item) {
            
            item.qty--;
            item.price -= PRICE;
            
            if(item.qty <= 0){

            for(var i=0; i < this.cart.length; i++){

               if(this.cart[i].id === item.id){
                   
                        this.cart.splice(i,1);

                        break;
                    }
                  }
            }



 		}
 	},

 	filters: {

 		currency: function(value){

         var formatter = new Intl.NumberFormat('en-US',{
            
             style: "currency",
             currency: "USD",
             miniumFractionDigits: 2
       });

         return formatter.format(value);

 		}
 	}
 });