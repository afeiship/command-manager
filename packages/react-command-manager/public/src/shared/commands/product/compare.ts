import { defineCommand } from '@jswork/command-manager';

export default defineCommand({
  methods: {
    init() {
      console.log('init compare');
    },
    add() {
      console.log('add itds');
    },
    remove() {
      console.log('remove ids');
    },
    compare() {
      console.log('compare itds');
    },
  },
});