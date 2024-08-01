import { defineCommand } from '@jswork/command-manager/src/main';

/**
 * 如果定义了名字，直接用 name, 而不是用 path 的变化名字
 */
export default defineCommand({
  name: 'cart',
  methods: {
    init() {
      console.log('init cart');
    },
    add2cart(){
      console.log('add to cart.');
    }
  },
});
