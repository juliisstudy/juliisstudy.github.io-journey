var journey;$(function(){begin=function(e){var t=this;this.i=$(e);this.init=function(){journey.goscreen("welcome");$("#mainnav",journey.body).removeClass("off-screen");$(".sumtotal").addClass("open");setTimeout(function(){$(".sumtotal").removeClass("open")},6e3);$("#preload-wrap").remove()};this.init()};journey={body:$("#mainbody"),nav:$("#mainnav",this.body),total:0,init:function(){$(".sumtotal").hover(function(){$(".panel").addClass("off-screen");$(".sumtotal").addClass("open")},function(){$(".sumtotal").removeClass("open")});journey.navhover("#navintro","#navintroab");journey.navhover("#navcare","#navcareab");journey.navhover("#navabout","#navaboutab");journey.navhover("#navhome","#navhomeab");journey.navhover("#navor","#navorab");journey.navhover("#navquiz","#navquizab");$("#mainnav",journey.body).on("click",".tab",this.onNavClick);$("#introwhy",journey.body).on("click",".whywoman",this.onWomanClick);$("#careselectiona",journey.body).on("click",".selectiona",this.oncareClick);$("#careselectionb",journey.body).on("click",".ssss",this.oncarebClick);$(".ui-slider").css("background","#f9c49d");$(window).on("load",function(){$(".preload").addClass("off-screen");setTimeout(function(){journey.startScreen=new begin("#homepage-welcome")},1e3)})},check:function(e,t,n,r){$(r).empty();var i=document.getElementById(t);var s=i.getAttribute("data-selection");$(r).text(s);if(e==0){$(n).removeClass("a b c d");$(n).addClass("a")}else if(e==1){$(n).removeClass("a b c d");$(n).addClass("b")}else if(e==2){$(n).removeClass("a b c d");$(n).addClass("c")}else if(e==3){$(n).removeClass("a b c d");$(n).addClass("d")}},isChecked:function(e){var t=document.getElementsByName("q"+e);if(t.length<1){return true}for(var n=0;n<t.length;n++){if(t[n].checked){return true}}return false},validateForm:function(){count_int=document.getElementById("number_of_questions").value;for(var e=1;e<=count_int;e++){if(!journey.isChecked(e)){fLabel=document.getElementsByName("q"+e).item(0).getAttribute("title");if(fLabel==null)fLabel=e;alert("Please answer question "+fLabel+".");return false;break}}},oncareClick:function(e){var t=$(e.target).closest(".selectiona");if(t.hasClass("careFamily")){$(".careinfoa").addClass("offscreen");$("#careFamily").removeClass("offscreen");$("#rely").css("color","#ff8383;");$("#talk,#join,#focus,#take").css("color","#ffaeae;");$("#refvf").show();$("#arc").css("background-color","#ff8383;");$("#ard,#are,#arf,#arg").css("background-color","#ffaeae");return}else if(t.hasClass("careHealth")){$(".careinfoa").addClass("offscreen");$("#careHealth").removeClass("offscreen");$("#talk").css("color","#ff8383;");$("#rely, #join, #focus, #take").css("color","#ffaeae;");$("#refvf").show();$("#ard").css("background-color","#ff8383;");$("#arc,#are,#arf,#arg").css("background-color","#ffaeae");return}else if(t.hasClass("caregroup")){$(".careinfoa").addClass("offscreen");$("#caregroup").removeClass("offscreen");$("#join").css("color","#ff8383;");$("#talk, #rely, #focus, #take").css("color","#ffaeae;");$("#refvf").show();$("#are").css("background-color","#ff8383;");$("#ard,#arc,#arf,#arg").css("background-color","#ffaeae");return}else if(t.hasClass("careWellness")){$(".careinfoa").addClass("offscreen");$("#careWellness").removeClass("offscreen");$("#focus").css("color","#ff8383;");$("#talk, #join, #rely, #take").css("color","#ffaeae;");$("#refvf").hide();$("#arf").css("background-color","#ff8383;");$("#ard,#are,#arc,#arg").css("background-color","#ffaeae");return}else if(t.hasClass("careTake")){$(".careinfoa").addClass("offscreen");$("#careTake").removeClass("offscreen");$("#take").css("color","#ff8383;");$("#talk").css("color","#ffaeae;");$("#join").css("color","#ffaeae;");$("#focus").css("color","#ffaeae;");$("#rely").css("color","#ffaeae;");$("#refvf").show();$("#arg").css("background-color","#ff8383;");$("#ard,#are,#arf,#arc").css("background-color","#ffaeae");return}},oncarebClick:function(e){var t=$(e.target).closest(".ssss");if(t.hasClass("carehusband")){$(".careinfob").addClass("offscreen");$("#carefriends").addClass("offscreen");$("#carehusband").removeClass("offscreen");$("#husband").css("color","#ff8383;");$("#friends").css("color","#ffaeae;");$("#arh").css("background-color","#ff8383;");$("#arff").css("background-color","#ffaeae;");return}else if(t.hasClass("carefriends")){$(".careinfob").addClass("offscreen");$("#carefriends").removeClass("offscreen");$("#carehusband").addClass("offscreen");$("#friends").css("color","#ff8383;");$("#husband").css("color","#ffaeae;");$("#arff").css("background-color","#ff8383;");$("#arh").css("background-color","#ffaeae;");return}},onWomanClick:function(e){var t=$(e.target).closest(".whywoman");if(t.hasClass("biowhywoman")){$("#biowhy").addClass("offscreen");$("#riskwhy").removeClass("offscreen");$("#bioriskwhy").css("color","#ff8383;");$("#psyriskwhy").css("color","#ffaeae;");$("#ara").css("background-color","#ff8383;");$("#arb").css("background-color","#ffaeae");return}else if(t.hasClass("riskwhywoman")){$("#riskwhy").addClass("offscreen");$("#biowhy").removeClass("offscreen");$("#psyriskwhy").css("color","#ff8383;");$("#bioriskwhy").css("color","#ffaeae;");$("#arb").css("background-color","#ff8383;");$("#ara").css("background-color","#ffaeae");return}},onNavClick:function(e){e.preventDefault();var t=$(e.target).closest(".tab");if(t.hasClass("next")&&t.closest("#mainbody").hasClass("about")){$("#mainnav").removeClass("off-screen");return}if(t.hasClass("prev")&&t.closest("#mainbody").hasClass("welcome")){$("#mainnav").removeClass("off-screen");return}if(t.hasClass("disabled")){return}else if(t.hasClass("prev")){var n=$(".screen.current").prev().attr("data-screen");journey.goscreen(n)}else if(t.hasClass("next")){var r=$(".screen.current").next().attr("data-screen");journey.goscreen(r)}},goscreen:function(e){var t;t="current";var n=journey.body.removeClass("loading welcome about what why outcome  quiz orgnation carepage sidenav intro care careself resultmaybe resultgood result maybe carefriend caretreatment carebio  current quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten caremethod").addClass(e).find(".screen").removeClass(t).filter('[data-screen="'+e+'"]').addClass("current");if("welcome what why outcome careself carefriend caremethod caretreatment carebio quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten quizintro resultmaybe resultgood".indexOf(e)>-1){$("#prev").hide()}else{$("#prev").show()}if("about what why outcome careself carefriend  caremethod caretreatment carebio quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten quizintro resultmaybe resultgood".indexOf(e)>-1){$("#next").hide()}else{$("#next").show()}if("about carepage quizpage orgnation intropage welcome".indexOf(e)>-1){$("#intronav, #carenav, #quiznav").hide();$("#intronav, #carenav, #quiznav").addClass("offscreen");$("#intronav, #carenav, #quiznav").removeClass("careleft").addClass("disabled");$("#intro-wrap, #care-wrap, #quiz-wrap").addClass("offscreen");$("#returna,#returnq,#returnc").hide()}if("what why outcome".indexOf(e)>-1){$("#intronav").fadeIn(300);$("#care-wrap, #quiz-wrap").addClass("offscreen");$("#carenav, #quiznav").addClass("offscreen").removeClass("careleft");$("#intro-wrap").removeClass("offscreen");$("#intronav").removeClass("offscreen").addClass("careleft");$("#returnq, #returnc, #returna").hide();$("#returna").show()}if("what".indexOf(e)>-1){$("#whatnav").addClass("eachnav");$("#whynav").addClass("eachnav");$("#outcomenav").addClass("eachnav");$("#whatnav").css("background","#ff8383");$("#whynav").css("background","#ffaeae");$("#outcomenav").css("background","#ffaeae");return}if("why".indexOf(e)>-1){$("#whatnav").addClass("eachnav");$("#whynav").addClass("eachnav");$("#outcomenav").addClass("eachnav");$("#whynav").css("background","#ff8383");$("#whatnav").css("background","#ffaeae");$("#outcomenav").css("background","#ffaeae");return}if("outcome".indexOf(e)>-1){$("#whatnav").addClass("eachnav");$("#whynav").addClass("eachnav");$("#outcomenav").addClass("eachnav");$("#outcomenav").css("background","#ff8383");$("#whynav").css("background","#ffaeae");$("#whatnav").css("background","#ffaeae");return}if("careself".indexOf(e)>-1){$("#snav").css("background","#ff8383");$("#fnav").css("background","#ffaeae");$("#unav").css("background","#ffaeae");$("#whatnav").removeClass("eachnav");$("#whynav").removeClass("eachnav");$("#outcomenav").removeClass("eachnav")}if("carefriend".indexOf(e)>-1){$("#fnav").css("background","#ff8383");$("#snav").css("background","#ffaeae");$("#unav").css("background","#ffaeae");$("#whatnav").removeClass("eachnav");$("#whynav").removeClass("eachnav");$("#outcomenav").removeClass("eachnav")}if("caremethod".indexOf(e)>-1){$("#unav").css("background","#ff8383");$("#snav").css("background","#ffaeae");$("#fnav").css("background","#ffaeae");$("#whatnav").removeClass("eachnav");$("#whynav").removeClass("eachnav");$("#outcomenav").removeClass("eachnav")}if("quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten quizintro".indexOf(e)>-1){$("#whatnav").removeClass("eachnav");$("#whynav").removeClass("eachnav");$("#outcomenav").removeClass("eachnav");$("#fnav").removeClass("eachnavcare");$("#snav").removeClass("eachnavcare");$("#returna,#returnq,#returnc").hide();$("#returnq").show()}if("about carepage quizpage orgnation intropage welcome".indexOf(e)>-1){$("#whatnav").removeClass("eachnav");$("#whynav").removeClass("eachnav");$("#outcomenav").removeClass("eachnav");$("#fnav").removeClass("eachnavcare");$("#snav").removeClass("eachnavcare");$("#returna,#returnq,#returnc").hide();$("#sum").addClass("offscreen")}if("welcome".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navhomea").removeClass("offscreen");$("#navhome").css("background","#ff8383");return}if("intropage".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navintroa").removeClass("offscreen");$("#navintro").css("background","#ff8383");$("#sum").addClass("offscreen");return}if("quizpage".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navquiza").removeClass("offscreen");$("#navquiz").css("background","#ff8383");return}if("orgnation".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navora").removeClass("offscreen");$("#navor").css("background","#ff8383");return}if("carepage".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navcarea").removeClass("offscreen");$("#navcare").css("background","#ff8383");return}if("about".indexOf(e)>-1){$(".n").css("background","#ffaeae");$(".navp").addClass("offscreen");$("#navabouta").removeClass("offscreen");$("#navabout").css("background","#ff8383");return}if("careself carefriend caretreatment caremethod carebio".indexOf(e)>-1){$("#carenav").fadeIn(300);$("#intro-wrap, #quiz-wrap").addClass("offscreen");$("#intronav, #quiznav").addClass("offscreen").removeClass("careleft");$("#care-wrap").removeClass("offscreen");$("#carenav").removeClass("offscreen").addClass("careleft");$("#returna,#returnq,#returnc").hide();$("#returnc").show()}if("quizintro quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten".indexOf(e)>-1){$("#quiznav").fadeIn(300);$("#intro-wrap, #care-wrap").addClass("offscreen");$("#intronav, #carenav").addClass("offscreen").removeClass("careleft");$("#quiz-wrap").removeClass("offscreen");$("#quiznav").removeClass("offscreen").addClass("careleft topz")}if("quizintro".indexOf(e)>-1){journey.changea("quizintro","#quizintronav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqa").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide()}if("quizone".indexOf(e)>-1){journey.changea("quizone","#quizonenav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqb").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqba").show()}if("quiztwo".indexOf(e)>-1){journey.changea("quiztwo","#quiztwonav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqc").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbb").show()}if("quizthree".indexOf(e)>-1){journey.changea("quizthree","#quizthreenav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqd").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbc").show()}if("quizfour".indexOf(e)>-1){journey.changea("quizfour","#quizfournav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqe").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn, #nextqbt, #nextqbtt").hide();$("#nextqbd").show()}if("quizfive".indexOf(e)>-1){journey.changea("quizfive","#quizfivenav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqf").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn, #nextqbt, #nextqbtt").hide();$("#nextqbe").show()}if("quizsix".indexOf(e)>-1){journey.changea("quizsix","#quizsixnav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqg").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn, #nextqbt, #nextqbtt").hide();$("#nextqbf").show()}if("quizseven".indexOf(e)>-1){journey.changea("quizseven","#quizsevennav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqh").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn, #nextqbt, #nextqbtt").hide();$("#nextqbg").show()}if("quizeight".indexOf(e)>-1){journey.changea("quizeight","#quizeightnav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqi").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn, #nextqbt, #nextqbtt").hide();$("#nextqbh").show()}if("quiznine".indexOf(e)>-1){journey.changea("quiznine","#quizninenav");$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqn").show();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbi").show()}if("quizten".indexOf(e)>-1){journey.changea("quizten","#quiztennav");$("#sum").removeClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbn").show()}if("resultmaybe".indexOf(e)>-1){$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbt").show()}if("resultgood".indexOf(e)>-1){$("#sum").addClass("offscreen");$("#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn").hide();$("#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt").hide();$("#nextqbtt").show()}},crhover:function(e,t){$(e).hover(function(){$(e).css("color","#ff8383;")},function(){$(e).css("color","#ffaeae")})},navhover:function(e,t){$(e).hover(function(){$(t).removeClass("offscreen")},function(){$(t).addClass("offscreen")})},sum:function(){var e=0;var t=0;journey.validateForm();var n=$("#question1 input[type=radio]:checked").val();var r=$("#question2 input[type=radio]:checked").val();var i=$("#question3 input[type=radio]:checked").val();var s=$("#question4 input[type=radio]:checked").val();var o=$("#question5 input[type=radio]:checked").val();var u=$("#question6 input[type=radio]:checked").val();var a=$("#question7 input[type=radio]:checked").val();var f=$("#question8 input[type=radio]:checked").val();var l=$("#question9 input[type=radio]:checked").val();var c=$("#question10 input[type=radio]:checked").val();var h=Number(n);var p=Number(r);var d=Number(i);var v=Number(s);var m=Number(o);var g=Number(u);var y=Number(a);var b=Number(f);var w=Number(l);var E=Number(c);$("#result").empty();var e=parseInt(h+p+d+v+m+g+y+b+w+E);$(".resultss").empty();$(".resultss").text(e);if(e>=10){journey.goscreen("resultmaybe")}else if(e<10){journey.goscreen("resultgood")}},changea:function(e,t){$(".eachnavquiz").css("background","#ffaeae");$(t).css("background","#ff8383");$("#resultbtn").addClass("offscreen");$("#resultbtna").addClass("offscreen")}};journey.init()})