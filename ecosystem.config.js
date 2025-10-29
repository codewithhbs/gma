module.exports = {
    apps: [
        {
            name: "gma-international",
            script: "npm",
            args: "start",
            cwd: "/root/gma-international",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
}
