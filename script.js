const _0x405704=_0xc6ef;(function(_0x113a99,_0x4f7bb2){const _0x31a2fb=_0xc6ef,_0x220211=_0x113a99();while(!![]){try{const _0x571963=parseInt(_0x31a2fb(0x127))/0x1+-parseInt(_0x31a2fb(0x125))/0x2*(parseInt(_0x31a2fb(0x134))/0x3)+-parseInt(_0x31a2fb(0x115))/0x4+parseInt(_0x31a2fb(0xfd))/0x5+-parseInt(_0x31a2fb(0x149))/0x6*(-parseInt(_0x31a2fb(0x15d))/0x7)+parseInt(_0x31a2fb(0x140))/0x8+-parseInt(_0x31a2fb(0x12b))/0x9;if(_0x571963===_0x4f7bb2)break;else _0x220211['push'](_0x220211['shift']());}catch(_0x4c18cc){_0x220211['push'](_0x220211['shift']());}}}(_0x1b8b,0xe0c18));import*as _0x1ee723 from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightModel='',flightList=[],countdown=0x3*0x64;const scene=new _0x1ee723[(_0x405704(0x124))]();function _0x1b8b(){const _0x2c9f44=['hararetInterval','yellow','linear-gradient(to\x20top,\x20','gothit','loaded','8784328ikGRTl','length','innerHeight','set','#table-head','front.jpeg','contextmenu','red','keyup','10310838SsdnNY','getElementById','getObjectByName','which','#table','render','innerHTML','block','div#bullet','background','add','span#percentage','beginPath','addEventListener','getTime','WebGLRenderer','translateY','clientX','span#countdown','Mesh','7eNZKKr','mousedown','6897055Uhrpei','scene','getContext','bottom.jpeg','flight','mouseup','</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>','dtInterval','arc','hararet','ceil','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','splice','hit','translateZ','sqrt','clone','black','innerWidth','autopilot','div#game','domElement','</span></div>','left.jpeg','3446268cOIDFi','position','appendChild','%,\x20white\x20','body','display','bullet','rotation','average','moveCount','none','MB\x20of\x2032MB)','name','div#tab-text','total','Scene','1492124yQNbvt','random','620100ClgKYy','cylinder','remove','load','20590164vFLidl','HemisphereLight','floor','clearRect','visible','strokeStyle','preventDefault','rotate','CylinderGeometry','3whMPaW','pow','abs','back.jpeg','style','querySelector','%\x20loaded\x20('];_0x1b8b=function(){return _0x2c9f44;};return _0x1b8b();}scene['background']=new _0x1ee723['CubeTextureLoader']()['setPath']('texture/cubemap/')[_0x405704(0x12a)](['right.jpeg',_0x405704(0x114),'top.jpeg',_0x405704(0x100),_0x405704(0x145),_0x405704(0x137)]);const light=new _0x1ee723[(_0x405704(0x12c))](0xffffbb,0x80820,0x1);scene[_0x405704(0x153)](light);function _0xc6ef(_0x3e130c,_0x5e23d3){const _0x1b8b3a=_0x1b8b();return _0xc6ef=function(_0xc6ef5d,_0xa43aec){_0xc6ef5d=_0xc6ef5d-0xfd;let _0x29dd39=_0x1b8b3a[_0xc6ef5d];return _0x29dd39;},_0xc6ef(_0x3e130c,_0x5e23d3);}const camera=new _0x1ee723['PerspectiveCamera'](0x32,window[_0x405704(0x10f)]/window['innerHeight'],0.1,0x2710),geometry=new _0x1ee723[(_0x405704(0x133))](0.19,0.19,0x80,0x40),material=new _0x1ee723['MeshBasicMaterial']({'color':0xffffff}),canvas=document[_0x405704(0x14a)]('map'),ctx=canvas[_0x405704(0xff)]('2d');function printCountDown(){const _0x234217=_0x405704;if(Math[_0x234217(0x12d)](countdown)==countdown){let _0x3f89c0=Math[_0x234217(0x12d)](countdown/0x3c),_0x39ee57=countdown-Math[_0x234217(0x12d)](countdown/0x3c)*0x3c;document['querySelector'](_0x234217(0x15b))[_0x234217(0x14f)]=_0x3f89c0+':'+(_0x39ee57<0xa?'0'+_0x39ee57:_0x39ee57);if(countdown==0x0){document['title']='game\x20ended';return;}}}function bullet(_0x3b1f86){const _0x55061a=_0x405704;if(flightList[_0x3b1f86][_0x55061a(0x132)]!='|'||flightList[_0x3b1f86][_0x55061a(0x106)]>=0x64)return;flightList[_0x3b1f86]['dt']['push']({'name':_0x55061a(0x101)+_0x3b1f86+''+new Date()[_0x55061a(0x157)](),'moveCount':0x0}),flightList[_0x3b1f86]['bullet']++,flightList[_0x3b1f86][_0x55061a(0x106)]+=0x1,clearInterval(flightList[_0x3b1f86][_0x55061a(0x13b)]),document['querySelector']('#bullet-text')['innerHTML']=flightList[_0x3b1f86][_0x55061a(0x11b)];let _0x285073=flightList[_0x3b1f86][_0x55061a(0x106)]<0x4b?_0x55061a(0x13c):_0x55061a(0x147);document[_0x55061a(0x139)](_0x55061a(0x151))[_0x55061a(0x138)][_0x55061a(0x152)]=_0x55061a(0x13d)+_0x285073+'\x20'+flightList[_0x3b1f86][_0x55061a(0x106)]+_0x55061a(0x118)+flightList[_0x3b1f86][_0x55061a(0x106)]+'%)';}function bulletStop(_0x1a245f){const _0x38863d=_0x405704;clearInterval(flightList[_0x1a245f]['dtInterval']),clearInterval(flightList[_0x1a245f][_0x38863d(0x13b)]),flightList[_0x1a245f][_0x38863d(0x13b)]=setInterval(function(){const _0x3eab63=_0x38863d;flightList[_0x1a245f]['hararet']-=0x1;flightList[_0x1a245f][_0x3eab63(0x106)]<=0x0&&(flightList[_0x1a245f][_0x3eab63(0x106)]=0x0,clearInterval(flightList[_0x1a245f][_0x3eab63(0x13b)]));let _0x87b87e=flightList[_0x1a245f]['hararet']<0x4b?_0x3eab63(0x13c):_0x3eab63(0x147);document[_0x3eab63(0x139)](_0x3eab63(0x151))[_0x3eab63(0x138)]['background']=_0x3eab63(0x13d)+_0x87b87e+'\x20'+flightList[_0x1a245f]['hararet']+_0x3eab63(0x118)+flightList[_0x1a245f][_0x3eab63(0x106)]+'%)';},0x32);}new GLTFLoader()[_0x405704(0x12a)](_0x405704(0x108),function(_0x1fd65d){const _0x48d624=_0x405704;document[_0x48d624(0x156)](_0x48d624(0x15e),function(_0xcbbe48){const _0x260093=_0x48d624;switch(_0xcbbe48['which']){case 0x1:!flightList[0x0][_0x260093(0x110)]&&(_0xcbbe48[_0x260093(0x15a)]<_0xcbbe48['target']['clientWidth']*0.5?flightList[0x0][_0x260093(0x132)]='<':flightList[0x0][_0x260093(0x132)]='>');break;case 0x2:break;case 0x3:bullet(0x0),flightList[0x0][_0x260093(0x104)]=setInterval(function(){bullet(0x0);},0x32);break;}}),document['addEventListener'](_0x48d624(0x102),function(_0x464207){const _0x5127ef=_0x48d624;switch(_0x464207[_0x5127ef(0x14c)]){case 0x1:!flightList[0x0][_0x5127ef(0x110)]&&(flightList[0x0]['rotate']='|');break;case 0x2:break;case 0x3:bulletStop(0x0);break;}}),document[_0x48d624(0x156)](_0x48d624(0x146),function(_0x3aad71){const _0x1d871e=_0x48d624;_0x3aad71[_0x1d871e(0x131)]();}),document[_0x48d624(0x156)]('keydown',function(_0x19ad96){const _0x8b76bb=_0x48d624;switch(_0x19ad96['keyCode']){case 0x9:_0x19ad96[_0x8b76bb(0x131)](),document[_0x8b76bb(0x139)](_0x8b76bb(0x14d))[_0x8b76bb(0x138)][_0x8b76bb(0x11a)]=_0x8b76bb(0x150),document[_0x8b76bb(0x139)](_0x8b76bb(0x144))[_0x8b76bb(0x138)][_0x8b76bb(0x11a)]=_0x8b76bb(0x150),document['querySelector'](_0x8b76bb(0x122))[_0x8b76bb(0x138)][_0x8b76bb(0x11a)]=_0x8b76bb(0x11f);break;}}),document['addEventListener'](_0x48d624(0x148),function(_0x4a3dda){const _0x161155=_0x48d624;switch(_0x4a3dda['keyCode']){case 0x9:_0x4a3dda[_0x161155(0x131)](),document[_0x161155(0x139)](_0x161155(0x14d))[_0x161155(0x138)][_0x161155(0x11a)]=_0x161155(0x11f),document[_0x161155(0x139)](_0x161155(0x144))[_0x161155(0x138)][_0x161155(0x11a)]=_0x161155(0x11f),document['querySelector']('div#tab-text')[_0x161155(0x138)]['display']=_0x161155(0x150);break;}}),setInterval(function(){const _0x27b9c0=_0x48d624;let _0x261a8b=[];ctx[_0x27b9c0(0x12e)](0x0,0x0,0xfa,0xfa);for(let _0x985ff=0x0;_0x985ff<flightList[_0x27b9c0(0x141)];_0x985ff++){let _0x36c9bc=scene[_0x27b9c0(0x14b)](flightList[_0x985ff][_0x27b9c0(0x121)]),_0x1f0bd1=[Math['floor'](_0x36c9bc['position']['x']/0x28)+0x7d,Math[_0x27b9c0(0x12d)](_0x36c9bc[_0x27b9c0(0x116)]['z']/0x28)+0x7d];ctx[_0x27b9c0(0x130)]=_0x985ff==0x0?'red':_0x27b9c0(0x10e),ctx[_0x27b9c0(0x155)](),ctx[_0x27b9c0(0x105)](_0x1f0bd1[0x0],_0x1f0bd1[0x1],0x5,0x0,0x2*Math['PI']),ctx['stroke'](),flightList[_0x985ff][_0x27b9c0(0x11d)]=flightList[_0x985ff][_0x27b9c0(0x10a)]-flightList[_0x985ff][_0x27b9c0(0x13e)],_0x261a8b[_0x261a8b[_0x27b9c0(0x141)]]=flightList[_0x985ff];}_0x261a8b['sort'](function(_0x1072fb,_0x5dbcb7){const _0x401a6f=_0x27b9c0;return _0x5dbcb7[_0x401a6f(0x11d)]-_0x1072fb[_0x401a6f(0x11d)];}),document[_0x27b9c0(0x139)]('#table')[_0x27b9c0(0x14f)]='';for(let _0x583260=0x0;_0x583260<_0x261a8b[_0x27b9c0(0x141)];_0x583260++){document[_0x27b9c0(0x139)](_0x27b9c0(0x14d))[_0x27b9c0(0x14f)]+='<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;\x22>'+_0x261a8b[_0x583260][_0x27b9c0(0x121)]+_0x27b9c0(0x103)+_0x261a8b[_0x583260]['hit']+'/'+_0x261a8b[_0x583260][_0x27b9c0(0x13e)]+'\x20>\x20'+_0x261a8b[_0x583260][_0x27b9c0(0x11d)]+_0x27b9c0(0x113);}countdown>0x0&&(countdown-=0.5,printCountDown());},0x1f4),flightModel=_0x1fd65d[_0x48d624(0xfe)];for(let _0x11203b=0x0;_0x11203b<0x8;_0x11203b++){flightList[flightList[_0x48d624(0x141)]]={'name':_0x48d624(0x101)+_0x11203b,'rotate':'|','autopilot':![],'dt':[],'dtInterval':'','bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0,'hararet':0x0,'hararetInterval':''};let _0xc0a01c=flightModel[_0x48d624(0x10d)]();_0xc0a01c[_0x48d624(0x121)]=_0x48d624(0x101)+_0x11203b,_0xc0a01c[_0x48d624(0x116)][_0x48d624(0x143)](0x0,0x0,0x0),_0xc0a01c[_0x48d624(0x11c)]['y']=Math[_0x48d624(0x126)]()*Math['PI']*0x2,scene[_0x48d624(0x153)](_0xc0a01c);}var _0x3f6c89=new _0x1ee723[(_0x48d624(0x15c))](geometry,material);_0x3f6c89[_0x48d624(0x121)]=_0x48d624(0x128),_0x3f6c89[_0x48d624(0x12f)]=![],scene[_0x48d624(0x153)](_0x3f6c89),document[_0x48d624(0x139)]('span#loading')[_0x48d624(0x138)][_0x48d624(0x11a)]='none',document[_0x48d624(0x139)]('canvas#map')[_0x48d624(0x138)][_0x48d624(0x11a)]=_0x48d624(0x150),document[_0x48d624(0x139)]('div#bullet')[_0x48d624(0x138)]['display']=_0x48d624(0x150),document[_0x48d624(0x139)](_0x48d624(0x111))[_0x48d624(0x138)]['display']='block',document['querySelector'](_0x48d624(0x122))[_0x48d624(0x138)]['display']=_0x48d624(0x150),animate();},function(_0x585873){const _0xf17a5f=_0x405704;let _0x5085a3=Math[_0xf17a5f(0x107)](_0x585873[_0xf17a5f(0x13f)]/_0x585873[_0xf17a5f(0x123)]*0x64);document[_0xf17a5f(0x139)](_0xf17a5f(0x154))['innerHTML']='\x20'+_0x5085a3+_0xf17a5f(0x13a)+Math[_0xf17a5f(0x107)](0x20*_0x5085a3/0x64)+_0xf17a5f(0x120);});function animate(){const _0x3806b0=_0x405704;requestAnimationFrame(animate);for(let _0x428091=0x0;_0x428091<flightList[_0x3806b0(0x141)];_0x428091++){let _0x2d6541=scene[_0x3806b0(0x14b)](flightList[_0x428091][_0x3806b0(0x121)]);if(flightList[_0x428091][_0x3806b0(0x132)]==='<')_0x2d6541[_0x3806b0(0x11c)]['z']-=Math['PI']/0x24,_0x2d6541[_0x3806b0(0x11c)]['z']<=-Math['PI']/2.6&&(_0x2d6541['rotation']['z']=-Math['PI']/2.6),_0x2d6541['rotation']['y']+=Math['PI']/0x10e;else{if(flightList[_0x428091][_0x3806b0(0x132)]==='>')_0x2d6541[_0x3806b0(0x11c)]['z']+=Math['PI']/0x24,_0x2d6541[_0x3806b0(0x11c)]['z']>=Math['PI']/2.6&&(_0x2d6541[_0x3806b0(0x11c)]['z']=Math['PI']/2.6),_0x2d6541[_0x3806b0(0x11c)]['y']-=Math['PI']/0x10e;else{if(Math[_0x3806b0(0x136)](_0x2d6541['rotation']['z'])<Math['PI']/0x24)_0x2d6541[_0x3806b0(0x11c)]['z']=0x0;else{if(_0x2d6541[_0x3806b0(0x11c)]['z']>0x0)_0x2d6541[_0x3806b0(0x11c)]['z']-=Math['PI']/0x24;else _0x2d6541[_0x3806b0(0x11c)]['z']<0x0&&(_0x2d6541[_0x3806b0(0x11c)]['z']+=Math['PI']/0x24);}}}let _0x44019=-_0x2d6541['rotation']['y']*(0xb4/Math['PI'])%0x168;_0x44019=_0x44019<0x0?0x168+_0x44019:_0x44019;if(_0x2d6541['position']['z']>=0x1388)flightList[_0x428091][_0x3806b0(0x110)]==![]&&(flightList[_0x428091][_0x3806b0(0x110)]=!![],_0x44019>=0x0&&_0x44019<=0x5a?flightList[_0x428091][_0x3806b0(0x132)]='>':flightList[_0x428091]['rotate']='<');else{if(_0x2d6541[_0x3806b0(0x116)]['z']<=-0x1388)flightList[_0x428091][_0x3806b0(0x110)]==![]&&(flightList[_0x428091]['autopilot']=!![],_0x44019>=0xb4&&_0x44019<=0x10e?flightList[_0x428091][_0x3806b0(0x132)]='>':flightList[_0x428091]['rotate']='<');else{if(_0x2d6541[_0x3806b0(0x116)]['x']>=0x1388)flightList[_0x428091][_0x3806b0(0x110)]==![]&&(flightList[_0x428091][_0x3806b0(0x110)]=!![],_0x44019>=0x10e&&_0x44019<=0x168?flightList[_0x428091][_0x3806b0(0x132)]='>':flightList[_0x428091][_0x3806b0(0x132)]='<');else{if(_0x2d6541['position']['x']<=-0x1388)flightList[_0x428091][_0x3806b0(0x110)]==![]&&(flightList[_0x428091][_0x3806b0(0x110)]=!![],_0x44019>=0x5a&&_0x44019<=0xb4?flightList[_0x428091][_0x3806b0(0x132)]='>':flightList[_0x428091]['rotate']='<');else flightList[_0x428091][_0x3806b0(0x110)]==!![]&&(flightList[_0x428091][_0x3806b0(0x132)]='|',flightList[_0x428091]['autopilot']=![]);}}}_0x2d6541['translateZ'](0x5);_0x428091==0x0&&(camera[_0x3806b0(0x116)]['set'](_0x2d6541['position']['x'],_0x2d6541[_0x3806b0(0x116)]['y'],_0x2d6541[_0x3806b0(0x116)]['z']),camera['rotation']['y']=_0x2d6541['rotation']['y']+Math['PI'],camera[_0x3806b0(0x10b)](0x18),camera[_0x3806b0(0x159)](3.9));for(let _0x575288=0x0;_0x575288<flightList[_0x428091]['dt'][_0x3806b0(0x141)];_0x575288++){if(flightList[_0x428091]['dt'][_0x575288]['moveCount']==0x0){let _0x38e9d6=scene[_0x3806b0(0x14b)](_0x3806b0(0x128))[_0x3806b0(0x10d)]();_0x38e9d6[_0x3806b0(0x116)][_0x3806b0(0x143)](_0x2d6541[_0x3806b0(0x116)]['x'],_0x2d6541[_0x3806b0(0x116)]['y'],_0x2d6541[_0x3806b0(0x116)]['z']),_0x38e9d6['rotation']['x']=-Math['PI']/0x2,_0x38e9d6[_0x3806b0(0x11c)]['z']=_0x2d6541[_0x3806b0(0x11c)]['y']+[0.0075,0.005,0.0025,-0.0025,-0.005,-0.0075][Math['floor'](Math[_0x3806b0(0x126)]()*0x6)],_0x38e9d6[_0x3806b0(0x121)]=flightList[_0x428091]['dt'][_0x575288][_0x3806b0(0x121)],_0x38e9d6[_0x3806b0(0x12f)]=!![],_0x38e9d6[_0x3806b0(0x159)](-0x4b),scene['add'](_0x38e9d6),flightList[_0x428091]['dt'][_0x575288][_0x3806b0(0x11e)]+=0x1;}else{flightList[_0x428091]['dt'][_0x575288]['moveCount']+=0x1;let _0x26ee76=scene[_0x3806b0(0x14b)](flightList[_0x428091]['dt'][_0x575288][_0x3806b0(0x121)]);_0x26ee76[_0x3806b0(0x159)](-0x13);if(flightList[_0x428091]['dt'][_0x575288][_0x3806b0(0x11e)]>0xfa)flightList[_0x428091]['dt'][_0x3806b0(0x109)](_0x575288,0x1),scene['remove'](_0x26ee76);else for(let _0x4be00c=0x0;_0x4be00c<flightList[_0x3806b0(0x141)];_0x4be00c++){if(_0x428091==_0x4be00c)continue;let _0x4a8072=scene[_0x3806b0(0x14b)](flightList[_0x4be00c]['name']),_0x3f4a71=Math[_0x3806b0(0x10c)](Math['pow'](_0x4a8072[_0x3806b0(0x116)]['x']-_0x26ee76[_0x3806b0(0x116)]['x'],0x2)+Math[_0x3806b0(0x135)](_0x4a8072[_0x3806b0(0x116)]['z']-_0x26ee76[_0x3806b0(0x116)]['z'],0x2));_0x3f4a71<0x7&&(flightList[_0x428091][_0x3806b0(0x10a)]+=0x1,flightList[_0x4be00c][_0x3806b0(0x13e)]+=0x1,flightList[_0x428091]['dt'][_0x3806b0(0x109)](_0x575288,0x1),scene[_0x3806b0(0x129)](_0x26ee76));}}}}renderer[_0x3806b0(0x14e)](scene,camera);}const renderer=new _0x1ee723[(_0x405704(0x158))]();renderer['setSize'](window[_0x405704(0x10f)],window[_0x405704(0x142)]),document[_0x405704(0x119)][_0x405704(0x117)](renderer[_0x405704(0x112)]);