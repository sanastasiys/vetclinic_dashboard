import {readFile,mkdir,writeFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});
const assets={};for(const [name,type] of [['index.html','text/html; charset=utf-8'],['app.js','text/javascript; charset=utf-8'],['style.css','text/css; charset=utf-8']])assets['/'+name]={body:await readFile('public/'+name,'utf8'),type};
await writeFile('dist/server/index.js','const ASSETS='+JSON.stringify(assets)+';\nconst SEED='+await readFile('db/seed.json','utf8')+';\n'+await readFile('worker/index.js','utf8'));
await cp('.openai/hosting.json','dist/.openai/hosting.json');await cp('drizzle','dist/.openai/drizzle',{recursive:true});console.log('Built Worker with assets and migrations');
