import{m as P,p as M}from"./main-QQSPUZS3.js";import{Ba as p,Br as Jn,Lr as I,W as Mze,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,co as wg,da as ge,eo as tk,jr as GV,lt as Ss,oo as vt,or as An,qr as LO,ra as de,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var y=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:100,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`List View`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-list-view-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoListViewModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-list-view`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`blockquote`,3)(11,`strong`),Mk(12,`Faz parte de:`),Kg(),Jc(13,`po-tag`,4),vt(`p-click`,function(){return r.openDoc(`po-list-view`)}),Kg()(),Jc(14,`h3`,5),Mk(15,`Componente`),Kg(),Jc(16,`h4`,6)(17,`code`,7),Mk(18,`PoListViewContentTemplateDirective`),Kg()(),Jc(19,`div`,2)(20,`p`),Mk(21,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),Kg(),Jc(22,`p`),Mk(23,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Jc(24,`ul`)(25,`li`),Mk(26,`Item: `),Jc(27,`code`),Mk(28,`item`),Kg(),Mk(29,` determina o item da linha corrente.`),Kg(),Jc(30,`li`),Mk(31,`Índice: `),Jc(32,`code`),Mk(33,`index`),Kg(),Mk(34,` determina o índice da linha corrente.`),Kg()(),Jc(35,`p`),Mk(36,`Esta diretiva pode ser usada de duas formas: explícita ou `),Jc(37,`em`),Mk(38,`syntax sugar`),Kg(),Mk(39,`. Veja a seguir ambos, respectivamente:`),Kg(),Jc(40,`pre`)(41,`code`),Mk(42,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),Kg()(),Jc(43,`pre`)(44,`code`),Mk(45,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),Kg()(),Jc(46,`p`),Mk(47,`A diretiva `),Jc(48,`strong`),Mk(49,`p-list-view-content-template`),Kg(),Mk(50,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Jc(51,`code`),Mk(52,`p-title`),Kg(),Mk(53,`,
a mesma deve retornar um valor do tipo `),Jc(54,`em`),Mk(55,`string`),Kg(),Mk(56,`. Veja o exemplo a seguir:`),Kg(),Jc(57,`pre`)(58,`code`),Mk(59,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),Kg()()(),Jc(60,`div`,8)(61,`h4`,9),Mk(62,`Seletor`),Kg(),Jc(63,`pre`,10),Mk(64,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),Kg()(),Jc(65,`h4`,11),Mk(66,`Propriedades`),Kg(),Jc(67,`table`,12)(68,`tr`,13)(69,`th`,14),Mk(70,`Nome`),Kg(),Jc(71,`th`,14),Mk(72,`Tipo`),Kg(),Jc(73,`th`,14),Mk(74,`Padrão`),Kg(),Jc(75,`th`,14),Mk(76,`Descrição`),Kg()(),Jc(77,`tr`,15)(78,`td`,16)(79,`div`,17)(80,`span`,18),Mk(81,` p-title`),_u(82,`br`),Kg()()(),Jc(83,`td`,19)(84,`code`,20),Mk(85,`(item) => string`),Kg()(),Jc(86,`td`,21),Mk(87,`-`),Kg(),Jc(88,`td`,22)(89,`em`)(90,`strong`),Mk(91,`(opcional)`),Kg()(),Jc(92,`p`),Mk(93,`Função que deve retornar um valor do tipo `),Jc(94,`code`),Mk(95,`string`),Kg(),Mk(96,`, que será utilizado como o título de cada item da lista.`),Kg(),Jc(97,`blockquote`)(98,`p`),Mk(99,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),Kg()()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function j(n,R){if(n&1&&_u(0,`div`,1),n&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`List View Content Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`List View Content Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(o,r){o&1&&(Jc(0,`po-page-default`,0),LO(1,j,1,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-list-view-content-template-doc`),Kg()()),o&2&&(Ab(`p-title`,r.title)(`p-actions`,r.actions),wg(),jO(r.hidePoWebSample?-1:1),wg(),Ab(`hidden`,r.activeTab!==`doc`))},dependencies:[Mze,y],encapsulation:2,changeDetection:1})}return n})()}];var L=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(q),GV]})}return n})();var Y=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,L]})}return n})();export{Y as DocPoListViewContentTemplateModule};