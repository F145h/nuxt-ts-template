const exec = require('child_process').exec;

let c = []

function execNextCommand(cmd, callback) {
    if (c.length === 0)
        return

    exec(c.splice(0, 1)[0], (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(stdout)

        execNextCommand();
    });
}


c.push("heroku repo:reset -a nuxt-ts-template")
c.push('rd /s /q "./.git"')
c.push("git init")
c.push("heroku git:remote -a nuxt-ts-template")
c.push("git add ./.build/main.js")
c.push("git add ./.nuxt/.")
c.push("git add -f ./.nuxt/dist/server/.")
c.push("git add -f ./.nuxt/dist/client/.")
c.push("git add -f ./.nuxt/dist/client/fonts/.")
c.push("git add ./static/.")
c.push("git add ./package.json")
c.push("git add ./Procfile")
c.push("git commit -m deploy")
c.push("git push heroku master")

execNextCommand()