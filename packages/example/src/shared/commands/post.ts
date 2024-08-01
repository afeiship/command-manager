import { defineCommand } from '@jswork/command-manager/src/main';

export default defineCommand({
  methods: {
    create() {
      console.log('create posts');
    },
    update({ title }) {
      console.log('update post', title);
    },
  },
});
