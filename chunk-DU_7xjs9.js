import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,Ha as p,Lr as Kg,Oi as VO,Pr as Jn,Qi as ar,W as Mze,ao as vu,ar as An,ca as ek,da as ge,gi as Rb,io as vt,li as Qc,lt as Ss,ra as de,so as wg,vi as Sk,wr as GV,xr as FO}from"./chunk-BQDTQO8h.js";var w=(()=>{class i{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:51,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Slide`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-slide-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-slide`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`blockquote`,3)(11,`strong`),Sk(12,`Faz parte de:`),Kg(),Qc(13,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-slide`)}),Kg()(),Qc(14,`h3`,5),Sk(15,`Componente`),Kg(),Qc(16,`h4`,6)(17,`code`,7),Sk(18,`PoSlideContentTemplateDirective`),Kg()(),Qc(19,`div`,2)(20,`p`),Sk(21,`Esta diretiva permite a customização de um slide.`),Kg(),Qc(22,`p`),Sk(23,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`Item: `),Qc(27,`code`),Sk(28,`item`),Kg(),Sk(29,` determina o item do slide corrente.`),Kg(),Qc(30,`li`),Sk(31,`Índice: `),Qc(32,`code`),Sk(33,`index`),Kg(),Sk(34,` determina o índice do slide corrente.`),Kg()(),Qc(35,`p`),Sk(36,`Esta diretiva pode ser usada de duas formas: explícita ou `),Qc(37,`em`),Sk(38,`syntax sugar`),Kg(),Sk(39,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(40,`pre`)(41,`code`),Sk(42,`...
<po-slide
  [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

  <ng-template p-slide-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-slide>

...
`),Kg()(),Qc(43,`pre`)(44,`code`),Sk(45,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),Kg()()(),Qc(46,`div`,8)(47,`h4`,9),Sk(48,`Seletor`),Kg(),Qc(49,`pre`,10),Sk(50,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return i})();function j(i,F){if(i&1&&vu(0,`div`,1),i&2){let a=ek();Rb(`hidden`,a.activeTab!==`web`)}}var W=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Slide Content Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Slide Content Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(n,l){n&1&&(Qc(0,`po-page-default`,0),FO(1,j,1,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-slide-content-template-doc`),Kg()()),n&2&&(Rb(`p-title`,l.title)(`p-actions`,l.actions),wg(),VO(l.hidePoWebSample?-1:1),wg(),Rb(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,w],encapsulation:2,changeDetection:1})}return i})()}];var k=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(W),GV]})}return i})();var Z=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,k]})}return i})();export{Z as DocPoSlideContentTemplateModule};