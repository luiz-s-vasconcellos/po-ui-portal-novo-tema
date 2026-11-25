import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Hr as Jn,Kr as Kg,Qr as Mk,Sa as jO,U as Mze,Va as p,Vr as Jc,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,co as wg,eo as tk,jr as GV,lt as Ss,or as An,pa as ge,zr as I}from"./chunk-DdK63a0t.js";var w=(()=>{class i{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:51,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Slide`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-slide-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-slide`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`blockquote`,3)(11,`strong`),Mk(12,`Faz parte de:`),Kg(),Jc(13,`po-tag`,4),_t(`p-click`,function(){return l.openDoc(`po-slide`)}),Kg()(),Jc(14,`h3`,5),Mk(15,`Componente`),Kg(),Jc(16,`h4`,6)(17,`code`,7),Mk(18,`PoSlideContentTemplateDirective`),Kg()(),Jc(19,`div`,2)(20,`p`),Mk(21,`Esta diretiva permite a customização de um slide.`),Kg(),Jc(22,`p`),Mk(23,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Jc(24,`ul`)(25,`li`),Mk(26,`Item: `),Jc(27,`code`),Mk(28,`item`),Kg(),Mk(29,` determina o item do slide corrente.`),Kg(),Jc(30,`li`),Mk(31,`Índice: `),Jc(32,`code`),Mk(33,`index`),Kg(),Mk(34,` determina o índice do slide corrente.`),Kg()(),Jc(35,`p`),Mk(36,`Esta diretiva pode ser usada de duas formas: explícita ou `),Jc(37,`em`),Mk(38,`syntax sugar`),Kg(),Mk(39,`. Veja a seguir ambos, respectivamente:`),Kg(),Jc(40,`pre`)(41,`code`),Mk(42,`...
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
`),Kg()(),Jc(43,`pre`)(44,`code`),Mk(45,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),Kg()()(),Jc(46,`div`,8)(47,`h4`,9),Mk(48,`Seletor`),Kg(),Jc(49,`pre`,10),Mk(50,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return i})();function j(i,F){if(i&1&&_u(0,`div`,1),i&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var W=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Slide Content Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Slide Content Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(n,l){n&1&&(Jc(0,`po-page-default`,0),LO(1,j,1,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-slide-content-template-doc`),Kg()()),n&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,w],encapsulation:2,changeDetection:1})}return i})()}];var k=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(W),GV]})}return i})();var Z=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,k]})}return i})();export{Z as DocPoSlideContentTemplateModule};