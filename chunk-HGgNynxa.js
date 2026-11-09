import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ri as Zg,Vi as _u,ea as ge,er as An,fi as Rb,gi as Tk,kr as I,nr as BO,qi as de,va as nk,xi as VO,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var k=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=Jn({type:e,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-slide`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoSlideContentTemplateDirective`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`Esta diretiva permite a customização de um slide.`),Zg(),Jc(18,`p`),Tk(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Zg(),Jc(20,`ul`)(21,`li`),Tk(22,`Item: `),Jc(23,`code`),Tk(24,`item`),Zg(),Tk(25,` determina o item do slide corrente.`),Zg(),Jc(26,`li`),Tk(27,`Índice: `),Jc(28,`code`),Tk(29,`index`),Zg(),Tk(30,` determina o índice do slide corrente.`),Zg()(),Jc(31,`p`),Tk(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Jc(33,`em`),Tk(34,`syntax sugar`),Zg(),Tk(35,`. Veja a seguir ambos, respectivamente:`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`...
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
`),Zg()(),Jc(39,`pre`)(40,`code`),Tk(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),Zg()()(),Jc(42,`div`,6)(43,`h4`,7),Tk(44,`Seletor`),Zg(),Jc(45,`pre`,8),Tk(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),Zg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return e})();function F(e,V){if(e&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let l=nk();return H_(l.changeTab(`web`))}),Zg()}if(e&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var N=[{path:``,component:(()=>{class e{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||e)(I(ar),I(An))};static ɵcmp=Jn({type:e,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,l){n&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,F,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-slide-content-template-doc`),Zg()()()),n&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,k],encapsulation:2,changeDetection:1})}return e})()}];var j=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=ge({type:e});static ɵinj=de({imports:[WV.forChild(N),WV]})}return e})();var Y=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=ge({type:e});static ɵinj=de({imports:[M,j]})}return e})();export{Y as DocPoSlideContentTemplateModule};