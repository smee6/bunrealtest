import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync("This is new Bun.js!");
        return new Response(body);
    },
});