import { defineCommand } from '@jswork/react-command-manager/src/main';

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
