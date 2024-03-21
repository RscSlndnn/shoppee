<template>
    <div class="login-content">
        <div class="login-itemlist">
            <h3>SHOPPING CART</h3>
            <table>
                <tr>
                    <th>Items</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                    <itemList itemName="keyboard" :itemPrice="500" :Wrongbutton="Wrongbutton" />
                    <itemList itemName="mouse" :itemPrice="200" :Wrongbutton="Wrongbutton" />
                    <itemList itemName="monitor" :itemPrice="2000" :Wrongbutton="Wrongbutton" />
                    <itemList itemName="AVR" :itemPrice="700" :Wrongbutton="Wrongbutton" />
            </table>
        </div>
    
        <div class="login-form">
            <div class="container">
                <h3>Login</h3>
            <h5>Enter Password <br> {{ errmsg }}</h5>
            <input type="password" v-model="password">
            <button @click="login()">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import itemList from '@/components/itemList.vue'

export default {
    name: 'loginPage',
    components: {
        itemList,
    },
    
    data() {
        return {
            password: '',
            errmsg: '',
            Wrongbutton: true
        }
    },

    methods: {
        login() {
            if (this.password != '123') {
                this.errmsg = 'wrong password';
            } else {
                localStorage.setItem('authToken', 'true'); // Set the 'logged' item in localStorage to 'true'
                this.$router.push('/shop')
            }
        }
    }
};

</script>

<style>

.login-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

.login-form {
    display: grid;
    grid-template-rows: repeat(3, 0.1fr);
    padding-inline: 30%;
    gap: 10px;
}

.login-itemlist {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  text-align: center;
  padding: 1px;
  background-color: #9AD0C2;
}
</style>