import { defineCommand } from '@jswork/command-manager';

export default defineCommand({
  name: 'app',
  methods: {
    add: (n) => {
      return n + 1;
    },
    sub: (n) => {
      return n - 1;
    }
  }
});
