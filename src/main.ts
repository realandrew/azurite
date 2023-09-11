import http from 'http';
import https from 'https';
import { PrismaClient } from '@prisma/client';
import Koa from 'koa';

const prisma = new PrismaClient();
const app = new Koa();

app.context.db = prisma;

async function main() {
    app.use(async function(ctx: any) {
        const users = await ctx.db.user.findMany();
        ctx.body = users;
    });

    http.createServer(app.callback()).listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
    https.createServer(app.callback()).listen(3001);
}

main()
    .then(async () => {
    await prisma.$disconnect()
    })
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    })