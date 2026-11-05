import{Ai as Zn,Ia as rg,Ka as vx,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Sa as nu,Tr as Fx,Ua as v_,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ha as lO,ir as Ax,ln as lre,oi as Sn,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var k=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=Zn({type:e,selectors:[[`sample-po-slide-content-template-doc`]],standalone:!1,decls:47,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,l){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoSlideModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-slide`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoSlideContentTemplateDirective`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`Esta diretiva permite a customização de um slide.`),wg(),jc(18,`p`),lO(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),wg(),jc(20,`ul`)(21,`li`),lO(22,`Item: `),jc(23,`code`),lO(24,`item`),wg(),lO(25,` determina o item do slide corrente.`),wg(),jc(26,`li`),lO(27,`Índice: `),jc(28,`code`),lO(29,`index`),wg(),lO(30,` determina o índice do slide corrente.`),wg()(),jc(31,`p`),lO(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),jc(33,`em`),lO(34,`syntax sugar`),wg(),lO(35,`. Veja a seguir ambos, respectivamente:`),wg(),jc(36,`pre`)(37,`code`),lO(38,`...
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
`),wg()(),jc(39,`pre`)(40,`code`),lO(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),wg()()(),jc(42,`div`,6)(43,`h4`,7),lO(44,`Seletor`),wg(),jc(45,`pre`,8),lO(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),wg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return e})();function F(e,V){if(e&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let l=Fx();return __(l.changeTab(`web`))}),wg()}if(e&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var N=[{path:``,component:(()=>{class e{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||e)(b(ir),b(Sn))};static ɵcmp=Zn({type:e,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Slide Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,l){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,F,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-slide-content-template-doc`),wg()()()),n&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Vze,lre,ure,k],encapsulation:2,changeDetection:1})}return e})()}];var j=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=pe({type:e});static ɵinj=ue({imports:[I1.forChild(N),I1]})}return e})();var Y=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=pe({type:e});static ɵinj=ue({imports:[M,j]})}return e})();export{Y as DocPoSlideContentTemplateModule};