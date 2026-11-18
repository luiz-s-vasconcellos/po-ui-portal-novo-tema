import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var j=(()=>{class o{router=p(An);openDoc(n){this.router.navigate([`/documentation`,n],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:51,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Slide`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-slide-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-slide`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`blockquote`,3)(11,`strong`),Sk(12,`Faz parte de:`),Kg(),Qc(13,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-slide`)}),Kg()(),Qc(14,`h3`,5),Sk(15,`Componente`),Kg(),Qc(16,`h4`,6)(17,`code`,7),Sk(18,`PoSlideContentTemplateDirective`),Kg()(),Qc(19,`div`,2)(20,`p`),Sk(21,`Esta diretiva permite a customização de um slide.`),Kg(),Qc(22,`p`),Sk(23,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`Item: `),Qc(27,`code`),Sk(28,`item`),Kg(),Sk(29,` determina o item do slide corrente.`),Kg(),Qc(30,`li`),Sk(31,`Índice: `),Qc(32,`code`),Sk(33,`index`),Kg(),Sk(34,` determina o índice do slide corrente.`),Kg()(),Qc(35,`p`),Sk(36,`Esta diretiva pode ser usada de duas formas: explícita ou `),Qc(37,`em`),Sk(38,`syntax sugar`),Kg(),Sk(39,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(40,`pre`)(41,`code`),Sk(42,`...
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
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function V(o,H){if(o&1){let n=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(n);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(o&2){let n=ek();Rb(`p-active`,n.activeTab===`web`)}}var W=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(n,a){this.route=n,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(n=>{let a=n.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(n){this.router.navigate([],{queryParams:{view:n},queryParamsHandling:`merge`}),this.activeTab=n}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,V,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-slide-content-template-doc`),Kg()()()),a&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,j],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(W),GV]})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,I]})}return o})();export{oe as DocPoSlideContentTemplateModule};