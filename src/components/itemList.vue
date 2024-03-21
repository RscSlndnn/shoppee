<template>
    <tr>
        <td>{{ itemName }}</td>
        <td>₱{{ itemPrice }}</td>
        <td>
            <button :disabled="Wrongbutton" @click="addToCart">Add to Cart</button>
        </td>
    </tr>
</template>

<script>
    export default  {
        name: 'itemList',
        props: {
            itemName: String,
            itemPrice: Number,
            Wrongbutton: Boolean
        },

        methods: {
            addToCart() {
                this.$emit('addCart', {item: this.itemName, price: this.itemPrice})
            }
        }
    }
</script>