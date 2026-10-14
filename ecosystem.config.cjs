module.exports = {
  apps: [
    {
      name: "anuj-portfolio",
      script: "scripts/next-port.mjs",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
