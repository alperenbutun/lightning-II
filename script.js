function _0x559f(_0x325dc8,_0x2df32c){const _0x417083=_0x4170();return _0x559f=function(_0x559f80,_0x193479){_0x559f80=_0x559f80-0x1a7;let _0x2fe240=_0x417083[_0x559f80];return _0x2fe240;},_0x559f(_0x325dc8,_0x2df32c);}const _0x27e5ce=_0x559f;(function(_0x9b7a20,_0xb1625c){const _0x2a9704=_0x559f,_0x525442=_0x9b7a20();while(!![]){try{const _0x2d0c03=parseInt(_0x2a9704(0x1b2))/0x1*(parseInt(_0x2a9704(0x216))/0x2)+-parseInt(_0x2a9704(0x1e3))/0x3*(-parseInt(_0x2a9704(0x1f8))/0x4)+parseInt(_0x2a9704(0x1b3))/0x5*(parseInt(_0x2a9704(0x1e6))/0x6)+-parseInt(_0x2a9704(0x20c))/0x7*(parseInt(_0x2a9704(0x1df))/0x8)+-parseInt(_0x2a9704(0x1f4))/0x9+-parseInt(_0x2a9704(0x1d2))/0xa*(-parseInt(_0x2a9704(0x1d4))/0xb)+-parseInt(_0x2a9704(0x202))/0xc*(parseInt(_0x2a9704(0x1f5))/0xd);if(_0x2d0c03===_0xb1625c)break;else _0x525442['push'](_0x525442['shift']());}catch(_0x253f43){_0x525442['push'](_0x525442['shift']());}}}(_0x4170,0xf169c));import*as _0x3ea2cc from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightList=[],flightSprite=[],flightModel='',countdown=0x16d,continueGame=!![],scene=new _0x3ea2cc[(_0x27e5ce(0x22e))]();scene[_0x27e5ce(0x1db)]=new _0x3ea2cc[(_0x27e5ce(0x1ce))]()['setPath'](_0x27e5ce(0x1ed))[_0x27e5ce(0x201)]([_0x27e5ce(0x1a7),_0x27e5ce(0x1c2),_0x27e5ce(0x226),_0x27e5ce(0x222),_0x27e5ce(0x207),_0x27e5ce(0x1e5)]);let DirectionalLight=new _0x3ea2cc['DirectionalLight'](0xffffff,0x8);scene[_0x27e5ce(0x224)](DirectionalLight);let camera=new _0x3ea2cc[(_0x27e5ce(0x1d6))](0x32,window[_0x27e5ce(0x1a9)]/window[_0x27e5ce(0x1c4)],0.1,0x2710),canvas=document['getElementById'](_0x27e5ce(0x1bb)),ctx=canvas['getContext']('2d'),map=new _0x3ea2cc['TextureLoader']()[_0x27e5ce(0x201)](_0x27e5ce(0x1ac)),sprite=new _0x3ea2cc[(_0x27e5ce(0x1c7))](new _0x3ea2cc[(_0x27e5ce(0x1f2))]({'map':map}));sprite[_0x27e5ce(0x1cf)][_0x27e5ce(0x213)](0xa,0xa,0xa);const renderer=new _0x3ea2cc['WebGLRenderer']();renderer[_0x27e5ce(0x217)]=_0x3ea2cc[_0x27e5ce(0x1b0)],renderer['setSize'](window[_0x27e5ce(0x1a9)],window['innerHeight']),window[_0x27e5ce(0x1e1)](_0x27e5ce(0x1b1),onWindowResize);function onWindowResize(){const _0x134054=_0x27e5ce;renderer[_0x134054(0x1eb)](window[_0x134054(0x1a9)],window['innerHeight']);}function printCountDown(){const _0x3d997d=_0x27e5ce;if(!continueGame)return;if(Math[_0x3d997d(0x1bf)](countdown)==countdown){let _0x47ed23=Math[_0x3d997d(0x1bf)](countdown/0x3c),_0x46d923=countdown-Math[_0x3d997d(0x1bf)](countdown/0x3c)*0x3c;document[_0x3d997d(0x22b)](_0x3d997d(0x21b))['innerHTML']=_0x47ed23+':'+(_0x46d923<0xa?'0'+_0x46d923:_0x46d923);if(countdown==0x0){continueGame=![],document[_0x3d997d(0x22b)](_0x3d997d(0x208))['style'][_0x3d997d(0x206)]=_0x3d997d(0x1be),document['querySelector'](_0x3d997d(0x1d0))[_0x3d997d(0x1d9)][_0x3d997d(0x206)]=_0x3d997d(0x1be),document[_0x3d997d(0x22b)](_0x3d997d(0x1e2))[_0x3d997d(0x1d9)][_0x3d997d(0x206)]=_0x3d997d(0x1c1);return;}}}function clicked(_0x3149ee,_0x43c280){const _0x301998=_0x27e5ce;if(_0x43c280==0x0)clearInterval(flightList[_0x3149ee][_0x301998(0x1c8)]);else{clearInterval(flightList[_0x3149ee][_0x301998(0x1c8)]);if(!continueGame)return;flightSprite[_0x3149ee]=scene[_0x301998(0x1f3)](_0x301998(0x1ec)+_0x3149ee),flightSprite[_0x3149ee][_0x301998(0x227)]=!![],flightList[_0x3149ee][_0x301998(0x1ad)]+=0x1,setTimeout(function(){const _0x487560=_0x301998;flightSprite[_0x3149ee][_0x487560(0x227)]=![],_0x3149ee==0x0&&(document[_0x487560(0x22b)](_0x487560(0x1b7))[_0x487560(0x1e7)]=flightList[_0x3149ee][_0x487560(0x1ad)]);},0x23),flightList[_0x3149ee]['clickInterval']=setInterval(function(){const _0x525a60=_0x301998;flightSprite[_0x3149ee][_0x525a60(0x227)]=!![],flightList[_0x3149ee][_0x525a60(0x1ad)]+=0x1,setTimeout(function(){const _0x705b73=_0x525a60;flightSprite[_0x3149ee][_0x705b73(0x227)]=![],_0x3149ee==0x0&&(document[_0x705b73(0x22b)](_0x705b73(0x1b7))[_0x705b73(0x1e7)]=flightList[_0x3149ee][_0x705b73(0x1ad)]);},0x23);},0x46);}}const gl=new _0x3ea2cc[(_0x27e5ce(0x1d7))]()[_0x27e5ce(0x201)](_0x27e5ce(0x1af)),gg=new _0x3ea2cc[(_0x27e5ce(0x21e))](0x249f0,0x249f0),gm=new _0x3ea2cc[(_0x27e5ce(0x1ca))]({'color':0xffffff,'map':gl,'transparent':!![],'opacity':0.0175}),ground=new _0x3ea2cc['Mesh'](gg,gm);function _0x4170(){const _0x5a190a=['PlaneGeometry','SRGBColorSpace','</span></div>','MB\x20of\x2032MB)\x20please\x20wait...','bottom.jpeg','traverse','add','sort','top.jpeg','visible','absolute','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','fillStyle','querySelector','color','random','Scene','black','clicking','strokeStyle','atan2','right.jpeg','pow','innerWidth','beginPath','position','https://rawcdn.githack.com/alperenbutun/free-time-project/61618a8/texture/flash.png','bullet','total','https://rawcdn.githack.com/alperenbutun/free-time-project/f881038/texture/texture.jpg','sRGBEncoding','resize','33Ffbctb','5EQvyFl','#flight-div-','scene','keyCode','span#bullet-text','#f0f0f0','createElement','letterSpacing','map','clearRect','keyup','block','floor','div#game','none','left.jpeg','arc','innerHeight','mouseup','Verdana','Sprite','clickInterval','RepeatWrapping','MeshPhongMaterial','autopilot','clone','clientX','CubeTextureLoader','scale','#table-head','which','7270OCNEcA','left','6809PhkYpC','span#percentage','PerspectiveCamera','TextureLoader','translateX','style','contextmenu','background','flight','LOCKED','top','16rDsFYa','%\x20(','addEventListener','div#tab-text','14199WsgGSB','flight-div-','back.jpeg','8484744VXhOMZ','innerHTML','AIM','fontFamily','translateZ','setSize','sprite','texture/cubemap/','render','rotation','length','gothit','SpriteMaterial','getObjectByName','14557680KVCCUF','13OgPamP','abs','textAlign','788DjlBwN','colorSpace','domElement','auto','round','appendChild','material','canvas#map','rotate','load','15169416etlVzo','div#bullet','span','userSelect','display','front.jpeg','#table','red','#fullscreen-button','body','803733BvOYik','height','average','fill','bold','<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;font-weight:','preventDefault','set','700','width','79004PYqUMT','outputEncoding','\x20>\x20','ceil','</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>','span#countdown','stroke','name'];_0x4170=function(){return _0x5a190a;};return _0x4170();}ground[_0x27e5ce(0x1ef)]['x']=-Math['PI']/0x2,ground[_0x27e5ce(0x1fe)][_0x27e5ce(0x1bb)]['repeat'][_0x27e5ce(0x213)](0x40,0x40),ground[_0x27e5ce(0x1fe)][_0x27e5ce(0x1bb)]['wrapS']=_0x3ea2cc[_0x27e5ce(0x1c9)],ground[_0x27e5ce(0x1fe)][_0x27e5ce(0x1bb)]['wrapT']=_0x3ea2cc[_0x27e5ce(0x1c9)],ground[_0x27e5ce(0x1fe)]['map'][_0x27e5ce(0x1f9)]=_0x3ea2cc[_0x27e5ce(0x21f)],scene['add'](ground),new GLTFLoader()[_0x27e5ce(0x201)](_0x27e5ce(0x229),function(_0x7ed9e3){const _0x1a9597=_0x27e5ce;flightModel=_0x7ed9e3[_0x1a9597(0x1b5)],flightModel[_0x1a9597(0x223)](_0x1464b0=>{const _0x524fe8=_0x1a9597;_0x1464b0[_0x524fe8(0x1fe)]&&(_0x1464b0[_0x524fe8(0x1fe)][_0x524fe8(0x22c)]['r']=0x0,_0x1464b0[_0x524fe8(0x1fe)][_0x524fe8(0x22c)]['g']=0x0,_0x1464b0[_0x524fe8(0x1fe)]['color']['b']=0x0);});for(let _0x428dfb=0x0;_0x428dfb<0x7;_0x428dfb++){flightList[flightList[_0x1a9597(0x1f0)]]={'name':_0x1a9597(0x1dc)+_0x428dfb,'rotate':'|','autopilot':![],'bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0,'clicking':![],'clickInterval':''};let _0xb67b80=flightModel[_0x1a9597(0x1cc)]();_0xb67b80[_0x1a9597(0x21d)]='flight'+_0x428dfb,_0xb67b80['position']['set'](Math[_0x1a9597(0x1fc)](Math[_0x1a9597(0x22d)]()*0x1388)-0x9c4,0x3,Math[_0x1a9597(0x1fc)](Math['random']()*0x1388)-0x9c4),_0xb67b80['rotation']['y']=Math[_0x1a9597(0x22d)]()*Math['PI']*0x2;let _0xdeefe2=sprite[_0x1a9597(0x1cc)]();_0xdeefe2['name']=_0x1a9597(0x1ec)+_0x428dfb,_0xdeefe2['visible']=![];let _0x58348d=document[_0x1a9597(0x1b9)](_0x1a9597(0x204));_0x58348d['id']=_0x1a9597(0x1e4)+_0x428dfb,_0x58348d[_0x1a9597(0x1d9)][_0x1a9597(0x1ab)]=_0x1a9597(0x228),_0x58348d[_0x1a9597(0x1d9)][_0x1a9597(0x215)]='100px',_0x58348d[_0x1a9597(0x1d9)][_0x1a9597(0x1f7)]='center',_0x58348d['style'][_0x1a9597(0x20d)]=_0x1a9597(0x1fb),_0x58348d[_0x1a9597(0x1d9)]['fontWeight']=_0x1a9597(0x210),_0x58348d[_0x1a9597(0x1d9)][_0x1a9597(0x205)]=_0x1a9597(0x1c1),_0x58348d['style'][_0x1a9597(0x1ba)]='1px',_0x58348d['style'][_0x1a9597(0x1e9)]=_0x1a9597(0x1c6),_0x58348d['style']['fontSize']='12px',_0x58348d[_0x1a9597(0x1d9)][_0x1a9597(0x206)]=_0x1a9597(0x1c1),document['body'][_0x1a9597(0x1fd)](_0x58348d),scene[_0x1a9597(0x224)](_0xdeefe2),scene[_0x1a9597(0x224)](_0xb67b80);}document[_0x1a9597(0x22b)](_0x1a9597(0x20a))['style'][_0x1a9597(0x206)]='block';},function(_0x190a5e){const _0x401c14=_0x27e5ce;let _0x448c0e=Math[_0x401c14(0x219)](_0x190a5e['loaded']/_0x190a5e[_0x401c14(0x1ae)]*0x64);document[_0x401c14(0x22b)](_0x401c14(0x1d5))['innerHTML']='\x20'+_0x448c0e+_0x401c14(0x1e0)+Math[_0x401c14(0x1bf)](0x20*_0x448c0e/0x64)+_0x401c14(0x221);}),window['startTheGame']=function(){const _0x2e71d5=_0x27e5ce;document['querySelector'](_0x2e71d5(0x20a))[_0x2e71d5(0x1d9)][_0x2e71d5(0x206)]=_0x2e71d5(0x1c1),setTimeout(function(){const _0x10382a=_0x2e71d5;document[_0x10382a(0x20b)][_0x10382a(0x1fd)](renderer[_0x10382a(0x1fa)]),document[_0x10382a(0x22b)]('span#loading')[_0x10382a(0x1d9)][_0x10382a(0x206)]=_0x10382a(0x1c1),document[_0x10382a(0x22b)](_0x10382a(0x1ff))['style'][_0x10382a(0x206)]=_0x10382a(0x1be),document[_0x10382a(0x22b)](_0x10382a(0x203))[_0x10382a(0x1d9)]['display']=_0x10382a(0x1be),document[_0x10382a(0x22b)](_0x10382a(0x1c0))['style'][_0x10382a(0x206)]=_0x10382a(0x1be),document[_0x10382a(0x22b)](_0x10382a(0x1e2))[_0x10382a(0x1d9)]['display']=_0x10382a(0x1be),animate();},0x1f4),document[_0x2e71d5(0x1e1)]('mousedown',function(_0x4b2744){const _0x4d4a8b=_0x2e71d5;if(!continueGame)return;switch(_0x4b2744[_0x4d4a8b(0x1d1)]){case 0x1:if(!flightList[0x0][_0x4d4a8b(0x1cb)]){if(_0x4b2744[_0x4d4a8b(0x1cd)]<window['innerWidth']*0.5)_0x4b2744[_0x4d4a8b(0x1cd)]-window[_0x4d4a8b(0x1a9)]*0.5>-0x6f?flightList[0x0][_0x4d4a8b(0x200)]='<<':flightList[0x0]['rotate']='<';else _0x4b2744[_0x4d4a8b(0x1cd)]-window[_0x4d4a8b(0x1a9)]*0.5<0x6f?flightList[0x0][_0x4d4a8b(0x200)]='>>':flightList[0x0]['rotate']='>';}break;case 0x2:break;case 0x3:break;}}),document[_0x2e71d5(0x1e1)](_0x2e71d5(0x1c5),function(_0x2b5fa9){const _0x26af16=_0x2e71d5;if(!continueGame)return;switch(_0x2b5fa9[_0x26af16(0x1d1)]){case 0x1:!flightList[0x0][_0x26af16(0x1cb)]&&(flightList[0x0][_0x26af16(0x200)]='|');break;case 0x2:break;case 0x3:break;}}),document[_0x2e71d5(0x1e1)](_0x2e71d5(0x1da),function(_0x461e52){if(!continueGame)return;_0x461e52['preventDefault']();}),document[_0x2e71d5(0x1e1)]('keydown',function(_0x5b123d){const _0x274255=_0x2e71d5;if(!continueGame)return;switch(_0x5b123d['keyCode']){case 0x9:_0x5b123d[_0x274255(0x212)](),document['querySelector'](_0x274255(0x208))[_0x274255(0x1d9)][_0x274255(0x206)]=_0x274255(0x1be),document[_0x274255(0x22b)](_0x274255(0x1d0))['style'][_0x274255(0x206)]='block',document[_0x274255(0x22b)](_0x274255(0x1e2))[_0x274255(0x1d9)][_0x274255(0x206)]=_0x274255(0x1c1);break;}}),document[_0x2e71d5(0x1e1)](_0x2e71d5(0x1bd),function(_0x399202){const _0xf428d3=_0x2e71d5;if(!continueGame)return;switch(_0x399202[_0xf428d3(0x1b6)]){case 0x9:_0x399202[_0xf428d3(0x212)](),document['querySelector']('#table')[_0xf428d3(0x1d9)][_0xf428d3(0x206)]='none',document['querySelector'](_0xf428d3(0x1d0))[_0xf428d3(0x1d9)]['display']=_0xf428d3(0x1c1),document['querySelector'](_0xf428d3(0x1e2))[_0xf428d3(0x1d9)][_0xf428d3(0x206)]=_0xf428d3(0x1be);break;}}),setInterval(function(){const _0x56c534=_0x2e71d5;if(!continueGame)return;let _0x2665b8=[];ctx[_0x56c534(0x1bc)](0x0,0x0,0x7d,0x7d);for(let _0x12c788=0x0;_0x12c788<flightList['length'];_0x12c788++){let _0x19adec=scene[_0x56c534(0x1f3)](flightList[_0x12c788][_0x56c534(0x21d)]),_0x43f6be=[Math[_0x56c534(0x1bf)](_0x19adec['position']['x']/0x50)+62.5,Math[_0x56c534(0x1bf)](_0x19adec[_0x56c534(0x1ab)]['z']/0x50)+62.5];ctx[_0x56c534(0x22a)]=_0x12c788==0x0?_0x56c534(0x209):_0x56c534(0x22f),ctx[_0x56c534(0x231)]=_0x12c788==0x0?_0x56c534(0x209):'black',ctx[_0x56c534(0x1aa)](),ctx[_0x56c534(0x1c3)](_0x43f6be[0x0],_0x43f6be[0x1],0x3,0x0,0x2*Math['PI']),ctx[_0x56c534(0x20f)](),ctx[_0x56c534(0x21c)](),flightList[_0x12c788][_0x56c534(0x20e)]=flightList[_0x12c788]['hit']-flightList[_0x12c788][_0x56c534(0x1f1)],_0x2665b8[_0x2665b8[_0x56c534(0x1f0)]]=flightList[_0x12c788];}_0x2665b8[_0x56c534(0x225)](function(_0x3532ce,_0x27d2bf){const _0x2806fb=_0x56c534;return _0x27d2bf[_0x2806fb(0x20e)]-_0x3532ce['average'];}),document[_0x56c534(0x22b)](_0x56c534(0x208))['innerHTML']='';for(let _0x2cbd18=0x0;_0x2cbd18<_0x2665b8[_0x56c534(0x1f0)];_0x2cbd18++){let _0xdd061c=_0x2cbd18==0x0?_0x56c534(0x214):'normal';document[_0x56c534(0x22b)](_0x56c534(0x208))[_0x56c534(0x1e7)]+=_0x56c534(0x211)+_0xdd061c+'\x22>'+_0x2665b8[_0x2cbd18][_0x56c534(0x21d)]+_0x56c534(0x21a)+_0x2665b8[_0x2cbd18]['hit']+'/'+_0x2665b8[_0x2cbd18][_0x56c534(0x1f1)]+_0x56c534(0x218)+_0x2665b8[_0x2cbd18][_0x56c534(0x20e)]+_0x56c534(0x220);}countdown>0x0&&(countdown-=0.5,printCountDown());},0x1f4);};function animate(){const _0x454fd7=_0x27e5ce;requestAnimationFrame(animate);if(!continueGame)return;for(let _0xe346a7=0x0;_0xe346a7<flightList[_0x454fd7(0x1f0)];_0xe346a7++){let _0xc07346=scene[_0x454fd7(0x1f3)](flightList[_0xe346a7][_0x454fd7(0x21d)]);if(flightList[_0xe346a7][_0x454fd7(0x200)]==='<')_0xc07346[_0x454fd7(0x1ef)]['z']-=Math['PI']/0x24,_0xc07346['rotation']['z']<=-Math['PI']/2.6&&(_0xc07346[_0x454fd7(0x1ef)]['z']=-Math['PI']/2.6),_0xc07346[_0x454fd7(0x1ef)]['y']+=Math['PI']/0x10e;else{if(flightList[_0xe346a7][_0x454fd7(0x200)]==='>')_0xc07346[_0x454fd7(0x1ef)]['z']+=Math['PI']/0x24,_0xc07346[_0x454fd7(0x1ef)]['z']>=Math['PI']/2.6&&(_0xc07346[_0x454fd7(0x1ef)]['z']=Math['PI']/2.6),_0xc07346[_0x454fd7(0x1ef)]['y']-=Math['PI']/0x10e;else{if(flightList[_0xe346a7]['rotate']==='<<'&&_0xc07346[_0x454fd7(0x1ef)]['z']==0x0)_0xc07346[_0x454fd7(0x1ef)]['y']+=Math['PI']/0x32a;else{if(flightList[_0xe346a7]['rotate']==='>>'&&_0xc07346[_0x454fd7(0x1ef)]['z']==0x0)_0xc07346[_0x454fd7(0x1ef)]['y']-=Math['PI']/0x32a;else{if(Math['abs'](_0xc07346[_0x454fd7(0x1ef)]['z'])<Math['PI']/0x24)_0xc07346[_0x454fd7(0x1ef)]['z']=0x0;else{if(_0xc07346[_0x454fd7(0x1ef)]['z']>0x0)_0xc07346[_0x454fd7(0x1ef)]['z']-=Math['PI']/0x24;else _0xc07346[_0x454fd7(0x1ef)]['z']<0x0&&(_0xc07346[_0x454fd7(0x1ef)]['z']+=Math['PI']/0x24);}}}}}let _0xbc8fa6=-_0xc07346[_0x454fd7(0x1ef)]['y']*(0xb4/Math['PI'])%0x168;_0xbc8fa6=_0xbc8fa6<0x0?0x168+_0xbc8fa6:_0xbc8fa6;if(_0xc07346[_0x454fd7(0x1ab)]['z']>=0x1388)flightList[_0xe346a7][_0x454fd7(0x1cb)]==![]&&(flightList[_0xe346a7][_0x454fd7(0x1cb)]=!![],_0xbc8fa6>=0x0&&_0xbc8fa6<=0x5a?flightList[_0xe346a7][_0x454fd7(0x200)]='>':flightList[_0xe346a7][_0x454fd7(0x200)]='<');else{if(_0xc07346['position']['z']<=-0x1388)flightList[_0xe346a7][_0x454fd7(0x1cb)]==![]&&(flightList[_0xe346a7][_0x454fd7(0x1cb)]=!![],_0xbc8fa6>=0xb4&&_0xbc8fa6<=0x10e?flightList[_0xe346a7][_0x454fd7(0x200)]='>':flightList[_0xe346a7][_0x454fd7(0x200)]='<');else{if(_0xc07346[_0x454fd7(0x1ab)]['x']>=0x1388)flightList[_0xe346a7][_0x454fd7(0x1cb)]==![]&&(flightList[_0xe346a7][_0x454fd7(0x1cb)]=!![],_0xbc8fa6>=0x10e&&_0xbc8fa6<=0x168?flightList[_0xe346a7][_0x454fd7(0x200)]='>':flightList[_0xe346a7][_0x454fd7(0x200)]='<');else{if(_0xc07346['position']['x']<=-0x1388)flightList[_0xe346a7]['autopilot']==![]&&(flightList[_0xe346a7][_0x454fd7(0x1cb)]=!![],_0xbc8fa6>=0x5a&&_0xbc8fa6<=0xb4?flightList[_0xe346a7][_0x454fd7(0x200)]='>':flightList[_0xe346a7][_0x454fd7(0x200)]='<');else flightList[_0xe346a7][_0x454fd7(0x1cb)]==!![]&&(flightList[_0xe346a7][_0x454fd7(0x200)]='|',flightList[_0xe346a7]['autopilot']=![]);}}}_0xc07346[_0x454fd7(0x1ea)](0x8);_0xe346a7==0x0&&(camera[_0x454fd7(0x1ab)][_0x454fd7(0x213)](_0xc07346[_0x454fd7(0x1ab)]['x'],_0xc07346[_0x454fd7(0x1ab)]['y'],_0xc07346[_0x454fd7(0x1ab)]['z']),camera['rotation']['y']=_0xc07346[_0x454fd7(0x1ef)]['y']+Math['PI'],camera['translateZ'](0x18),camera['translateY'](2.4));let _0x4fa2eb=scene[_0x454fd7(0x1f3)](_0x454fd7(0x1ec)+_0xe346a7);_0x4fa2eb[_0x454fd7(0x1ab)]['set'](_0xc07346[_0x454fd7(0x1ab)]['x'],_0xc07346['position']['y']+0.59,_0xc07346['position']['z']),_0x4fa2eb[_0x454fd7(0x1ef)]['y']=_0xc07346[_0x454fd7(0x1ef)]['y'],_0x4fa2eb[_0x454fd7(0x1ea)](0x5),_0x4fa2eb[_0x454fd7(0x1d8)](-0.39);let _0x3c1331=![];for(let _0x377099=0x0;_0x377099<flightList[_0x454fd7(0x1f0)];_0x377099++){if(_0xe346a7==_0x377099)continue;let _0x4fbcd2,_0x1d70e8,_0x45e4a4=scene['getObjectByName'](flightList[_0x377099][_0x454fd7(0x21d)]),_0x3b4842=Math[_0x454fd7(0x232)](_0x45e4a4['position']['x']-_0xc07346[_0x454fd7(0x1ab)]['x'],_0x45e4a4['position']['z']-_0xc07346[_0x454fd7(0x1ab)]['z'])*(0xb4/Math['PI']),_0x5f0591=Math['sqrt'](Math[_0x454fd7(0x1a8)](_0xc07346[_0x454fd7(0x1ab)]['x']-_0x45e4a4[_0x454fd7(0x1ab)]['x'],0x2)+Math[_0x454fd7(0x1a8)](_0xc07346[_0x454fd7(0x1ab)]['z']-_0x45e4a4[_0x454fd7(0x1ab)]['z'],0x2));_0x3b4842=_0x3b4842<0x0?Math[_0x454fd7(0x1f6)](_0x3b4842)+0xb4:Math[_0x454fd7(0x1f6)](_0x3b4842-0xb4),_0xbc8fa6=_0xbc8fa6;if(_0x5f0591>0x76c)_0x4fbcd2='TOO\x20FAR',_0x1d70e8='yellow';else Math[_0x454fd7(0x1f6)](_0x3b4842-_0xbc8fa6)>0xaa&&Math[_0x454fd7(0x1f6)](_0x3b4842-_0xbc8fa6)<0xbe?(_0x3c1331=!![],_0x4fbcd2=_0x454fd7(0x1dd),_0x1d70e8='#ff0000',flightList[_0xe346a7][_0x454fd7(0x230)]==![]&&(flightList[_0xe346a7][_0x454fd7(0x230)]=!![],clicked(_0xe346a7,0x1))):(_0x4fbcd2=_0x454fd7(0x1e8),_0x1d70e8=_0x454fd7(0x1b8));if(_0xe346a7==0x0){let _0x4a4e0a=window['innerWidth'],_0x2251b3=window['innerHeight'],_0x1de7ae=_0x4a4e0a/0x2,_0x2a6bb0=_0x2251b3/0x2,_0x4b5a4f=_0x45e4a4[_0x454fd7(0x1ab)][_0x454fd7(0x1cc)]();_0x4b5a4f['project'](camera),_0x4b5a4f['x']=_0x4b5a4f['x']*_0x1de7ae+_0x1de7ae,_0x4b5a4f['y']=-(_0x4b5a4f['y']*_0x2a6bb0)+_0x2a6bb0;let _0x21a2fb=_0x4b5a4f['x'],_0x5ba135=_0x4b5a4f['y'];_0x21a2fb>0x0&&_0x21a2fb<window[_0x454fd7(0x1a9)]&&Math[_0x454fd7(0x1f6)](_0x3b4842-_0xbc8fa6)>0x5a&&Math[_0x454fd7(0x1f6)](_0x3b4842-_0xbc8fa6)<0x10e?(document['querySelector'](_0x454fd7(0x1b4)+_0x377099)['style'][_0x454fd7(0x1d3)]=_0x21a2fb-0x32+'px',document[_0x454fd7(0x22b)](_0x454fd7(0x1b4)+_0x377099)['style'][_0x454fd7(0x1de)]=_0x5ba135-0x32+'px',document[_0x454fd7(0x22b)](_0x454fd7(0x1b4)+_0x377099)[_0x454fd7(0x1d9)]['display']=_0x454fd7(0x1be),document[_0x454fd7(0x22b)](_0x454fd7(0x1b4)+_0x377099)['style'][_0x454fd7(0x22c)]=_0x1d70e8,document[_0x454fd7(0x22b)](_0x454fd7(0x1b4)+_0x377099)['innerHTML']=_0x4fbcd2):document['querySelector'](_0x454fd7(0x1b4)+_0x377099)[_0x454fd7(0x1d9)][_0x454fd7(0x206)]=_0x454fd7(0x1c1);}}_0x3c1331==![]&&(flightList[_0xe346a7][_0x454fd7(0x230)]=![],clicked(_0xe346a7,0x0));}renderer[_0x454fd7(0x1ee)](scene,camera);}