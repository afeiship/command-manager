import { defineCommand } from '@jswork/command-manager';

export default defineCommand({
  name: 'gun',
  methods: {
    execute() {
      return 'shooting a gun';
    },
  },
});
