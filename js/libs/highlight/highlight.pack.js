var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function f(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function b(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function h(t,s){var p="";for(var r=0;r<t.childNodes.length;r++){if(t.childNodes[r].nodeType==3){var q=t.childNodes[r].nodeValue;if(s){q=q.replace(/\n/g,"")}p+=q}else{if(t.childNodes[r].nodeName=="BR"){p+="\n"}else{p+=h(t.childNodes[r])}}}if(/MSIE [678]/.test(navigator.userAgent)){p=p.replace(/\r/g,"\n")}return p}function a(s){var r=s.className.split(/\s+/);r=r.concat(s.parentNode.className.split(/\s+/));for(var q=0;q<r.length;q++){var p=r[q].replace(/^language-/,"");if(e[p]||p=="no-highlight"){return p}}}function c(r){var p=[];(function q(t,u){for(var s=0;s<t.childNodes.length;s++){if(t.childNodes[s].nodeType==3){u+=t.childNodes[s].nodeValue.length}else{if(t.childNodes[s].nodeName=="BR"){u+=1}else{if(t.childNodes[s].nodeType==1){p.push({event:"start",offset:u,node:t.childNodes[s]});u=q(t.childNodes[s],u);p.push({event:"stop",offset:u,node:t.childNodes[s]})}}}}return u})(r,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(D){var A="<"+D.nodeName.toLowerCase();for(var B=0;B<D.attributes.length;B++){var C=D.attributes[B];A+=" "+C.nodeName.toLowerCase();if(C.value!==undefined&&C.value!==false&&C.value!==null){A+='="'+m(C.value)+'"'}}return A+">"}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event=="start"){z+=t(v.node);s.push(v.node)}else{if(v.event=="stop"){var p,r=s.length;do{r--;p=s[r];z+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function j(){function q(w,y,u){if(w.compiled){return}var s=[];if(w.k){var r={};function x(D,C){var A=C.split(" ");for(var z=0;z<A.length;z++){var B=A[z].split("|");r[B[0]]=[D,B[1]?Number(B[1]):1];s.push(B[0])}}w.lR=f(y,w.l||hljs.IR,true);if(typeof w.k=="string"){x("keyword",w.k)}else{for(var v in w.k){if(!w.k.hasOwnProperty(v)){continue}x(v,w.k[v])}}w.k=r}if(!u){if(w.bWK){w.b="\\b("+s.join("|")+")\\s"}w.bR=f(y,w.b?w.b:"\\B|\\b");if(!w.e&&!w.eW){w.e="\\B|\\b"}if(w.e){w.eR=f(y,w.e)}}if(w.i){w.iR=f(y,w.i)}if(w.r===undefined){w.r=1}if(!w.c){w.c=[]}w.compiled=true;for(var t=0;t<w.c.length;t++){if(w.c[t]=="self"){w.c[t]=w}q(w.c[t],y,false)}if(w.starts){q(w.starts,y,false)}}for(var p in e){if(!e.hasOwnProperty(p)){continue}q(e[p].dM,e[p],true)}}function d(D,E){if(!j.called){j();j.called=true}function s(r,O){for(var N=0;N<O.c.length;N++){var M=O.c[N].bR.exec(r);if(M&&M.index==0){return O.c[N]}}}function w(M,r){if(p[M].e&&p[M].eR.test(r)){return 1}if(p[M].eW){var N=w(M-1,r);return N?N+1:0}return 0}function x(r,M){return M.i&&M.iR.test(r)}function L(O,P){var N=[];for(var M=0;M<O.c.length;M++){N.push(O.c[M].b)}var r=p.length-1;do{if(p[r].e){N.push(p[r].e)}r--}while(p[r+1].eW);if(O.i){N.push(O.i)}return N.length?f(P,N.join("|"),true):null}function q(N,M){var O=p[p.length-1];if(O.t===undefined){O.t=L(O,F)}var r;if(O.t){O.t.lastIndex=M;r=O.t.exec(N)}return r?[N.substr(M,r.index-M),r[0],false]:[N.substr(M),"",true]}function A(O,r){var M=F.cI?r[0].toLowerCase():r[0];var N=O.k[M];if(N&&N instanceof Array){return N}return false}function G(M,Q){M=m(M);if(!Q.k){return M}var r="";var P=0;Q.lR.lastIndex=0;var N=Q.lR.exec(M);while(N){r+=M.substr(P,N.index-P);var O=A(Q,N);if(O){y+=O[1];r+='<span class="'+O[0]+'">'+N[0]+"</span>"}else{r+=N[0]}P=Q.lR.lastIndex;N=Q.lR.exec(M)}return r+M.substr(P)}function B(M,N){var r;if(N.sL==""){r=g(M)}else{r=d(N.sL,M)}if(N.r>0){y+=r.keyword_count;C+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function K(r,M){if(M.sL&&e[M.sL]||M.sL==""){return B(r,M)}else{return G(r,M)}}function J(N,r){var M=N.cN?'<span class="'+N.cN+'">':"";if(N.rB){z+=M;N.buffer=""}else{if(N.eB){z+=m(r)+M;N.buffer=""}else{z+=M;N.buffer=r}}p.push(N);C+=N.r}function H(O,N,R){var S=p[p.length-1];if(R){z+=K(S.buffer+O,S);return false}var Q=s(N,S);if(Q){z+=K(S.buffer+O,S);J(Q,N);return Q.rB}var M=w(p.length-1,N);if(M){var P=S.cN?"</span>":"";if(S.rE){z+=K(S.buffer+O,S)+P}else{if(S.eE){z+=K(S.buffer+O,S)+P+m(N)}else{z+=K(S.buffer+O+N,S)+P}}while(M>1){P=p[p.length-2].cN?"</span>":"";z+=P;M--;p.length--}var r=p[p.length-1];p.length--;p[p.length-1].buffer="";if(r.starts){J(r.starts,"")}return S.rE}if(x(N,S)){throw"Illegal"}}var F=e[D];var p=[F.dM];var C=0;var y=0;var z="";try{var t,v=0;F.dM.buffer="";do{t=q(E,v);var u=H(t[0],t[1],t[2]);v+=t[0].length;if(!u){v+=t[1].length}}while(!t[2]);return{r:C,keyword_count:y,value:z,language:D}}catch(I){if(I=="Illegal"){return{r:0,keyword_count:0,value:m(E)}}else{throw I}}}function g(t){var p={keyword_count:0,r:0,value:m(t)};var r=p;for(var q in e){if(!e.hasOwnProperty(q)){continue}var s=d(q,t);s.language=q;if(s.keyword_count+s.r>r.keyword_count+r.r){r=s}if(s.keyword_count+s.r>p.keyword_count+p.r){r=p;p=s}}if(r.language){p.second_best=r}return p}function i(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function n(t,w,r){var x=h(t,r);var v=a(t);var y,s;if(v=="no-highlight"){return}if(v){y=d(v,x)}else{y=g(x);v=y.language}var q=c(t);if(q.length){s=document.createElement("pre");s.innerHTML=y.value;y.value=k(q,c(s),x)}y.value=i(y.value,w,r);var u=t.className;if(!u.match("(\\s|^)(language-)?"+v+"(\\s|$)")){u=u?(u+" "+v):v}if(/MSIE [678]/.test(navigator.userAgent)&&t.tagName=="CODE"&&t.parentNode.tagName=="PRE"){s=t.parentNode;var p=document.createElement("div");p.innerHTML="<pre><code>"+y.value+"</code></pre>";t=p.firstChild.firstChild;p.firstChild.cN=s.cN;s.parentNode.replaceChild(p.firstChild,s)}else{t.innerHTML=y.value}t.className=u;t.result={language:v,kw:y.keyword_count,re:y.r};if(y.second_best){t.second_best={language:y.second_best.language,kw:y.second_best.keyword_count,re:y.second_best.r}}}function o(){if(o.called){return}o.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=b(r[p]);if(q){n(q,hljs.tabReplace)}}}function l(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}else{if(window.attachEvent){window.attachEvent("onload",o)}else{window.onload=o}}}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();hljs.LANGUAGES.bash=function(a){var f="true false";var c={cN:"variable",b:"\\$([a-zA-Z0-9_]+)\\b"};var b={cN:"variable",b:"\\$\\{(([^}])|(\\\\}))+\\}",c:[a.CNM]};var g={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE,c,b],r:0};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var e={cN:"test_condition",b:"",e:"",c:[g,d,c,b,a.CNM],k:{literal:f},r:0};return{dM:{k:{keyword:"if then else fi for break continue while in do done echo exit return set declare",literal:f},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},c,b,a.HCM,a.CNM,g,d,a.inherit(e,{b:"\\[ ",e:" \\]",r:0}),a.inherit(e,{b:"\\[\\[ ",e:" \\]\\]"})]}}}(hljs);hljs.LANGUAGES.ruby=function(e){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var k="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or def",keymethods:"__id__ __send__ abort abs all? allocate ancestors any? arity assoc at at_exit autoload autoload? between? binding binmode block_given? call callcc caller capitalize capitalize! casecmp catch ceil center chomp chomp! chop chop! chr class class_eval class_variable_defined? class_variables clear clone close close_read close_write closed? coerce collect collect! compact compact! concat const_defined? const_get const_missing const_set constants count crypt default default_proc delete delete! delete_at delete_if detect display div divmod downcase downcase! downto dump dup each each_byte each_index each_key each_line each_pair each_value each_with_index empty? entries eof eof? eql? equal? eval exec exit exit! extend fail fcntl fetch fileno fill find find_all first flatten flatten! floor flush for_fd foreach fork format freeze frozen? fsync getc gets global_variables grep gsub gsub! has_key? has_value? hash hex id include include? included_modules index indexes indices induced_from inject insert inspect instance_eval instance_method instance_methods instance_of? instance_variable_defined? instance_variable_get instance_variable_set instance_variables integer? intern invert ioctl is_a? isatty iterator? join key? keys kind_of? lambda last length lineno ljust load local_variables loop lstrip lstrip! map map! match max member? merge merge! method method_defined? method_missing methods min module_eval modulo name nesting new next next! nil? nitems nonzero? object_id oct open pack partition pid pipe pop popen pos prec prec_f prec_i print printf private_class_method private_instance_methods private_method_defined? private_methods proc protected_instance_methods protected_method_defined? protected_methods public_class_method public_instance_methods public_method_defined? public_methods push putc puts quo raise rand rassoc read read_nonblock readchar readline readlines readpartial rehash reject reject! remainder reopen replace require respond_to? reverse reverse! reverse_each rewind rindex rjust round rstrip rstrip! scan seek select send set_trace_func shift singleton_method_added singleton_methods size sleep slice slice! sort sort! sort_by split sprintf squeeze squeeze! srand stat step store strip strip! sub sub! succ succ! sum superclass swapcase swapcase! sync syscall sysopen sysread sysseek system syswrite taint tainted? tell test throw times to_a to_ary to_f to_hash to_i to_int to_io to_proc to_s to_str to_sym tr tr! tr_s tr_s! trace_var transpose trap truncate tty? type ungetc uniq uniq! unpack unshift untaint untrace_var upcase upcase! update upto value? values values_at warn write write_nonblock zero? zip"};var c={cN:"yardoctag",b:"@[A-Za-z]+"};var l=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];var d={cN:"subst",b:"#\\{",e:"}",l:a,k:g};var j=[e.BE,d];var b=[{cN:"string",b:"'",e:"'",c:j,r:0},{cN:"string",b:'"',e:'"',c:j,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:j},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:j},{cN:"string",b:"%[qw]?{",e:"}",c:j},{cN:"string",b:"%[qw]?<",e:">",c:j,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:j,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:j,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:j,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:j,r:10}];var i={cN:"function",b:"\\bdef\\s+",e:" |$|;",l:a,k:g,c:[{cN:"title",b:k,l:a,k:g},{cN:"params",b:"\\(",e:"\\)",l:a,k:g}].concat(l)};var h={cN:"identifier",b:a,l:a,k:g,r:0};var f=l.concat(b.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(l)},i,{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:b.concat([h]),r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},h,{b:"("+e.RSR+")\\s*",c:l.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE]}]),r:0}]));d.c=f;i.c[1].c=f;return{dM:{l:a,k:g,c:f}}}(hljs);hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{dM:{c:d,k:e,i:"\\S"}}}(hljs);