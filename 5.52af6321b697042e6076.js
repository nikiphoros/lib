(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Sm7":function(a,t,e){"use strict";e.r(t),e.d(t,"LibsModule",function(){return f});var b=e("SVse"),n=e("iInd"),i=e("mrSG"),c=e("e1JD"),o=e("pMLa"),r=e("lAgb"),s=e("8Y7J"),l=e("8HIF");function p(a,t){if(1&a&&(s.Kb(0,"a",21),s.Ib(1,"img",22),s.ac(2),s.Jb()),2&a){const a=t.$implicit;s.Tb("href",a.profileurl,s.Xb),s.yb(1),s.Sb("src",a.icon,s.Xb),s.yb(1),s.cc(" ",a.name," ")}}let g=(()=>{class a{constructor(a){this.router=a,this.packages=new o.a,this.packagesOBS.subscribe(a=>{let t=this.router.url.split("/");3==t.length||a.filter(a=>a.slug===t[2]).length?this.packages=a.filter(a=>a.slug===t[2])[0]:this.router.navigate(["/pages","dashboard"])})}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(s.Hb(n.a))},a.\u0275cmp=s.Bb({type:a,selectors:[["app-ngx-confirm"]],decls:95,vars:4,consts:[[1,"container","view-page","padding-0"],[1,"col-lg-8","offset-lg-2"],[1,"heading-1"],[1,"paratext","mb-2"],[1,"paratext","mb-2","text-end"],["lastupdatedDate","",3,"date"],[1,"list-group","contributors"],[1,"list-group-item","title"],[1,"list-group-item","person"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"divider"],[1,"doc"],[1,"sub-head"],[1,"sub-head-main"],[1,"text","pb-3"],["target","_blank"],[1,"highlight","mb-3"],[1,"language-bash"],[1,"nb"],[1,"text","pb-2","pt-2"],[1,"rouge"],["target","_blank",3,"href"],["alt","lib logo",3,"src"]],template:function(a,t){1&a&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"h4",2),s.ac(3,"Introducing "),s.Kb(4,"span"),s.ac(5),s.Jb(),s.Jb(),s.Kb(6,"p",3),s.ac(7),s.Jb(),s.Kb(8,"p",4),s.Ib(9,"i",5),s.Jb(),s.Kb(10,"ul",6),s.Kb(11,"li",7),s.ac(12,"Authors"),s.Jb(),s.Kb(13,"li",8),s.Zb(14,p,3,3,"a",9),s.Jb(),s.Jb(),s.Ib(15,"div",10),s.Kb(16,"div",11),s.Kb(17,"h5",12),s.ac(18,"Features:"),s.Jb(),s.Kb(19,"ul"),s.Kb(20,"li"),s.ac(21,"About page."),s.Jb(),s.Kb(22,"li"),s.ac(23,"Automatic RSS feed."),s.Jb(),s.Kb(24,"li"),s.ac(25,"Automatic sitemap."),s.Jb(),s.Kb(26,"li"),s.ac(27,"Automatic time to read post indicator."),s.Jb(),s.Kb(28,"li"),s.ac(29,"Cross browser support (supports all modern browsers)."),s.Jb(),s.Kb(30,"li"),s.ac(31,"Custom 404 page."),s.Jb(),s.Kb(32,"li"),s.ac(33,"Custom code highlighting."),s.Jb(),s.Kb(34,"li"),s.ac(35,"Customizable pagination."),s.Jb(),s.Kb(36,"li"),s.ac(37,"Dark and Light theme."),s.Jb(),s.Kb(38,"li"),s.ac(39,"Easy setup and deploying."),s.Jb(),s.Kb(40,"li"),s.ac(41,"Enlarge images on click."),s.Jb(),s.Kb(42,"li"),s.ac(43,"Filter on tags."),s.Jb(),s.Kb(44,"li"),s.ac(45,"Frequently updated with new versions."),s.Jb(),s.Kb(46,"li"),s.ac(47,"Many social media links supported."),s.Jb(),s.Kb(48,"li"),s.ac(49,"Media embed for videos."),s.Jb(),s.Kb(50,"li"),s.ac(51,"PageSpeed optimized."),s.Jb(),s.Kb(52,"li"),s.ac(53,"Proper sharing links for posts on Facebook, Twitter and Google Plus."),s.Jb(),s.Kb(54,"li"),s.ac(55,"SEO optimized."),s.Jb(),s.Kb(56,"li"),s.ac(57,"Support for local fonts."),s.Jb(),s.Kb(58,"li"),s.ac(59,"Support for emoji\u2019s."),s.Jb(),s.Jb(),s.Kb(60,"h5",13),s.ac(61,"Installation:"),s.Jb(),s.Kb(62,"p",14),s.ac(63,"If you haven\u2019t installed the "),s.Kb(64,"a",15),s.ac(65,"following"),s.Jb(),s.ac(66," tools then go ahead and do so (make sure you have Homebrew installed):"),s.Jb(),s.Kb(67,"figure",16),s.Kb(68,"pre"),s.ac(69,"                    "),s.Kb(70,"code",17),s.ac(71,"\n                        brew "),s.Kb(72,"span",18),s.ac(73,"install "),s.Jb(),s.ac(74,"ruby\n                        brew "),s.Kb(75,"span",18),s.ac(76,"install "),s.Jb(),s.ac(77,"npm\n                    "),s.Jb(),s.ac(78,"\n                "),s.Jb(),s.Jb(),s.Kb(79,"p",19),s.Kb(80,"strong"),s.ac(81,"Important note"),s.Jb(),s.ac(82,": Chalk does not support the standard way of Jekyll hosting on GitHub Pages. You need to deploy your working branch (can be any branch, for xxx.github.io users: use another branch than "),s.Kb(83,"code",20),s.ac(84,"master"),s.Jb(),s.ac(85,") with the "),s.Kb(86,"code",20),s.ac(87,"npm run publish"),s.Jb(),s.ac(88," command. Reason for this is because Chalk uses Jekyll plugins that aren\u2019t supported by GitHub pages. The "),s.Kb(89,"code",20),s.ac(90,"npm run publish"),s.Jb(),s.ac(91," command will automatically build the entire project, then push it to the "),s.Kb(92,"code",20),s.ac(93,"gh-pages"),s.Jb(),s.ac(94," branch of your repo. The script creates that branch for you so no need to create it yourself."),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&a&&(s.yb(5),s.bc(t.packages.name),s.yb(2),s.cc(" ",t.packages.paratext,""),s.yb(2),s.Sb("date",t.packages.date),s.yb(5),s.Sb("ngForOf",t.packages.contributors))},directives:[l.a,b.i],styles:[""]}),Object(i.a)([Object(c.c)(r.a.getList)],a.prototype,"packagesOBS",void 0),a})();function u(a,t){if(1&a&&(s.Kb(0,"a",18),s.Ib(1,"img",19),s.ac(2),s.Jb()),2&a){const a=t.$implicit;s.Tb("href",a.profileurl,s.Xb),s.yb(1),s.Sb("src",a.icon,s.Xb),s.yb(1),s.cc(" ",a.name," ")}}let d=(()=>{class a{constructor(a){this.router=a,this.packages=new o.a,this.packagesOBS.subscribe(a=>{let t=this.router.url.split("/");3==t.length||a.filter(a=>a.slug===t[2]).length?this.packages=a.filter(a=>a.slug===t[2])[0]:this.router.navigate(["/pages","dashboard"])})}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(s.Hb(n.a))},a.\u0275cmp=s.Bb({type:a,selectors:[["app-ngx-rating"]],decls:54,vars:12,consts:[[1,"container","view-page","padding-0"],[1,"col-lg-8","offset-lg-2"],[1,"heading-1"],[1,"paratext","mb-2"],[1,"paratext","mb-2","text-end"],["lastupdatedDate","",3,"date"],[1,"list-group","contributors"],[1,"list-group-item","title"],[1,"list-group-item","person"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"divider"],[1,"doc"],[1,"sub-head-main"],[1,"text","pb-3"],[1,"highlight","mb-3"],[1,"language-bash"],[1,"nb"],[1,"text","pb-2","pt-2"],["target","_blank",3,"href"],["alt","lib logo",3,"src"]],template:function(a,t){1&a&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"h4",2),s.ac(3,"Introducing "),s.Kb(4,"span"),s.ac(5),s.Jb(),s.Jb(),s.Kb(6,"p",3),s.ac(7),s.Jb(),s.Kb(8,"p",4),s.Ib(9,"i",5),s.Jb(),s.Kb(10,"ul",6),s.Kb(11,"li",7),s.ac(12,"Authors"),s.Jb(),s.Kb(13,"li",8),s.Zb(14,u,3,3,"a",9),s.Jb(),s.Jb(),s.Ib(15,"div",10),s.Kb(16,"div",11),s.Kb(17,"h5",12),s.ac(18,"Installation:"),s.Jb(),s.Kb(19,"p",13),s.ac(20,"Install @nikiphoros/ngx-rating with npm"),s.Jb(),s.Kb(21,"figure",14),s.Kb(22,"pre"),s.ac(23,"                    "),s.Kb(24,"code",15),s.ac(25,"\n    npm install "),s.Kb(26,"span",16),s.ac(27,"@nikiphoros/ngx-rating --save"),s.Jb(),s.ac(28,"\n                    "),s.Jb(),s.ac(29,"\n                "),s.Jb(),s.Jb(),s.Kb(30,"p",13),s.ac(31,"Add needed package to NgModule imports:"),s.Jb(),s.Kb(32,"figure",14),s.Kb(33,"pre"),s.ac(34,"                    "),s.Kb(35,"code",15),s.ac(36),s.Kb(37,"span",16),s.ac(38,"NgxRatingModule "),s.Jb(),s.ac(39),s.Kb(40,"span",16),s.ac(41,"NgxRatingModule "),s.Jb(),s.ac(42),s.Jb(),s.ac(43,"\n                "),s.Jb(),s.Jb(),s.Kb(44,"p",17),s.Kb(45,"strong"),s.ac(46,"Usage"),s.Jb(),s.ac(47," : After importing NgxRatingModule module in your app, use a component in your html:"),s.Jb(),s.Kb(48,"figure",14),s.Kb(49,"pre"),s.ac(50,"                    "),s.Kb(51,"code",15),s.ac(52),s.Jb(),s.ac(53,"\n                "),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&a&&(s.yb(5),s.bc(t.packages.name),s.yb(2),s.cc(" ",t.packages.paratext,""),s.yb(2),s.Sb("date",t.packages.date),s.yb(5),s.Sb("ngForOf",t.packages.contributors),s.yb(22),s.cc("\n    ","{"," import  "),s.yb(3),s.dc(" ","}","  from '@nikiphoros/ngx-rating';\n\n    @NgModule(","{","\n    ...\n    imports: ["),s.yb(3),s.cc(",...]\n    ...\n    ","}",")\n                    "),s.yb(10),s.ec("\n    <",'ngx-rating \n        [(ngModel)]="rating" \n        (ngModelChange)="change_callback()" //if you want calback after value change \n        >',"' \n    ","<","","/","","ngx-rating>","\n                    "))},directives:[l.a,b.i],styles:[""]}),Object(i.a)([Object(c.c)(r.a.getList)],a.prototype,"packagesOBS",void 0),a})();function h(a,t){if(1&a&&(s.Kb(0,"a",18),s.Ib(1,"img",19),s.ac(2),s.Jb()),2&a){const a=t.$implicit;s.Tb("href",a.profileurl,s.Xb),s.yb(1),s.Sb("src",a.icon,s.Xb),s.yb(1),s.cc(" ",a.name," ")}}const J=[{path:"",redirectTo:"/libs/ngx-confirm",pathMatch:"full"},{path:"ngx-confirm",component:g},{path:"ngx-toggle",component:(()=>{class a{constructor(a){this.router=a,this.packages=new o.a,this.packagesOBS.subscribe(a=>{let t=this.router.url.split("/");3==t.length||a.filter(a=>a.slug===t[2]).length?this.packages=a.filter(a=>a.slug===t[2])[0]:this.router.navigate(["/pages","dashboard"])})}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(s.Hb(n.a))},a.\u0275cmp=s.Bb({type:a,selectors:[["app-ngx-toggle"]],decls:64,vars:20,consts:[[1,"container","view-page","padding-0"],[1,"col-lg-8","offset-lg-2"],[1,"heading-1"],[1,"paratext","mb-2"],[1,"paratext","mb-2","text-end"],["lastupdatedDate","",3,"date"],[1,"list-group","contributors"],[1,"list-group-item","title"],[1,"list-group-item","person"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"divider"],[1,"doc"],[1,"sub-head-main"],[1,"text","pb-3"],[1,"highlight","mb-3"],[1,"language-bash"],[1,"nb"],[1,"text","pb-2","pt-2"],["target","_blank",3,"href"],["alt","lib logo",3,"src"]],template:function(a,t){1&a&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"h4",2),s.ac(3,"Introducing "),s.Kb(4,"span"),s.ac(5),s.Jb(),s.Jb(),s.Kb(6,"p",3),s.ac(7),s.Jb(),s.Kb(8,"p",4),s.Ib(9,"i",5),s.Jb(),s.Kb(10,"ul",6),s.Kb(11,"li",7),s.ac(12,"Authors"),s.Jb(),s.Kb(13,"li",8),s.Zb(14,h,3,3,"a",9),s.Jb(),s.Jb(),s.Ib(15,"div",10),s.Kb(16,"div",11),s.Kb(17,"h5",12),s.ac(18,"Installation:"),s.Jb(),s.Kb(19,"p",13),s.ac(20,"Install @nikiphoros/ngx-toggle with npm"),s.Jb(),s.Kb(21,"figure",14),s.Kb(22,"pre"),s.ac(23,"                    "),s.Kb(24,"code",15),s.ac(25,"\n    npm install "),s.Kb(26,"span",16),s.ac(27,"@nikiphoros/ngx-toggle --save"),s.Jb(),s.ac(28,"\n                    "),s.Jb(),s.ac(29,"\n                "),s.Jb(),s.Jb(),s.Kb(30,"p",13),s.ac(31,"Add needed package to NgModule imports:"),s.Jb(),s.Kb(32,"figure",14),s.Kb(33,"pre"),s.ac(34,"                    "),s.Kb(35,"code",15),s.ac(36),s.Kb(37,"span",16),s.ac(38,"NgxToggleModule"),s.Jb(),s.ac(39),s.Kb(40,"span",16),s.ac(41,"NgxToggleModule"),s.Jb(),s.ac(42),s.Jb(),s.ac(43,"\n                "),s.Jb(),s.Jb(),s.Kb(44,"p",17),s.Kb(45,"strong"),s.ac(46,"Usage"),s.Jb(),s.ac(47," : existing behavior which only return only boolean (true|false)"),s.Jb(),s.Kb(48,"figure",14),s.Kb(49,"pre"),s.ac(50,"                    "),s.Kb(51,"code",15),s.ac(52),s.Jb(),s.ac(53,"\n                "),s.Jb(),s.Jb(),s.Kb(54,"p",17),s.Kb(55,"strong"),s.ac(56,"Usage"),s.Jb(),s.ac(57," : add ToggleValue directive and custom value for true & false which you want to set as below,"),s.Jb(),s.Kb(58,"figure",14),s.Kb(59,"pre"),s.ac(60,"                    "),s.Kb(61,"code",15),s.ac(62),s.Jb(),s.ac(63,"\n                "),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&a&&(s.yb(5),s.bc(t.packages.name),s.yb(2),s.cc(" ",t.packages.paratext,""),s.yb(2),s.Sb("date",t.packages.date),s.yb(5),s.Sb("ngForOf",t.packages.contributors),s.yb(22),s.cc("\n    ","{"," import  "),s.yb(3),s.dc(" ","}","  from '@nikiphoros/ngx-toggle';\n\n    @NgModule(","{","\n    ...\n    imports: ["),s.yb(3),s.cc(",...]\n    ...\n    ","}",")\n                    "),s.yb(10),s.fc("\n    <",'input id="status" type="checkbox" name="status" [(ngModel)]="status"',">\n    <",'label for="status">result'," ","{{status}}"," ","<","","/","","label>","\n                    "),s.yb(10),s.fc("\n    <",'input id="switch" type="checkbox" name="switch" [(ngModel)]="switch"',"  ToggleValue [true]=\"'on'\" [false]=\"'off'\">\n    <",'label for="switch">result'," ","{{switch}}"," ","<","","/","","label>","\n                    "))},directives:[l.a,b.i],styles:[""]}),Object(i.a)([Object(c.c)(r.a.getList)],a.prototype,"packagesOBS",void 0),a})()},{path:"ngx-rating",component:d}];let K=(()=>{class a{}return a.\u0275mod=s.Fb({type:a}),a.\u0275inj=s.Eb({factory:function(t){return new(t||a)},imports:[[n.d.forChild(J)],n.d]}),a})();var m=e("SNTW");let f=(()=>{class a{}return a.\u0275mod=s.Fb({type:a}),a.\u0275inj=s.Eb({factory:function(t){return new(t||a)},providers:[],imports:[[b.b,m.a,K]]}),a})()}}]);