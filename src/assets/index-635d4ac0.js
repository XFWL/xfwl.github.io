function w(){import.meta.url,import("_").catch(()=>1);async function*f(){}}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();(function(){document.title="烟花demo";const f=document.createElement("div"),r=document.createElement("canvas"),s=r.getContext("2d"),c=document.createElement("canvas");r.getContext("2d");function i(){f.style.width=innerWidth+"px",f.style.height=innerHeight+"px",r.width=innerWidth,r.height=innerHeight,c.width=innerWidth,c.height=innerHeight}i(),window.addEventListener("resize",i),document.body.append(f),document.body.append(r),document.body.append(c),f.style.position="absolute",f.style.backgroundColor="black",f.style.zIndex="-3",r.style.position="absolute",r.style.zIndex="-1",c.style.position="absolute",c.style.zIndex="-2",c.style.backgroundPosition="center center",c.style.backgroundSize="100% 100%",c.style.backgroundRepeat="no-repeat";const a=new Image;a.src="./image/myImage.png",f.style.width="100%",f.style.height="100%",a.onload=function(){c.style.background="url(./image/myImage.png)"};function h(u,t){return u==0?t:Math.cos(u/180*Math.PI)*t}function M(u,t){return Math.sin(u/180*Math.PI)*t}const o=[],g=[];let b=0;r.addEventListener("mousedown",function(u){const t=u.offsetX,n=u.offsetY,e={};e.id=b,e.x=r.width*.2+r.width*Math.random()*.6,e.y=r.height,e.endX=u.offsetX,e.endY=u.offsetY,e.size=4,e.isEnd=!1,e.rgbR=Math.round(Math.random()*100+155),e.rgbG=Math.round(Math.random()*255),e.rgbB=Math.round(Math.random()*255),e.rgbA=1,o.push(e);const m=100,p=3;for(let l=0;l<m;l++){const d={};d.id=b,d.x=t,d.y=n,d.random=Math.random()*2.5+.1,d.r=d.random,d.deg=360/m*l,d.size=p,d.isEnd=!1,l==m-1&&(d.isEnd=!0),d.rgbR=Math.round(Math.random()*100+155),d.rgbG=Math.round(Math.random()*255),d.rgbB=Math.round(Math.random()*255),d.rgbA=1,g.push(d)}b++});function x(){for(let t=0;t<o.length;t++)o[t].x+=(o[t].endX-o[t].x)/50,o[t].y+=(o[t].endY-o[t].y)/50,s.beginPath(),s.fillStyle=`rgba(${o[t].rgbR},${o[t].rgbG},${o[t].rgbB},${o[t].rgbA})`,s.arc(o[t].x,o[t].y,o[t].size,0,Math.PI*2),s.fill(),(Math.abs(o[t].endY-o[t].y)**2+Math.abs(o[t].endX-o[t].x)**2)**.5<200&&(o[t].rgbA-=.011),o[t].rgbA<=0&&u(o[t].id);function u(t){const n=g.filter(e=>e.id==t);for(let e=0;e<n.length;e++){if(n[e].rgbA<=0)if(n[e].isEnd){o.splice(o.indexOf(o.find(l=>l.id==t)),1),g.splice(g.indexOf(g.find(l=>l.id==n[e].id&&l.random==n[e].random)),1);continue}else{g.splice(g.indexOf(g.find(l=>l.id==n[e].id&&l.random==n[e].random)),1);continue}let m=h(n[e].deg,n[e].r),p=M(n[e].deg,n[e].r)+.35;n[e].x+=m,n[e].y+=p,s.beginPath(),s.fillStyle=`rgba(${n[e].rgbR},${n[e].rgbG},${n[e].rgbB},${n[e].rgbA})`,s.arc(n[e].x,n[e].y+1,n[e].size,0,Math.PI*2),s.fill(),r.width<500?(n[e].r*=1-n[e].random/(r.width*.3*(Math.random()*.5+1)),n[e].rgbA-=.015):(n[e].r*=1-n[e].random/(r.width*.15),n[e].rgbA-=.003)}}}function y(){s.globalCompositeOperation="destination-out",s.fillStyle="rgba(0,0,0,"+10/100+")",s.fillRect(0,0,r.width,r.height),s.globalCompositeOperation="lighter",x(),requestAnimationFrame(y)}y()})();export{w as __vite_legacy_guard};
