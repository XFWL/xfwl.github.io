System.register([],(function(t,n){"use strict";return{execute:function(){!function(){const t=document.createElement("canvas"),n=t.getContext("2d"),e=document.createElement("canvas");function i(){t.width=innerWidth,t.height=innerHeight,e.width=innerWidth,e.height=innerHeight}function r(t,n){return Math.sin(t/180*Math.PI)*n}t.getContext("2d"),i(),window.addEventListener("resize",i),document.body.append(t),document.body.append(e),t.style.position="absolute",t.style.zIndex="-1",e.style.position="absolute",e.style.zIndex="-2",e.style.background="url('/image/星空2.png')",e.style.backgroundPosition="center center";const d=[],o=[];let a=0;t.addEventListener("mousedown",(function(n){const e=n.offsetX,i=n.offsetY,r={};r.id=a,r.x=.2*t.width+t.width*Math.random()*.6,r.y=t.height,r.endX=n.offsetX,r.endY=n.offsetY,r.size=4,r.isEnd=!1,r.rgbR=Math.round(100*Math.random()+155),r.rgbG=Math.round(255*Math.random()),r.rgbB=Math.round(255*Math.random()),r.rgbA=1,d.push(r);for(let t=0;t<100;t++){const n={};n.id=a,n.x=e,n.y=i,n.random=2.5*Math.random()+.1,n.r=n.random,n.deg=3.6*t,n.size=3,n.isEnd=!1,99==t&&(n.isEnd=!0),n.rgbR=Math.round(100*Math.random()+155),n.rgbG=Math.round(255*Math.random()),n.rgbB=Math.round(255*Math.random()),n.rgbA=1,o.push(n)}a++})),function e(){n.globalCompositeOperation="destination-out",n.fillStyle="rgba(0,0,0,0.1)",n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="lighter",function(){for(let t=0;t<d.length;t++)d[t].x+=(d[t].endX-d[t].x)/50,d[t].y+=(d[t].endY-d[t].y)/50,n.beginPath(),n.fillStyle=`rgba(${d[t].rgbR},${d[t].rgbG},${d[t].rgbB},${d[t].rgbA})`,n.arc(d[t].x,d[t].y,d[t].size,0,2*Math.PI),n.fill(),(Math.abs(d[t].endY-d[t].y)**2+Math.abs(d[t].endX-d[t].x)**2)**.5<200&&(d[t].rgbA-=.011),d[t].rgbA<=0&&e(d[t].id);function e(e){const i=o.filter((t=>t.id==e));for(let h=0;h<i.length;h++){if(i[h].rgbA<=0){if(i[h].isEnd){d.splice(d.indexOf(d.find((t=>t.id==e))),1),o.splice(o.indexOf(o.find((t=>t.id==i[h].id&&t.random==i[h].random))),1);continue}o.splice(o.indexOf(o.find((t=>t.id==i[h].id&&t.random==i[h].random))),1);continue}let g=(a=i[h].deg,s=i[h].r,0==a?s:Math.cos(a/180*Math.PI)*s),l=r(i[h].deg,i[h].r)+.35;i[h].x+=g,i[h].y+=l,n.beginPath(),n.fillStyle=`rgba(${i[h].rgbR},${i[h].rgbG},${i[h].rgbB},${i[h].rgbA})`,n.arc(i[h].x,i[h].y+1,i[h].size,0,2*Math.PI),n.fill(),t.width<500?(i[h].r*=1-i[h].random/(.3*t.width*(.5*Math.random()+1)),i[h].rgbA-=.015):(i[h].r*=1-i[h].random/(.15*t.width),i[h].rgbA-=.003)}var a,s}}(),requestAnimationFrame(e)}()}()}}}));
