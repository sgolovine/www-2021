import path from 'path';

export default {
  port: process.env.PORT || 8080,
  rootDir: path.resolve(__dirname, '..'),
};
