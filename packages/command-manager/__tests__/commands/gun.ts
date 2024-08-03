import { defineCommand } from '../../src';

export default defineCommand({
  name: 'gun',
  methods: {
    execute() {
      return 'shooting a gun';
    },
  },
});
