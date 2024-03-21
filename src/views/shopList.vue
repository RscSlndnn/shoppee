<template>
  <div class="content">
    <div class="item-list">
      <h3>Item List</h3>
      <table>
        <tr>
          <th>Items</th>
          <th>Price</th>
          <th></th>
        </tr>
          <itemList itemName="keyboard" :itemPrice="500" @addCart="addToArray" />
          <itemList itemName="mouse" :itemPrice="200" @addCart="addToArray" />
          <itemList itemName="monitor" :itemPrice="2000" @addCart="addToArray" />
          <itemList itemName="AVR" :itemPrice="700" @addCart="addToArray" />
      </table>
    </div>
    <div class="cart-list">
      <h3>Shopping Cart</h3>
      <cartList :cartList="cartList" @removeCart="removeToArray" />
    </div>
  </div>
</template>

<script>
import itemList from '@/components/itemList.vue'
import cartList from '@/components/cartList.vue'

export default {
  name: 'shopList',
  components: {
    itemList,
    cartList
  },

  data() {
    return {
      cartList: []
    }
  },

  methods: {
    addToArray(item) {
      this.cartList.push(item);
      console.log('Cart List:', this.cartList); // Log the cartList array
    },

    removeToArray(index) {
      this.cartList.splice(index, 1);
    },
  }
}
</script>

<style>
    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .item-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cart-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
</style>