import { defineCommand } from '@jswork/command-manager/src/main';

export default defineCommand({
  name: 'user',
  methods: {
    init() {
      console.log('user init', this);
    },
    login() {
      console.log('user login', this);
    },
  },
});
