<template>
    <div>
        <h3>Checkout Price: {{ totalPrice }}</h3>

        <table>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th></th>
            </tr>
            <tr v-for="(item, index) in cartList" :key="index">
                <td>{{ item.item }}</td>
                <td>{{ item.price }}</td>
                 <td><button @click="removeToCart(index)">Remove</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'cartList',
        props: ['cartList'],

        computed: {
            totalPrice() {
                return this.cartList.reduce((total, item) => total + item.price, 0);
            }
        },

        methods: {
            removeToCart(index) {
                this.$emit('removeCart', index)
            }
        }
    }
</script>