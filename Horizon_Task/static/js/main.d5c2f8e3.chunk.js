(this.webpackJsonphorizon_task=this.webpackJsonphorizon_task||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var i=n(10),s=n.n(i),r=n(9),o=n(2),a=n(3),c=n(6),l=n(5),u=n(4),d=n(1),h=n.n(d),p=n(0),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{borderWidth:"25px",border:"solid black",margin:"5px",backgroundColor:this.props.backgroundColor?this.props.backgroundColor:"white",width:"40px",height:"40px",alignItems:"center",justifyContent:"center",display:"flex"},children:this.props.heldValue})}}]),n}(h.a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).delayedNumber=i.delayedNumber.bind(Object(c.a)(i)),i.state={index:i.props.index-1},e.delayNumberReveal&&i.delayedNumber(i.props.timeDelay),i}return Object(a.a)(n,[{key:"delayedNumber",value:function(e){var t=this;setTimeout((function(){t.setState({index:t.state.index+1})}),e)}},{key:"render",value:function(){for(var e=this.state.index+1,t=[],n=0;n<this.props.gameLength;n++){var i={};n<e&&(i.heldValue=this.props.values[n]),n===e&&this.props.valid&&(i.backgroundColor="lightgreen"),t.push(Object(p.jsx)(x,{backgroundColor:i.backgroundColor,heldValue:i.heldValue},n))}return Object(p.jsx)("div",{style:{border:"solid ".concat(this.props.machineColor?this.props.machineColor:"black"," 5px")},children:t})}}]),n}(h.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{style:{position:"relative",top:"20px",left:"10px",margin:"5px",padding:"5px",border:"solid ".concat(this.props.borderColor," 2px")},children:[" Key: ",this.props.machineKey]})}}]),n}(h.a.Component),b=(n(7),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).delayAnimation=i.delayAnimation.bind(Object(c.a)(i)),e.delayAnimation&&i.delayAnimation(i.props.timeDelay),i.state={animate:i.props.animate},i}return Object(a.a)(n,[{key:"delayAnimation",value:function(e){var t=this;setTimeout((function(){t.setState({animate:!0})}),e)}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"lever_ball",style:{width:"25px",height:"25px",borderRadius:"50%",backgroundColor:this.props.backgroundColor,animation:this.state.animate?"ball_clink":"",animationDuration:this.state.animate?".5s":""}}),Object(p.jsx)("div",{className:"lever_arm",style:{width:"5px",height:"90px",backgroundColor:this.props.backgroundColor,animation:this.state.animate?"arm_clink":"",animationDuration:this.state.animate?".5s":""}}),Object(p.jsx)("div",{style:{position:"relative",width:25,height:5,backgroundColor:this.props.backgroundColor,top:"25%",left:"0px"}})]})}}]),n}(h.a.Component)),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{style:{width:this.props.width,height:this.props.height,border:"solid ".concat(this.props.borderColor," 2px")},children:[this.props.description+":",Object(p.jsx)("div",{style:{color:"green"},children:this.props.points+"$"})]})}}]),n}(h.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{style:{width:this.props.width,height:this.props.height,border:"solid ".concat(this.props.borderColor," 2px")},children:[this.props.description+":",Object(p.jsxs)("div",{style:{display:"flex",flex:"row",justifyContent:"center"},children:[Object(p.jsx)("div",{style:{color:"green"},children:this.props.points+"$"}),Object(p.jsx)("div",{children:"/"}),Object(p.jsx)("div",{children:this.props.totalPoints+"$"})]})]})}}]),n}(h.a.Component);function y(e,t){var n=function(){for(var e=0,t=0;0===e;)e=Math.random();for(;0===t;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}()*e[t].sd+e[t].mu;return Math.floor(n)}var O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;Object(o.a)(this,n),(i=t.call(this,e)).subtrial=-1,i.key_map=function(e){for(var t={},n=0;n<e.length;n++)t[String(e[n].keyBind)]=n;return t}(i.props.machineVars),i.column_map=function(e){for(var t={},n=0;n<e.length;n++)t[String(n)]={mu:e[n].mu,sd:e[n].sd,valid:!1,discovered:[],machineColor:e[n].color,description:e[n].description};return t}(i.props.machineVars),i.key_press=i.key_press.bind(Object(c.a)(i)),i.advance_subtrial=i.advance_subtrial.bind(Object(c.a)(i)),i.process_choice=i.process_choice.bind(Object(c.a)(i)),i.nextTrial=i.nextTrial.bind(Object(c.a)(i)),i.time=new Date,i.data={meta_data:i.props,trial_data:[]},i.state={},i.advance_subtrial();for(var s=0;s<i.props.machineVars.length;s++)i.state[String(s)]={valid:i.column_map[String(s)].valid,discovered:[],description:i.column_map[String(s).description]};return i.state.total_points=e.total_points,i.state.round_points=0,i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.key_press)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.key_press)}},{key:"key_press",value:function(e){var t=new Date;String(e.key)in this.key_map&&this.column_map[String(this.key_map[e.key])].valid&&this.process_choice(String(this.key_map[String(e.key)]),t)}},{key:"process_choice",value:function(e,t){this.advance_subtrial();for(var n={},i=null,s=0;s<this.props.machineVars.length;s++)String(s)===e?(i=y(this.column_map,e),this.column_map[String(s)].discovered.push(i)):this.column_map[String(s)].discovered.push("xxx"),n[String(s)]={valid:this.column_map[String(s)].valid,discovered:this.column_map[String(s)].discovered};n.last_choice=e,this.subtrial>this.props.force.length&&(n.total_points=this.state.total_points+i,n.round_points=this.state.round_points+i),this.data.trial_data.push({choice:e,value:i,reaction_time:t.getTime()-this.trial_start_time.getTime()}),this.setState(n),this.subtrial>=this.props.gameLength&&setTimeout(this.nextTrial,1e3)}},{key:"nextTrial",value:function(){this.props.nextTrial(this.data,this.state.round_points)}},{key:"advance_subtrial",value:function(){if(this.subtrial+=1,this.subtrial<this.props.force.length)for(var e=0;e<this.props.machineVars.length;e++)this.props.force[this.subtrial].includes(e)?this.column_map[String(e)].valid=!0:this.column_map[String(e)].valid=!1;else for(var t=0;t<this.props.machineVars.length;t++)this.column_map[String(t)].valid=!0}},{key:"render",value:function(){for(var e=[],t=null,n=!1,i=0;i<this.props.machineVars.length;i++)t=this.state[String(i)].discovered.length,n=String(i)==this.state.last_choice,e.push(Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h2",{style:{position:"relative",left:"10px"},children:this.column_map[String(i)].description}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(b,{animate:n,backgroundColor:this.column_map[String(i)].machineColor},"Lever "+String(this.props.trial)+";"+String(this.subtrial)),Object(p.jsx)(j,{index:t,valid:this.state[String(i)].valid,values:this.state[String(i)].discovered,gameLength:this.props.gameLength,machineColor:this.column_map[String(i)].machineColor},"Game Machine "+String(this.props.trial)+";"+String(this.subtrial))]}),Object(p.jsx)(m,{borderColor:this.column_map[String(i)].machineColor,machineKey:this.props.machineVars[i].keyBind},"Key Display "+String(this.props.trial)+";"+String(this.subtrial))]},i));return this.trial_start_time=new Date,Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{style:{width:"100%",textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(v,{points:this.state.round_points,width:"300px",height:"75px",borderColor:"black",description:"Money This Round"}),this.props.trialDescription,Object(p.jsx)(g,{points:this.state.total_points,width:"300px",height:"75px",borderColor:"black",description:"Total Money Earned",totalPoints:"20000"})]}),Object(p.jsx)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:e})]})}}]),n}(h.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).nextInstruction=i.nextInstruction.bind(Object(c.a)(i)),i.key_press=i.key_press.bind(Object(c.a)(i)),i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.key_press)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.key_press)}},{key:"key_press",value:function(e){e.key===this.props.nextInstructionKey&&this.nextInstruction(),e.key===this.props.previousInstructionKey&&this.previousInstruction()}},{key:"nextInstruction",value:function(){this.props.nextInstruction()}},{key:"previousInstruction",value:function(){this.props.previousInstruction()}},{key:"render",value:function(){for(var e=[],t=[],n=0;n<this.props.divs.length;n++)e.push(this.props.divs[n]);return this.props.previousInstructionKey&&t.push(Object(p.jsx)("div",{style:{width:"200px",height:"50px",border:"solid black 5px",textAlign:"center",fontSize:"20px",margin:"5px"},children:"Press ".concat(this.props.previousInstructionKey," to go back")},"previous "+String(n))),this.props.nextInstructionKey&&t.push(Object(p.jsx)("div",{style:{width:"200px",height:"50px",border:"solid black 5px",textAlign:"center",fontSize:"20px",margin:"5px"},children:"Press ".concat(this.props.nextInstructionKey," to continue")},"next "+String(n))),Object(p.jsxs)("div",{children:[e,Object(p.jsx)("div",{style:{display:"flex",flex:"row",position:"fixed",justifyContent:"space-evenly",bottom:"5%",width:"100%"},children:t})]})}}]),n}(h.a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).requestFullScreen=i.requestFullScreen.bind(Object(c.a)(i)),i}return Object(a.a)(n,[{key:"requestFullScreen",value:function(){var e=this.props.docVar,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.call(e),this.props.nextInstruction()}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{border:"solid black 5px",marginLeft:"100px",marginRight:"100px",textAlign:"center"},children:"This experiment is best viewed in full screen, click the button below to go fullscreen and enter the experiment!"}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)("button",{className:"fullscreenbutton",style:{top:"150px"},onClick:this.requestFullScreen,children:"Go Fullscreen"})})]})}}]),n}(h.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return console.log(this.props.data),Object(p.jsxs)("h1",{style:{border:"solid black 5px",marginLeft:"100px",marginRight:"100px",textAlign:"center"},children:["The experiment in now over! You earned a total of ",this.props.money," points which means you have earned a bounus of ",this.props.bonus,". Your data is being exported, please wait to be redirected."]})}}]),n}(h.a.Component);function k(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"even",t=["main","main","other","other"],n=["main","main","main","other"],i=["main","other","other","other"];return"even"===e?(k(t),t):"weight_positive"===e?(k(t),n):"weight_negative"===e?(k(t),i):void 0}function N(){for(var e=["even","weight_negative","weight_positive"],t=function(e){for(var t,n=[{}],i=0;i<Object.keys(e).length;i++){for(var s=[],r=0;r<n.length;r++)for(var o=0;o<e[Object.keys(e)[i]].length;o++){var a=(t=n[r],JSON.parse(JSON.stringify(t)));a[Object.keys(e)[i]]=e[Object.keys(e)[i]][o],s.push(a)}n=s}return n}({mu:[40,60],deltaMu:[-30,-20,-12,-8,-4,4,8,12,20,30],sd:[8],mainBandit:[0,1],gameLength:[5,10]}),n=0;n<t.length;n++)t[n].forcedBandit=C(e[Math.floor(3*Math.random())]);return t}var L=function(){var e=function(e){for(var t=[],n=0;n<e.length;n++){var i={machineVars:[],gameLength:null,force:[]},s={},r={};0===e[n].mainBandit?(s.mu=e[n].mu,r.mu=e[n].mu+e[n].deltaMu,i.force=e[n].forcedBandit.map((function(e){return"main"==e?[0]:[1]}))):(s.mu=e[n].mu+e[n].deltaMu,r.mu=e[n].mu,i.force=e[n].forcedBandit.map((function(e){return"main"==e?[1]:[0]}))),s.sd=e[n].sd,r.sd=e[n].sd,s.keyBind="ArrowLeft",r.keyBind="ArrowRight",s.color="red",r.color="blue",s.description="Left Bandit",r.description="Right Bandit",i.gameLength=e[n].gameLength,i.machineVars.push(s),i.machineVars.push(r),i.addedMetaData=e[n],i.trialDescription="Horizon Trial ".concat(n+1," of ").concat(e.length),t.push(i)}return t}(N());return k(e),e},_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;Object(o.a)(this,n),(i=t.call(this,e)).nextTrial=i.nextTrial.bind(Object(c.a)(i)),i.nextInstruction=i.nextInstruction.bind(Object(c.a)(i)),i.previousInstruction=i.previousInstruction.bind(Object(c.a)(i)),i.gameData=[],i.totalPoints=0,i.state={currentTrial:0,instructionNumber:0,isFullScreen:!1},i.instructions=[Object(p.jsx)(I,{docVar:document.documentElement,nextInstruction:i.nextInstruction},0),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"100px",fontSize:"200px",textAlign:"center"},children:"Horizon Task"},"Header 1")],nextInstructionKey:"n",nextInstruction:i.nextInstruction},1),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"100px",textAlign:"center"},children:"Welcome!"},"Header 21"),Object(p.jsx)("h1",{style:{position:"relative",top:"150px",textAlign:"center"},children:"Thank you for volunteering for this experiment"},"Header 22")],nextInstructionKey:"n",previousInstructionKey:"b",nextInstruction:i.nextInstruction,previousInstruction:i.previousInstruction},2),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"100px",textAlign:"center",margin:"100px"},children:"This is a paid experiment.\n You will be playing a gambling game and the amount we pay you will be based on your performance.\nPlease read through these instructions carefully!"},"Header 3")],nextInstructionKey:"n",previousInstructionKey:"b",nextInstruction:i.nextInstruction,previousInstruction:i.previousInstruction},3),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"100px",textAlign:"center",margin:"100px"},children:"In this experiment - the gambling task - we would like you to choose between two one-armed bandits (i.e. slot machines) of the sort you might find in a casino."},"Header 4")],nextInstructionKey:"n",previousInstructionKey:"b",nextInstruction:i.nextInstruction,previousInstruction:i.previousInstruction},3),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"The one-armed bandits will be represented like this:"},"Header 5"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},51),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},5)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},52),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},6)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},4),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"Everytime you choose to play a particular bandit, it will be pulled like this..."},"Header 6"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},51),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},52)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue",delayAnimation:!0,timeDelay:1e3},53),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},54)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},5),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"... and the payoff will be shown like this. For example, in this case the left bandit has been played and is paying out 77 points"},"Header 7"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red",delayAnimation:!0,timeDelay:1e3},61),Object(p.jsx)(j,{index:0,valid:!1,values:[77],gameLength:6,machineColor:"red",delayNumberReveal:!0,timeDelay:1e3},62)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},63),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},64)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},6),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"Your goal is to maximize the points you get throughout the task. Try your best to get to as many points as you can!"},"Header 8"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},71),Object(p.jsx)(j,{index:1,valid:!1,values:[77],gameLength:6,machineColor:"red"},72)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},73),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},74)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},7),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"During one game, each bandit tends to pay out about the same amount of reward on average, but there is variability in the reward on any given play"},"Header 9"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},81),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},82)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},83),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},84)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},8),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"For example, the average reward for the bandit on the right might be 50 points, but on the first play we might see a reward of 52 points because of the variability..."},"Header 10"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},91),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},92)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue",delayAnimation:!0,timeDelay:500},93),Object(p.jsx)(j,{index:0,valid:!1,values:[52],gameLength:6,machineColor:"blue",delayNumberReveal:!0,timeDelay:500},94)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},9),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"...on the second play we might get 56 points"},"Header 11"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},101),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},102)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue",delayAnimation:!0,timeDelay:500},103),Object(p.jsx)(j,{index:1,valid:!1,values:[50,56],gameLength:6,machineColor:"blue",delayNumberReveal:!0,timeDelay:500},104)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},10),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"...if we play a third time on the right we might get 45 points this time..."},"Header 12"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},111),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},112)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue",delayAnimation:!0,timeDelay:500},113),Object(p.jsx)(j,{index:2,valid:!1,values:[50,56,45],gameLength:6,machineColor:"blue",delayNumberReveal:!0,timeDelay:500},114)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},110),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"...and so on such that if we were able to play the slot machine on the right 6 times in a row we might see these rewards"},"Header 13"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},121),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"red"},122)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},123),Object(p.jsx)(j,{index:6,valid:!1,values:[50,56,45,39,51,50],gameLength:6,machineColor:"blue"},124)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},120),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"On any trial you can only choose to play one of the two bandits and the number of trials in each game is determined by the height of the bandits."},"Header 14")],nextInstructionKey:"n",previousInstructionKey:"b",nextInstruction:i.nextInstruction,previousInstruction:i.previousInstruction},13),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"For example, when the bandits are 10 boxes high, there are 10 trials in that game..."},"Header 15"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"75px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},121),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:10,machineColor:"red"},122)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"75px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},123),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:10,machineColor:"blue"},124)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},120),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"...when the bandits are 5 boxes high, there are only 5 trials in the game."},"Header 16"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},131),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:5,machineColor:"red"},132)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},133),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:5,machineColor:"blue"},134)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},130),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"The first four trials in each game are instructed trials. These instructed trials will be indicated by a green square inside the box we want you to open"},"Header 17"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},141),Object(p.jsx)(j,{index:0,valid:!0,values:[],gameLength:6,machineColor:"red"},142)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},143),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},144)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},140),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"You must press the corresponding ARROW KEY to choose this option in order to move on to see the reward and advance to the next trial"},"Header 18")],nextInstructionKey:"n",previousInstructionKey:"b",nextInstruction:i.nextInstruction,previousInstruction:i.previousInstruction},13),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"For example, if you are instructed to choose the left bandit on the first trial, you will see this below. You must use the LEFT ARROW key to choose this option."},"Header 19"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},151),Object(p.jsx)(j,{index:0,valid:!0,values:[],gameLength:6,machineColor:"red"},152)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},153),Object(p.jsx)(j,{index:0,valid:!1,values:[],gameLength:6,machineColor:"blue"},154)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},150),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"If you are instructed to choose the right bandit on the second trial, you will see this:"},"Header 20"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},161),Object(p.jsx)(j,{index:1,valid:!1,values:[77],gameLength:6,machineColor:"red"},162)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},163),Object(p.jsx)(j,{index:1,valid:!0,values:["xxx"],gameLength:6,machineColor:"blue"},164)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},160),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"Note that you do not earn any points for the four instructed trials, but you do learn something about how rewarding each bandit is"},"Header 21"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},171),Object(p.jsx)(j,{index:4,valid:!0,values:[77,"xxx",65,67],gameLength:6,machineColor:"red"},172)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},173),Object(p.jsx)(j,{index:4,valid:!0,values:["xxx",52,"xxx","xxx"],gameLength:6,machineColor:"blue"},174)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},170),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"Once the instructed trials are complete, you will make free choices between the two bandits for the rest of the game (in this case 2 trials).\n The free choices are indicated by two green squares inside the bandits you are choosing between."},"Header 22"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},181),Object(p.jsx)(j,{index:4,valid:!0,values:[77,"xxx",65,67],gameLength:6,machineColor:"red"},182)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},183),Object(p.jsx)(j,{index:4,valid:!0,values:["xxx",52,"xxx","xxx"],gameLength:6,machineColor:"blue"},184)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},180),Object(p.jsx)(f,{divs:[Object(p.jsx)("h1",{style:{position:"relative",top:"50px",textAlign:"center",marginLeft:"50px",marginRight:"50px",height:"100px"},children:"Your goal on the task's free choice trials is to earn the most points you can. The more you choose the bandit with the higher average reward, the more money you will earn in the task."},"Header 23"),Object(p.jsxs)("div",{className:"row",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"red"},191),Object(p.jsx)(j,{index:4,valid:!0,values:[77,"xxx",65,67],gameLength:6,machineColor:"red"},192)]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"row",style:{position:"relative",top:"100px"},children:[Object(p.jsx)(b,{animate:!1,backgroundColor:"blue"},193),Object(p.jsx)(j,{index:4,valid:!0,values:["xxx",52,"xxx","xxx"],gameLength:6,machineColor:"blue"},194)]})})]})],nextInstructionKey:"n",nextInstruction:i.nextInstruction,previousInstructionKey:"b",previousInstruction:i.previousInstruction},190)];var s=L();return console.log(s),i.game=s,i}return Object(a.a)(n,[{key:"nextTrial",value:function(e,t){this.gameData.push(e),this.totalPoints+=t,console.log("next Trial"),this.setState({currentTrial:this.state.currentTrial+1})}},{key:"nextInstruction",value:function(){this.setState({instructionNumber:this.state.instructionNumber+1})}},{key:"previousInstruction",value:function(){this.setState({instructionNumber:this.state.instructionNumber-1})}},{key:"render",value:function(){return this.state.instructionNumber<this.instructions.length?this.instructions[this.state.instructionNumber]:this.state.currentTrial<this.game.length?Object(p.jsx)(O,Object(r.a)(Object(r.a)({trial:this.state.currentTrial},this.game[this.state.currentTrial]),{},{total_points:this.totalPoints,nextTrial:this.nextTrial}),"Horizon trial "+String(this.state.currentTrial)):Object(p.jsx)(w,{money:this.totalPoints,bonus:"2$",data:this.gameData})}}]),n}(h.a.Component);s.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.d5c2f8e3.chunk.js.map